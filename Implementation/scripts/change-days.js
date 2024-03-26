let daysContainer = document.getElementById("days-container");
let days = document.getElementsByClassName("day");

// Adds function to all elements in days HTMLCollection, and passes in the clicked day as a parameter to changeDay
for (let i = 0; i < days.length; i++) {
    days[i].addEventListener("click", function(event) {
        changeDay(event, days[i]);
    });
}

function changeDay(event, day) {
    // reset the background color of all days
    for (let i = 0; i < days.length; i++) {
        days[i].style.backgroundColor = "var(--item-background)";
    }
    // change backgroup of day to blue  
    day.style.backgroundColor = "var(--secondary-item-background)";

    // remove everything form tasks-container
    let container = document.getElementById("tasks-container");
    container.innerHTML = "";
}