const addUserForm = document.getElementById("add-user-form")
const findUserForm = document.getElementById("find-user-form")
const deleteUserForm = document.getElementById("delete-user-form")

import generateTable from "./Component.js";

//When page is loaded/refreshed, create a table with all current users
window.addEventListener('load', () => {
    generateTable();
})

//ADD USER
addUserForm.addEventListener("submit", (event) => {
    // Data from form
    let first_name = document.getElementById("add-user-first_name").value;
    let last_name = document.getElementById("add-user-last_name").value;
    let id = document.getElementById("add-user-id").value;
    let points = document.getElementById("add-user-points").value;

    // Makes sure data is correct
    if (first_name == ""){
        console.log("Missing first name")
        return;
    }
    if (last_name == ""){
        console.log("Missing last name")
        return;
    }
    if (id == ""){
        console.log("Missing id")
        return;
    }
    if (points == ""){
        console.log("Missing points")
        return;
    }

    // Prepares data to be posted
    const data = {first_name, last_name, id, points}
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    // Sends Post
    fetch('/add', options);
    
    // Deletes data within form
    document.getElementById("add-user-first_name").value = null;
    document.getElementById("add-user-last_name").value = null;
    document.getElementById("add-user-id").value = null;
    document.getElementById("add-user-points").value = null;

})

//DELETE USER
deleteUserForm.addEventListener("submit", (event) => {
    // Data from form
    let id = document.getElementById("delete-user-id").value;
    // Makes sure data is correct
    if (id == ""){
        console.log("Missing id")
        return;
    }

    // Prepares data to be posted
    const data = {id}
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    // Sends Post
    fetch('/delete', options);

    // Deletes data within form
    document.getElementById("delete-user-id").value = null;
})

//FIND USER
findUserForm.addEventListener("submit", (event) => {
    event.preventDefault(); //Stops page from refreshing after every submit

    // Data from form
    let id = document.getElementById("find-user-id").value;
    // Makes sure data is correct
    if (id == ""){
        console.log("Missing id")
        return;
    }

    // Prepares data to be posted
    const data = {id}
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    // Sends Post
    fetch('/find', options);

    // Deletes data within form
    document.getElementById("find-user-id").value = null;
    console.log(`${id}`)
})