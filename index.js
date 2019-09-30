// import express
const express = require('express');
// create server
const server = express()

// create a route / req handler

// root route
server.get("/", (req, res) => {
    
})


// server port
const port = 8000;
// run the server
server.listen(port, () => console.log(` API RUNNING ON PORT ${port}`));