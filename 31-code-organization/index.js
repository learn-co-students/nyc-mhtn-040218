// the module pattern
// See module.js

// list of functions to interact with our API
function parseResponseJson(response) {
    return response.json();
  }

  function messages() {
    const url =
      "https://fetch-message-in-the-bottle.herokuapp.com/api/v1/messages";
    return fetch(url).then(parseResponseJson);
  }

  function createMessage(body) {
    const url =
      "https://fetch-message-in-the-bottle.herokuapp.com/api/v1/messages";
    const postConfig = {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(body)
    };
    return fetch(url, postConfig).then(parseResponseJson);
  }

// Adapter object
const messageAdapterObj = {
  url: "https://fetch-message-in-the-bottle.herokuapp.com/api/v1/messages",
  parseResponseJson: function parseResponseJson(response) {
    return response.json();
  },
  messages: function messages() {
    const url = this.url;
    return fetch(url).then(parseResponseJson);
  },
  createMessage: function createMessage(body) {
    const url = this.url;
    const postConfig = {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(body)
    };
    return fetch(url, postConfig).then(parseResponseJson);
  }
}

messageAdapterObj.messages().then(console.log)

// Object.create()
const messageAdapterObjFromObjectCreate = Object.create(messageAdapterObj)
//const iceCreamsAdapterObjFromObjectCreate = Object.create(messageAdapterObj)
messageAdapterObjFromObjectCreate.url = "https://fetch-message-in-the-bottle.herokuapp.com/api/v1/messages"
//iceCreamsAdapterObjFromObjectCreate.url = "https://fetch-message-in-the-bottle.herokuapp.com/api/v1/icecreams"
messageAdapterObjFromObjectCreate.messages().then(console.log)

// Adapter as a class
class Adapter {
  constructor(url) {
    this.url = url
  }

  parseResponseJson(response) {
    return response.json();
  }

  messages() {
    return fetch(this.url).then(parseResponseJson);
  }

  createMessage(body) {
    const postConfig = {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(body)
    };
    return fetch(this.url, postConfig).then(parseResponseJson);
  }
}

const messageAdapterFromClass = new Adapter("https://fetch-message-in-the-bottle.herokuapp.com/api/v1/messages")
messageAdapterFromClass.messages().then(console.log)