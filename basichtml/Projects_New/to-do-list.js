const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.className = "task-item d-flex justify-content-between align-items-center";

  const span = document.createElement("span");
  span.className = "task-text w-75";
  span.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-outline-danger btn-sm d-flex align-items-center gap-1";
  deleteBtn.innerHTML = '<i class="bi bi-trash"></i> Delete';

  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
  taskInput.focus();
}