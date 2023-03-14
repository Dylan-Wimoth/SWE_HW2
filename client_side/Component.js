// Creates a table with the data retrieved from database
function generateTable() {
    const options = {
        method: 'GET'
    }
  
    // Fetches data of each user from database
    fetch('/users', options)
        .then(response => {
            if(response.ok) {
                return response.json();
            }
        }).then(data => {
            // If there is data
            if(data) {
                
                //Create table with 'users-table' class
                var div = document.createElement('div');
                div.setAttribute('class', 'users-table'); // and make sure myclass has some styles in css
                document.body.appendChild(div);

                // creates table with body
                const tbl = document.createElement("table");
                const tblBody = document.createElement("tbody");
            
                // Add users to table
                for (let i = 0; i < data.length + 1; i++) {
                    // Creates a row for each user
                    const row = document.createElement("tr");
                    
                    // Creates column for each user
                    for (let j = 0; j < 4; j++) {

                        const cell = document.createElement("td");

                        // If it's the first row, add headings for table
                        if (i == 0){
                            if (j == 0){
                                const cellValue = document.createTextNode("First Name");
                                cell.setAttribute('class', 'table-title');
                                cell.appendChild(cellValue);
                                row.appendChild(cell);
                            } else if (j == 1) {
                                const cellValue = document.createTextNode("Last Name");
                                cell.setAttribute('class', 'table-title');
                                cell.appendChild(cellValue);
                                row.appendChild(cell);
                            } else if (j == 2) {
                                const cellValue = document.createTextNode("ID");
                                cell.setAttribute('class', 'table-title');
                                cell.appendChild(cellValue);
                                row.appendChild(cell);
                            } else {
                                const cellValue = document.createTextNode("Points");
                                cell.setAttribute('class', 'table-title');
                                cell.appendChild(cellValue);
                                row.appendChild(cell);
                            }  
                        // If header row was already created                  
                        } else {
                            
                            if (j == 0){
                                const cellValue = document.createTextNode(data[i-1]["first_name"]);
                                cell.setAttribute('class', 'row-' + i - 1); // Creates a unique class for each row
                                cell.appendChild(cellValue);
                                row.appendChild(cell);
                            } else if (j == 1) {
                                const cellValue = document.createTextNode(data[i-1]["last_name"]);
                                cell.setAttribute('class', 'row-' + i - 1);
                                cell.appendChild(cellValue);
                                row.appendChild(cell);
                            } else if (j == 2) {
                                const cellValue = document.createTextNode(data[i-1]["id"]);
                                cell.setAttribute('class', 'row-' + i - 1);
                                cell.appendChild(cellValue);
                                row.appendChild(cell);
                            } else {
                                const cellValue = document.createTextNode(data[i-1]["points"]);
                                cell.setAttribute('class', 'row-' + i - 1);
                                cell.appendChild(cellValue);
                                row.appendChild(cell);
                            }
                        }
                    }
            
                    // Adds user row to table
                    tblBody.appendChild(row);
                }
            
                // Puts body in table
                tbl.appendChild(tblBody);

                // Adds table to div created earlier
                div.appendChild(tbl);

                // Adds table to html
                document.body.appendChild(div);
                
                // Gives border an outline
                tbl.setAttribute("border", "2");
            }
        }).catch(err => console.error(err));
    }

export default generateTable