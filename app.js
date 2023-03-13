const express = require("express");
const app = express();
var path = require('path');
var public = path.join(__dirname, 'client_side');
app.use(express.json());

const myDatabase = require('./database.js')

const sqlite3 = require('sqlite3').verbose();
let sql;

const port = 1234

const db = new sqlite3.Database('./database.db', sqlite3.OPEN_READWRITE,(err)=>{
    if (err){
        return console.error(err.message);
    }
});

sql = 'CREATE TABLE IF NOT EXISTS users(first_name,last_name,id,points)'
db.run(sql);

// viewed at http://localhost:1234
app.get('/', function(req, res) {
    res.sendFile(path.join(public, 'index.html'));
});

// Gets data from database whenever the page is refreshed
app.get('/users', function(req, res) {
    sql = 'SELECT * FROM users';
    db.all(sql,[],(err,rows) => {
        if (err){
            return console.error(err.message);
        }

        // Sends data of each user to frontend
        res.status(200).send(rows)
    })

    
});

// Sends index.html
app.use('/', express.static(public));

// Listens for requests from the client
app.listen(port, () => console.log(`listening at 1234`));

//Listens for add POST request from client
app.post('/add', (req,res) => {
    myDatabase.addUser(db, req.body["first_name"],req.body["last_name"],req.body["id"],req.body["points"])
});

//Listens for DELETE request from client
app.delete('/delete', (req,res) => {
    myDatabase.deleteUser(db, req.body["id"]);
});

//Listens for find GET request from client
app.get('/find', (req,res) => {
    console.log("finding");
    console.log(req.body);
});

//Listens for point GET request from client
app.get('/points', (req,res) => {
    console.log("finding points")
    console.log(req.body);
});