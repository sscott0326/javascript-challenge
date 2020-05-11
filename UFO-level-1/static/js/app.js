//from data.js
var tableData = data;

//Selecting the table
var table = d3.select("table");

//Selecting table body
var tbody = d3.select("tbody");

//Building table with data
data.forEach((ufosighting) => {
    var row = tbody.append("tr");
    Object.entries(ufosighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

//Select button
var button = d3.select("#filter-btn");

//Select form
var form = d3.select("#form");

//Create event handlers 
button.on("click",filterData);
form.on("submit",filterData);

function filterData() {

    //Prevent the page from refreshing
    d3.event.preventDefault();
    
    //Select the input element and get the raw HTML node
    var inputElement = d3.select("#date-input");
  
    //Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    //Filter data based on input value
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

    //Clear Table
    tbody.html("");

    //Build new table
    filteredData.forEach((filtersighting) => {
            row = tbody.append("tr");
        Object.entries(filtersighting).forEach(([key, value]) => {
            cell = row.append("td");
          cell.text(value);
        });
      });
};
 