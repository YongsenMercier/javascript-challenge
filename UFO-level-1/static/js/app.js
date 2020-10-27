// from data.js
const tableData = data;
//let tableMatch = null;

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
