function DisplayCurrentdata() {
  const currentdate = new Date();
  document.getElementById("current-date").textContent =
    currentdate.toLocaleDateString();
}

DisplayCurrentdata();

const taskinput = document.getElementById("task-input"),
  addtaskbtn = document.getElementById("add-task-btn"),
  tasklist = document.getElementById("task-list"),
  remainingtask = document.getElementById("remaining-task");

let taskcount = 0;

function AddTask() {
  const tasktext = taskinput.value.trim();
  if (tasktext === "") return;

  const taskitem = document.createElement("li");
  taskitem.classList.add("task-item");
  taskitem.textContent = tasktext;

  taskitem.addEventListener("click", () => RemoveTask(taskitem));

  const removebtn = document.createElement("button");
  removebtn.textContent = "rimuovi";
  taskitem.appendChild(removebtn);

  tasklist.appendChild(taskitem);

  taskinput.value = "";
  taskcount++;
  UpdateRemainingTasks();
}

function RemoveTask(taskitem) {
  tasklist.removeChild(taskitem);
  taskcount--;
  UpdateRemainingTasks();
}

const ToggleTaskComplete = (taskitem) => taskitem.classList.toggle("completed");

function UpdateRemainingTasks() {
  const incompleteTasks = document.querySelectorAll(
    ".task-item:not(.completed)"
  ).length;
  remainingtask.textContent = incompleteTasks;
}

addtaskbtn.addEventListener("click", AddTask);

taskinput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    AddTask();
  }
});
