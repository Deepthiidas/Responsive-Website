// Selecting elements
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

// Function to add a task
function addTask() {
    let taskText = taskInput.value; // Get input value

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li"); // Create new list item
    li.innerHTML = `${taskText} <button class="delete" onclick="deleteTask(this)">Delete</button>`;
    
    taskList.appendChild(li); // Add task to the list
    taskInput.value = ""; // Clear input field
}

// Function to delete a task
function deleteTask(button) {
    button.parentElement.remove(); // Remove the clicked task
}
