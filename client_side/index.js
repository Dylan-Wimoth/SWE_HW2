const addUserForm = document.getElementById("add-user-form")
const findUserForm = document.getElementById("find-user-form")
const deleteUserForm = document.getElementById("delete-user-form")
const findPointsForm = document.getElementById("points-form")

addUserForm.addEventListener("submit", (event) => {
    event.preventDefault(); //Stops page from refreshing after every submit

    // Data from form
    let first_name = document.getElementById("add-user-first_name").value;
    let last_name = document.getElementById("add-user-last_name").value;
    let id = document.getElementById("add-user-id").value;
    let points = document.getElementById("add-user-points").value;

    // Makes sure data is filled into box
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

    fetch('/add', options);
    
    // Deletes data within form
    document.getElementById("add-user-first_name").value = null;
    document.getElementById("add-user-last_name").value = null;
    document.getElementById("add-user-id").value = null;
    document.getElementById("add-user-points").value = null;

})

findUserForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let id = document.getElementById("find-user-id").value;
    if (id == ""){
        console.log("Missing id")
        return;
    }

    // Prepares data to be posted
    const data = {id}
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    fetch('/find', options);

    document.getElementById("find-user-id").value = null;
    console.log(`${id}`)
})

deleteUserForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let id = document.getElementById("delete-user-id").value;
    if (id == ""){
        console.log("Missing id")
        return;
    }

    // Prepares data to be posted
    const data = {id}
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    fetch('/delete', options);

    document.getElementById("delete-user-id").value = null;

    console.log(`${id}`)
})

findPointsForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let first_name = document.getElementById("points-user-first_name").value;
    let last_name = document.getElementById("points-user-last_name").value;

    if (first_name == ""){
        console.log("Missing first name")
        return;
    }
    if (last_name == ""){
        console.log("Missing last name")
        return;
    }

    // Prepares data to be posted
    const data = {first_name, last_name}
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    fetch('/points', options);

    console.log(`${first_name} ${last_name}`)
    document.getElementById("points-user-first_name").value = null;
    document.getElementById("points-user-last_name").value = null;

})