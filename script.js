let menuModal = document.getElementById("menu-modal");
let menuModalCont = document.getElementsByClassName("modal-cont")[0]
let menuBtn = document.getElementById("menu-btn");

menuBtn.onclick = function() {
    menuModal.style.display = "block";
}

let taskModal = document.getElementById("task-modal");
let taskBtn = document.getElementById("add-btn");

taskBtn.onclick = function() {
    taskModal.style.display = "block";
}

document.onclick = function(event) {
    if (event.target == menuModal) {
        menuModal.style.display = "none";
    }
    if (event.target == taskModal) {
        taskModal.style.display = "none";
    }
} 