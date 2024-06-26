let taskModal = document.getElementById("task-modal");
let taskBtn = document.getElementById("add-btn");

taskBtn.onclick = function() {
    taskModal.style.display = "block";
}

let editModal = document.getElementById('edit-modal');

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

    let task = document.createElement("div");
    task.classList.add("task-container");
    task.innerHTML = `
        <div class="task-text">${data['task-name']}</div>
        <div class="task-time">${data['start-time']} - ${data['end-time']}</div>
        <div style="display: none" class="task-desc">${data['task-desc']}</div>
        <div class="prog-bar">
            <img src="./images/bar-empty.png" alt="prog-bar">
        </div>`;

    let container = document.getElementById("tasks-container");
    container.innerHTML += task.outerHTML;

    let addedTask = container.lastChild;
    addedTask.addEventListener('click', () => {
        let taskTitle = addedTask.querySelector('.task-text').textContent; 
        let taskTime = addedTask.querySelector('.task-time').textContent;

        let taskDesc = addedTask.querySelector('.task-desc').textContent;

        let editModal = document.getElementById('edit-modal');
        editModal.style.display = 'block';

        let editTitleInput = editModal.querySelector('#edit-name');
        editTitleInput.value = taskTitle;

        let editStartTime = editModal.querySelector('#edit-start-time');
        editStartTime.value = taskTime.split(' - ')[0];

        let editEndTime = editModal.querySelector('#edit-end-time');
        editEndTime.value = taskTime.split(' - ')[1];

        let editDescInput = editModal.querySelector('#edit-desc');
        editDescInput.value = taskDesc;
    });

    taskModal.style.display = "none";
})

let completeBtn = document.getElementById('complete-btn');

completeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let task = document.querySelector('.task-container');

    task.style.border = '2px solid var(--love)';
    task.style.backgroundColor = 'var(--secondary-item-background)';

    let progBar = task.querySelector('.prog-bar');
    progBar.innerHTML = '<img src="./images/bar-complete.png" alt="prog-bar">';

    editModal.style.display = 'none';
})

let deleteBtn = document.getElementById('delete-btn');

deleteBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let task = document.querySelectorAll('.task-container')[2];
    task.remove()

    editModal.style.display = 'none';
});

let editBtn = document.getElementById('update-btn');

editBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let task = document.querySelectorAll('.task-container')[1];

    let editTitleInput = editModal.querySelector('#edit-name');
    let editStartTime = editModal.querySelector('#edit-start-time');
    let editEndTime = editModal.querySelector('#edit-end-time');
    let editDescInput = editModal.querySelector('#edit-desc');

    task.querySelector('.task-text').textContent = editTitleInput.value;
    task.querySelector('.task-time').textContent = `${editStartTime.value} - ${editEndTime.value}`;
    task.querySelector('.task-desc').textContent = editDescInput.value;

    editModal.style.display = 'none';
})
