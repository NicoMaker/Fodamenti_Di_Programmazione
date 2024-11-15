// script.js

// Mostra la data corrente nell'elemento con id "current-date"
function displayCurrentDate() {
    const currentDate = new Date();
    document.getElementById("current-date").textContent = currentDate.toLocaleDateString();
}

// Aggiornamento della data
displayCurrentDate();

// Seleziona elementi dal DOM per manipolarli
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");
const remainingTasks = document.getElementById("remaining-tasks");

// Inizializza il conteggio delle attività
let taskCount = 0;

// Aggiunge una nuova attività alla lista
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return; // Controllo di validità: la stringa non deve essere vuota
	
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");
    taskItem.textContent = taskText;
	
    // Aggiungi evento click per contrassegnare come completato
    taskItem.addEventListener("click", () => toggleTaskComplete(taskItem));
	
    // Crea pulsante di rimozione e gestisci l'evento
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Rimuovi";
    removeBtn.addEventListener("click", () => removeTask(taskItem));
	
    // Aggiungi pulsante alla voce di attività
    taskItem.appendChild(removeBtn);
	
    // Aggiungi l'elemento alla lista
    taskList.appendChild(taskItem);
	
    // Aggiorna il conteggio e resetta il campo input
    taskInput.value = "";
    taskCount++;
    updateRemainingTasks();
}

// Rimuove un'attività dalla lista
function removeTask(taskItem) {
    taskList.removeChild(taskItem);
    taskCount--;
    updateRemainingTasks();
}

// Contrassegna un'attività come completata o non completata
function toggleTaskComplete(taskItem) {
    taskItem.classList.toggle("completed");
}

// Aggiorna il contatore delle attività rimanenti
function updateRemainingTasks() {
    const incompleteTasks = document.querySelectorAll(".task-item:not(.completed)").length;
    remainingTasks.textContent = incompleteTasks;
}

// Aggiunge l'attività al click sul pulsante
addTaskBtn.addEventListener("click", addTask);

// Permette di aggiungere l'attività premendo Invio
taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTask();
	}
});
