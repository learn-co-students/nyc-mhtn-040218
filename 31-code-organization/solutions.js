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
  let AdapterObj = {
    apiUrl: "https://fetch-message-in-the-bottle.herokuapp.com/api/v1",
    resource: "messages",
    path: function() {
      return `${this.apiUrl}/${this.resource}`;
    },
    parseResponseJson: function parseResponseJson(response) {
      return response.json();
    },
    messages: function messages() {
      return fetch(this.path()).then(this.parseResponseJson);
    },
    createMessage: function createMessage(body) {
      const postConfig = {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(body)
      };
      return fetch(this.path(), postConfig).then(this.parseResponseJson);
    }
  };

  // Object.create
  let AdapterObj = {
    //apiUrl: "https://fetch-message-in-the-bottle.herokuapp.com/api/v1",
    //resource: "messages",
    path: function() {
      return `${this.apiUrl}/${this.resource}`;
    },
    parseResponseJson: function parseResponseJson(response) {
      return response.json();
    },
    messages: function messages() {
      return fetch(this.path()).then(this.parseResponseJson);
    },
    createMessage: function createMessage(body) {
      const postConfig = {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(body)
      };
      return fetch(this.path(), postConfig).then(this.parseResponseJson);
    }
  };

  const messageAdapterFromObjectCreate = Object.create(AdapterObj)
  messageAdapterFromObjectCreate.resource = 'messages'
  messageAdapterFromObjectCreate.apiUrl = "https://fetch-message-in-the-bottle.herokuapp.com/api/v1"
  messageAdapterFromObjectCreate.messages().then(console.log)

  // Adapter as a class
  class Adapter {
    constructor(apiUrl, resource) {
      this.apiUrl = apiUrl,
      this.resource = resource
    }

    path() {
      return `${this.apiUrl}/${this.resource}`;
    }

    parseResponseJson(response) {
      return response.json();
    }

    messages() {
      return fetch(this.path()).then(this.parseResponseJson);
    }

    createMessage(body) {
      const postConfig = {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(body)
      };
      return fetch(this.path(), postConfig).then(this.parseResponseJson);
    }

  }
  messagesAdapter = new Adapter("https://fetch-message-in-the-bottle.herokuapp.com/api/v1",'messages')

  //using the module pattern
  function generateAdapter(apiUrl,resourceName) {
    let requestCounter = 0
    return {
        [resourceName]: function () {
            requestCounter++
            console.log(`will fetch for ${apiUrl}/${resourceName}`)
            console.log(`This adapter executed ${requestCounter} request(s)`)
        }
    }
}

function generateAdapterViaCurrying(apiUrl) {
    let requestCounter = 0
    return function(resourceName) {
        return {
            [resourceName]: function () {
                requestCounter++
                console.log(`will fetch for ${apiUrl}/${resourceName}`)
                console.log(`This adapter executed ${requestCounter} request(s)`)
            }
        }
    }
}

const messagesAdapterUsingModulePattern = generateAdapter("https://fetch-message-in-the-bottle.herokuapp.com/api/v1",'messages')
messagesAdapterUsingModulePattern.messages()

const messagesAdapterUsingModulePatternAndCurry = generateAdapterViaCurrying("https://fetch-message-in-the-bottle.herokuapp.com/api/v1")('messages')
messagesAdapterUsingModulePatternAndCurry.messages()
messagesAdapterUsingModulePatternAndCurry.messages()
messagesAdapterUsingModulePatternAndCurry.messages()