var WebSocket = require('ws')
var key = require('./key')

const uri = 'wss://ws.coinapi.io/v1/'

const ws = new WebSocket(uri);


ws.on('open', () => {
  ws.send(JSON.stringify({
    'type': 'hello',
    'apikey': key.coinAPI,
    'subscribe_data_type': ['trade'],
    'heartbeat': false
  }))
})

ws.on('close', cEvent => {
  console.log('close')
  console.log(cEvent)
})

ws.on('message', mEvent => {
  const m = JSON.parse(mEvent)
  if (m.type == "error") {
    console.log(`Error: ${m.message}`)
  } else {
    console.log(m)
  }
})

ws.on('error', event => {
  console.log("ERROR ALERT")
  console.log(event)
})
