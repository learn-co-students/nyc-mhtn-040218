var counter = 100

function index() {
    return fetch('http://fetch-message-in-the-bottle.herokuapp.com/api/v2/messages').then(r=>r.json()).then(data=>console.log(data))
}

function post(body) {
    const config = {
        method:'POST',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(body)
    }
    return fetch('http://fetch-message-in-the-bottle.herokuapp.com/api/v2/messages',config).then(r=>r.json()).then(data=>console.log(data))
}

function patch(body,id) {
    const config = {
        method:'PATCH',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(body)
    }
    return fetch(`http://fetch-message-in-the-bottle.herokuapp.com/api/v2/messages/${id}`,config).then(r=>r.json()).then(data=>console.log(data))
}

function fetchDelete(id) {
    const config = {
        method:'DELETE'
    }
    return fetch(`http://fetch-message-in-the-bottle.herokuapp.com/api/v2/messages/${id}`,config).then(r=>r.json()).then(data=>console.log(data))
}

function show(id) {
    return fetch(`http://fetch-message-in-the-bottle.herokuapp.com/api/v2/messages/${id}`).then(r=>r.json()).then(data=>console.log(data))
}

post({message:{real_name:"octothorpe",message:"working on that JS thing and the that JS this"}})
patch({message:{real_name:"octothorpe",message:"now only working on this "}},334)
fetchDelete(counter++)
index()
show(55)