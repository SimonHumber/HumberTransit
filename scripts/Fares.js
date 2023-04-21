// Wait for the HTML page to load
document.addEventListener("DOMContentLoaded", function(event) {
  
    // Get all the rows with class "fare-type"
    var fareTypeRows = document.querySelectorAll(".fare-type");
  
    // Add a click event listener to each row
    fareTypeRows.forEach(function(row) {
      row.addEventListener("click", function() {
        // Remove the "selected" class from all rows
        fareTypeRows.forEach(function(row) {
          row.classList.remove("selected");
        });
        
        // Add the "selected" class to the clicked row
        row.classList.add("selected");
        
        // Get the fare type of the clicked row
        var fareType = row.dataset.fareType;
        
        // Get the description element
        var descriptionElement = document.querySelector(".description");
        
        // Get the options element
        var optionsElement = document.querySelector(".options");
        
        // Update the description based on the fare type
        if (fareType === "local") {
          descriptionElement.innerHTML = "<h2>Local Fares</h2><p>Local fares are for trips within the city limits.</p>";
          optionsElement.innerHTML = "<div class=\"option\"><label><input type=\"radio\" name=\"local-option\" value=\"single\"> Single Ride </label><p>$2.50 per ride</p></div><div class=\"option\"><label><input type=\"radio\" name=\"local-option\" value=\"day-pass\"> Day Pass </label><p>$5.00 per day</p></div>";
        } else if (fareType === "express") {
          descriptionElement.innerHTML = "<h2>Express Fares</h2><p>Express fares are for trips that go outside of the city limits.</p>";
          optionsElement.innerHTML = "<div class=\"option\"><label><input type=\"radio\" name=\"express-option\" value=\"single\"> Single Ride </label><p>$3.50 per ride</p></div><div class=\"option\"><label><input type=\"radio\" name=\"express-option\" value=\"day-pass\"> Day Pass </label><p>$7.00 per day</p></div>";
        } else if (fareType === "senior-disabled") {
          descriptionElement.innerHTML = "<h2>Senior/Disabled Fares</h2><p>Senior/Disabled fares are for eligible riders.</p>";
          optionsElement.innerHTML = "<div class=\"option\"><label><input type=\"radio\" name=\"senior-disabled-option\" value=\"single\"> Single Ride </label><p>$1.25 per ride</p></div><div class=\"option\"><label><input type=\"radio\" name=\"senior-disabled-option\" value=\"day-pass\"> Day Pass </label><p>$2.50 per day</p></div>";
        } else if (fareType === "children") {
          descriptionElement.innerHTML = "<h2>Children Fares</h2><p>Children fares are for riders aged 5-12.</p>";
          optionsElement.innerHTML = "<div class=\"option\"><label><input type=\"radio\" name=\"children-option\" value=\"single\"> Single Ride </label><p>$1.00 per ride</p></div><div class=\"option\"><label><input type=\"radio\" name=\"children-option\" value=\"day-pass\"> Day Pass </label><p>$2.00 per day</p></div>";
        }
      });
    });
  });