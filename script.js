let menuModal = document.getElementById("menu-modal");
let menuModalCont = document.getElementsByClassName("modal-cont")[0]
let menuBtn = document.getElementById("menu-btn");

menuBtn.onclick = function() {
    menuModal.style.display = "block";
}

fetch('tasks.json')
    .then(response => response.json())
    .then(data => {
        const tasksContainer = document.getElementById('tasks-container');
        
        data.tasks.forEach(task => {
            const taskContainer = document.createElement('div');
            taskContainer.classList.add('task-container');

            const taskText = document.createElement('div');
            taskText.classList.add('task-text');
            taskText.textContent = task.name;

            const taskTime = document.createElement('div');
            taskTime.classList.add('task-time');
            taskTime.textContent = task.time;

            const XP = document.createElement('div');
            XP.classList.add('XP');
            if (task.XP) {
                XP.textContent = task.XP;
            }

            const progBar = document.createElement('div');
            progBar.classList.add('prog-bar');
            
            const img = document.createElement('img');
            img.src = './images/bar.png';
            img.alt = 'prog-bar';

            progBar.appendChild(img);

            taskContainer.appendChild(taskText);
            taskContainer.appendChild(taskTime);
            
            if (task.XP) {
                taskContainer.appendChild(XP);
            }

            taskContainer.appendChild(progBar);

            tasksContainer.appendChild(taskContainer);
        });
    })
    .catch(error => console.error('Error fetching tasks:', error)); 

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
