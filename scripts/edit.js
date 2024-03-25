// Step 1: Add event listener to task element(s)
const taskElements = document.querySelectorAll('.task');

taskElements.forEach(task => {
    task.addEventListener('click', () => {
        // Step 2: Retrieve task information
        const taskId = task.dataset.taskId; // Assuming you have a data attribute called "data-task-id" on each task element
        const taskTitle = task.querySelector('.task-title').textContent; // Assuming you have a task title element with class "task-title"

        // Step 3: Populate edit-modal with task information
        const editModal = document.getElementById('edit-modal'); // Assuming you have an edit-modal element with ID "edit-modal"
        const editTitleInput = editModal.querySelector('#edit-title-input'); // Assuming you have an input field with ID "edit-title-input"

        editTitleInput.value = taskTitle; // Set the value of the input field to the task title
        // You can similarly update other elements in the edit-modal with the relevant task information

        // Show the edit-modal
        editModal.style.display = 'block';
    });
});