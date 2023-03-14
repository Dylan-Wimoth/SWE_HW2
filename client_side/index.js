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

// FIND USER
findUserForm.addEventListener("submit", (event) => {
    event.preventDefault(); //Stops page from refreshing after every submit

    // Data from form
    let id = document.getElementById("find-user-id").value;

    // Determines which user needs to be found
    let index = null

    // Makes sure data is correct
    if (id == ""){
        console.log("Missing id")
        return;
    }

    const options = {
        method: 'GET'
    }
  
    // Fetches data of each user from database
    fetch('/find', options)
        .then(response => {
            if(response.ok) {
                return response.json();
            }
        }).then(data => {
            // If there is data, look for user
            if(data) {
                // Find the row with the correct id and save it's index
                for (let i = 0; i < data.length; i++){
                    if (data[i]["id"] == id){
                        index = i
                    }
                }

                // If no index is found, that user is not in the database
                if (index==null){
                    console.log("Couldn't find user")
                    return;
                }

                // Get id for each cell in that row
                let id0 = "row-" + index + 0;
                let id1 = "row-" + index + 1;
                let id2 = "row-" + index + 2;
                let id3 = "row-" + index + 3;
                
                // Change class to found-row to highlight row
                document.getElementById(id0).className = "found-row"
                document.getElementById(id1).className = "found-row"
                document.getElementById(id2).className = "found-row"
                document.getElementById(id3).className = "found-row"

                // Gets rid of class
                function backToNormal() {
                    document.getElementById(id0).classList.remove("found-row");
                    document.getElementById(id1).classList.remove("found-row");
                    document.getElementById(id2).classList.remove("found-row");
                    document.getElementById(id3).classList.remove("found-row");
                }

                // Waits 3 seconds to make row go back to normal
                const myTimeout = setTimeout(backToNormal, 3000);

            }
        }).catch(err => console.error(err));
    

    // Deletes data within form
    document.getElementById("find-user-id").value = null;


    console.log(`${id}`)
})