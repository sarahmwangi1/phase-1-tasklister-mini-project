document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent page from refreshing on submit

// Step 3: Get the task description from the form
 const task = document.getElementById("new-task-description").value;

// Call function
  buildToDo(task);
});

// Step 4: Build and display the task
function buildToDo(task) {
  const taskList = document.getElementById("tasks");
  const li = document.createElement("li");

  li.textContent = task;

  // Append the li to the task list
  taskList.appendChild(li);
}
});
