const sqlite3 = require('sqlite3').verbose();

let sql;

// Inserts user into database
function addUser(db, first_name,last_name,id,points){
    sql = 'INSERT INTO users(first_name,last_name,id,points) VALUES (?,?,?,?)'
    db.run(sql,[first_name,last_name,id,points],(err)=>{
        if (err){
            return console.error(err.message);
        }  
    })
}

// Deletes User from database
function deleteUser(db, id){
    sql = 'DELETE FROM users WHERE id=?';
    db.run(sql,[id],(err)=>{
        if (err){
            return console.error(err.message);
        }
    })
}

exports.addUser = addUser
exports.deleteUser = deleteUser