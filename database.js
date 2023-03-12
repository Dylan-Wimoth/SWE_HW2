const sqlite3 = require('sqlite3').verbose();

let sql;

function connectToDB(){
    const db = new sqlite3.Database('./database.db', sqlite3.OPEN_READWRITE,(err)=>{
        if (err){
            return console.error(err.message);
        }
    });
}


// Create table
function createTable(){
    sql = 'CREATE TABLE users(first_name,last_name,id,points)'
    db.run(sql);
}

// Remove Table
function removeTable(){
    sql = "DROP TABLE users"
    db.run(sql)
}


// Insert Data into database
function addUser(first_name,last_name,id,points){
    sql = 'INSERT INTO users(first_name,last_name,id,points) VALUES (?,?,?,?)'
    db.run(sql,[first_name,last_name,id,points],(err)=>{
        if (err){
            return console.error(err.message);
        }  
    })
}

// Delete User
function deleteUser(id){
    sql = 'DELETE FROM users WHERE id=?';
    db.run(sql,[id],(err)=>{
        if (err){
            return console.error(err.message);
        }
    })
}

// Query the data
function queryData(){
    sql = 'SELECT * FROM users';
    db.all(sql,[],(err,rows) => {
        if (err){
            return console.error(err.message);
        }
        rows.forEach((row) => {
            console.log(row);
        })
    })
}

exports.connectToDB = connectToDB
exports.createTable = createTable
exports.removeTable = removeTable
exports.addUser = addUser
exports.deleteUser = deleteUser
exports.queryData = queryData