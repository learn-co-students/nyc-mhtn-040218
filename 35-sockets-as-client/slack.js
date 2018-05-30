var WebSocket = require('ws')
var key = require('./key')
var fetch = require('node-fetch')

var HASHTAG_SOCKETS = "C9VETKNL8"

fetch('https://slack.com/api/rtm.connect?token=' + key.slack + '&pretty=1')
  .then(r => r.json()).then(j => openSocket(j.url))

openSocket = (url) => {
  ws = new WebSocket(url);

  ws.on('open', () => {
    console.log("OPEN!")
  })

  ws.on('close', (e) => {
    console.log("CLOSE!!!")
    console.log(e)
  })

  ws.on('message', (m) => {
    j = JSON.parse(m)
    if (j.type == "message" && j.channel == HASHTAG_SOCKETS) {

      // #SOCKET SOCKTOTHOTS
      console.log(j.text)

      if (j.text) {
        if (j.text.includes("lift")) {
          send_rishi_intro()
        }

        if (j.text.includes("tion")) {
          send_shun_replacement(j.text)
        }

        if (j.text.includes("flatiron")) {
          send_flatiron_building()
        }
      }
    }
  })

  ws.on('error', (e) => {
    console.log("ERROR!")
    console.log(e)
  })

  var send_rishi_intro = () => {
    ws.send(JSON.stringify({
      "id": 1,
      "type": "message",
      "channel": HASHTAG_SOCKETS,
      "text": "Hello my name is Squishi wibbly wubbly wobbly"
    }))
  }

  var send_shun_replacement = (message) => {
    ws.send(JSON.stringify({
      "id": 1,
      "type": "message",
      "channel": HASHTAG_SOCKETS,
      "text": message.replace('tion', ':shun:')
    }))
  }

  var send_flatiron_building = () => {
    ws.send(JSON.stringify({
      "id": 1,
      "type": "message",
      "channel": HASHTAG_SOCKETS,
      "text": 'https://i.imgur.com/ZHcjvMU.jpg'
    }))
  }
}
