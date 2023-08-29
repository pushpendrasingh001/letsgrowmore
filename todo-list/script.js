document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task-input");
    const addButton = document.getElementById("add-button");
    const todoList = document.getElementById("todo-list");
  
    addButton.addEventListener("click", function () {
      const task = taskInput.value.trim();
      if (task !== "") {
        const listItem = document.createElement("li");
        listItem.className = "todo-item";
        const taskText = document.createElement("span");
        taskText.className = "task-text";
        taskText.textContent = task;
        const completeButton = document.createElement("button");
        completeButton.className = "complete-button";
        completeButton.textContent = "Complete";
        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.textContent = "Delete";
  
        completeButton.addEventListener("click", function () {
          listItem.classList.toggle("completed");
        });
  
        deleteButton.addEventListener("click", function () {
          listItem.remove();
        });
  
        listItem.appendChild(taskText);
        listItem.appendChild(completeButton);
        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);
        taskInput.value = "";
      }
    });
  });