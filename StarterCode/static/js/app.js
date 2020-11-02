// from data.js
var tableData = d3.select("#data");

// YOUR CODE HERE!
var tableBody = d3.select("tbody");


function createDefault() {
    data.forEach(data => {
        row = tableBody.append("tr")
        row.append("td").text(data.datetime);
        row.append("td").text(data.city);
        row.append("td").text(data.state);
        row.append("td").text(data.country);
        row.append("td").text(data.shape);
        row.append("td").text(data.durationMinute);
        row.append("td").text(data.comments);

    });
}

createDefault();

var filterButton = d3.select("#filter-btn");
var filterInput = d3.select("#datetime");
var resetButton = d3.select("#reset-btn");

resetButton.on("click", () => {
    tableBody.remove();
    console.log("test test test")
    tableBody = d3.select("tbody")
    createDefault();
})

filterButton.on("click", () => {
    var dateOfSearch = filterInput.property("value");
    console.log(dateOfSearch);
    tableBody.remove();

    data.filter( d => d.datetime.trim() == dateOfSearch.trim())
        .forEach(data => {
            var row = tableBody.append("tr");
            row.append("td").text(data.datetime);
            row.append("td").text(data.city);
            row.append("td").text(data.state);
            row.append("td").text(data.country);
            row.append("td").text(data.shape);
            row.append("td").text(data.durationMinute);
            row.append("td").text(data.comments);
            console.log(data.city)
        })
})