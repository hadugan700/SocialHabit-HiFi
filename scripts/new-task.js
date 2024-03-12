let taskModal = document.getElementById("task-modal");
let taskBtn = document.getElementById("add-btn");

taskBtn.onclick = function() {
    taskModal.style.display = "block";
}

document.onclick = function(event) {
    if (event.target == taskModal) {
        taskModal.style.display = "none";
    }
    if (event.target == menuModal) {
        menuModal.style.display = "none";
    }
} 

let createBtn = document.getElementById("create-btn");
let form = document.querySelector('form');

createBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let formData = new FormData(form);
    let data = Object.fromEntries(formData);
    // let jsonData = JSON.stringify(data);
    // console.log(jsonData);

    // window.localStorage.setItem('task', jsonData);
    // console.log(window.localStorage.getItem('task'));

    let task = document.createElement("div");
    task.classList.add("task-container");
    task.innerHTML = `
        <div class="task-text">${data['task-name']}</div>
        <div class="task-time">${data['start-time']} - ${data['end-time']}</div>
        <div class="prog-bar">
            <img src="../images/bar-empty.png" alt="prog-bar">
        </div>`;

    let container = document.getElementById("tasks-container");
    container.innerHTML += task.outerHTML;

    taskModal.style.display = "none";
})
