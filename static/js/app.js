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

// Adding a date function. 
function handleClick() {
    // Grab the datetime value from the filter.
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    // Check to see if a date was entered and filter the data using that date.
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
// Rebuild the table using the filtered data. If no date was entered, then filteredData will just 
// be the original tableData.
buildTable(filteredData);

// Attach an event to listen for the form button.
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads.
buildTable(tableData);
};

