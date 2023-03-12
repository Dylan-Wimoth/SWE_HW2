const express = require("express");
const myDatabase = require('./database.js')
const app = express();
var path = require('path');
var public = path.join(__dirname, 'client_side');
app.use(express.json());

const port = 1234

// viewed at http://localhost:3000
app.get('/', function(req, res) {
    res.sendFile(path.join(public, 'index.html'));
});

// Sends index.html
app.use('/', express.static(public));

// Listens for requests from the client
app.listen(port, () => console.log(`listening at 1234`));

//Listens for add POST request from client
app.post('/add', (req,res) => {
    console.log("adding")
    console.log(req.body);
});

//Listens for find POST request from client
app.post('/find', (req,res) => {
    console.log("finding")
    console.log(req.body);
});

//Listens for delete POST request from client
app.post('/delete', (req,res) => {
    console.log("deleting")
    console.log(req.body);
});

//Listens for point POST request from client
app.post('/points', (req,res) => {
    console.log("finding points")
    console.log(req.body);
});