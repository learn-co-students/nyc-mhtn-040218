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

// Object.create()

// Adapter as a class

//using the module pattern