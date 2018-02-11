// access the elements in HTML, store as variables
var $tbody = document.querySelector("tbody");
var $DateInput = document.querySelector("#date");
var $StateInput = document.querySelector("#state");
var $CityInput = document.querySelector("#city");
var $CountryInput = document.querySelector("#country");
var $ShapeInput = document.querySelector("#shape");
var $searchBtn = document.querySelector("#search");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filteredAddresses to addressData initially
var user_selected_date = dataSet;

// build the table using a for loop to populate columns and rows
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < user_selected_date.length; i++) {
    var sighting = user_selected_date[i];
    var fields = Object.keys(sighting);
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = sighting[field];
    }
  }
}

function handleSearchButtonClick() {
  // store user's inputs in variables
  var dtime = $DateInput.value.trim();
  var state = $StateInput.value.trim();
  var city = $CityInput.value.trim();
  var country = $CountryInput.value.trim();
  var shape = $ShapeInput.value.trim();

  // set up function to filter the data's results and isolate the relevant columns by storing in variables
  user_selected_date=dataSet.filter(function(sighting) {
    var sightingsdate = sighting.datetime;
    var stateinfo = sighting.state;
    var cityinfo = sighting.city;
    var countryinfo = sighting.country;
    var shapeinfo = sighting.shape;

    // return results where user input in the search fields = data results
    return (sightingsdate === dtime) && (city === cityinfo) || (state === stateinfo) || (country === countryinfo) && (shape === shapeinfo) 
  });
  renderTable();
}

// Render the table for the first time on page load
renderTable();

