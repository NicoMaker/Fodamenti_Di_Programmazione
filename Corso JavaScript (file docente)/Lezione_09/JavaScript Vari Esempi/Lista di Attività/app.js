// Recupera attività dal localStorage
document.addEventListener('DOMContentLoaded', loadTasks);

const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Gestisce l'aggiunta di nuove attività
taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const taskText = taskInput.value.trim();
	
    if (taskText) {
        addTask(taskText);
        saveTask(taskText);
        taskInput.value = ''; // Pulisce l'input
	}
});

// Aggiunge un'attività alla lista
function addTask(taskText, completed = false) {
    const li = document.createElement('li');
    if (completed) li.classList.add('completed');
	
    li.innerHTML = `
	<span>${taskText}</span>
	<button class="complete-btn">✓</button>
	<button class="delete-btn">✗</button>
    `;
	
    // Completa l'attività
    li.querySelector('.complete-btn').addEventListener('click', () => {
        li.classList.toggle('completed');
        updateTaskStatus(taskText, li.classList.contains('completed'));
	});
	
    // Elimina l'attività
    li.querySelector('.delete-btn').addEventListener('click', () => {
        li.remove();
        removeTask(taskText);
	});
	
    taskList.appendChild(li);
}

// Salva un'attività nel localStorage
function saveTask(taskText) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push({ text: taskText, completed: false });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Rimuove un'attività dal localStorage
function removeTask(taskText) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const filteredTasks = tasks.filter(task => task.text !== taskText);
    localStorage.setItem('tasks', JSON.stringify(filteredTasks));
}

// Aggiorna lo stato (completato/non completato) di un'attività
function updateTaskStatus(taskText, completed) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const task = tasks.find(task => task.text === taskText);
    if (task) task.completed = completed;
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Carica le attività salvate al caricamento della pagina
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTask(task.text, task.completed));
}
