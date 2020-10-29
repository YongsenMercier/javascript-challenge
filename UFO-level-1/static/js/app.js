// from data.js
const tableData = data;
let tableMatch = null;

// set the reference to the table body and initialize filter flag
let tbody = d3.select("tbody");
let filtered = 0;

// fill in full table by default
tableData.forEach(row => {
    tbody.append("tr");

    for (key in row){
        const cell = tbody.append("td");
        cell.text(row[key]);
    }
});

let dateField = d3.select("#datetime");
const button = d3.select("#filter-btn");


// filter the table by date
function filterDate(){
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // get the user's entered date value
    let userDate = dateField.property("value");

    // only filter if user entered a date
    if(userDate){
        // flag that table is filtered
        filtered = 1;

        // filter tableData for observations with matching dates
        tableMatch = tableData.filter(obs => obs.datetime == userDate);

        // wipe out the tbody to be able to write out new table
        tbody.html("");

        // fill in observations only where date matches user input
        tableMatch.forEach(row => {
            tbody.append("tr");
        
            for (key in row){
                const cell = tbody.append("td");
                cell.text(row[key]);
            }
        });
    };
}

// define what happens when user clicks the buttons
button.on("click", filterDate);

//the end!