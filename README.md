# CMSC 447 - Homework 2 - Dylan Wilmoth
# How to run
* Clone repository using ``git clone https://github.com/Dylan-Wimoth/SWE_HW2``
* Once in SWE_HW2 directory, type ``npm install`` to install necessary node_modules
* Start webserver using ``node ./app.js``
* Go to ``localhost:1234`` in web browser

# Files and their purpose

## client_side/index.html
* Creates the layout of the webpage.
* Links page to main.css, index.js, and Component.js.

## client_side/main.css
* Styles the html page.

## client_side/index.js
* Handles sending forms to the express server through HTTP request methods (Add User, Delete User, Find User). 
* Makes sure that form is completed before being sent.
* Calls upon Component.js to display database as table when page is refreshed.
* Changes class of user that is found using "find user" section of webpage.

## client_side/Component.js
* Takes data from database and presents it in a table through GET request.
* Gives each cell a specific id so that a row can be highlighted during "find user".

## app.js
* Hosts the webpage.
* Connects front-end to database.
* Facilitates the passing of information between front-end and back-end.
* Links webpage to port: 1234.

## database.db 
* Stores information of users using sqlite3

## database.js
* Contains function to add/delete user from the database.

## .gitignore
* Stops node_modules from being committed