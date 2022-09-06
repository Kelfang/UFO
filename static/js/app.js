// Import the data from data.js.
const tableData = data;

// Reference the HTML table using d3.
var tbody = d3.select("tbody");

// Build function and clear out any existing data (using the empty quotes).
function buildTable(data) {
    tbody.html("");
}

// Next loop thru each object in the data and append a row and cells for each value in the row.
data.forEach((dataRow) => {
    let row = tbody.append("tr");

    // Loop thru each field in the dataRow and add each value as a table cell(td).
    object.values(dataRow).forEach((val)=> {
        let cell = row.append("td");
        cell.text(val);
    });
});