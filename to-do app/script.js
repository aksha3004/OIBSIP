const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') return; 
    const li = document.createElement('li');

    li.innerHTML = `
        <span class="tick">✔</span>
        <span class="task">${taskText}</span>
        <button class="deleteBtn">Delete</button>
    `;

    taskList.appendChild(li);

    taskInput.value = '';

    li.querySelector('.task').addEventListener('click', toggleComplete);
    li.querySelector('.deleteBtn').addEventListener('click', deleteTask);
}

function toggleComplete() {
    const taskItem = this.parentElement;
    taskItem.classList.toggle('complete');
}

function deleteTask() {
    this.parentElement.remove();
}
