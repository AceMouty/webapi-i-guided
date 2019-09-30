// import express
const express = require('express');
// bring in hubsModel
const hubsModel = require('./data/hubs-model')
// create server
const server = express()

// create a route / req handler

// root route
server.get("/", (req, res) => {
    res.send("hello node22")
})

server.get("/hubs", (req, res) => {
    // get a list of hubs from the database
    hubsModel.find()
    .then(hubs => res.send(hubs))
    .catch(err => res.send(err))
})


// server port
const port = 8000;
// run the server
server.listen(port, () => console.log(` API RUNNING ON PORT ${port}`));