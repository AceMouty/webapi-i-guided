// import express
const express = require('express');
// bring in hubsModel
const hubsModel = require('./data/hubs-model')
// create server
const server = express()
// middleware, used to read incoming JSON from a req body
server.use(express.json())

// =====================================
// Routes
// =====================================

// create a route / req handler

// root route
server.get("/", (req, res) => {
    res.send("hello node22")
})

// GET: hubs
server.get("/hubs", (req, res) => {
    // get a list of hubs from the database
    hubsModel.find()
    .then(hubs => res.send(hubs))
    .catch(err => res.send(err))
})

// POST: hubs
server.post('/hub', (req, res) => {
    const hubData = req.body;

    hubsModel
    .add(hubData)
    .then(hub => res.json(hub))
    .catch(() => res.json({message: 'err saving the hub'}))
})

// DELETE: hubs
server.delete('/hubs/:id', (req, res) => {
    // get the id from URL params
    const id = req.params.id

    hubsModel.remove(id)
    .then(hub => res.json(hub))
    .catch(err => res.json({message: "had an issue removing the hub", err: err}))
})


// server port
const port = 8000;
// run the server
server.listen(port, () => console.log(` API RUNNING ON PORT ${port}`));