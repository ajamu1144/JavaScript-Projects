let taskInput = document.getElementById('taskInput');
let addTaskButton = document.getElementById('addTaskButton');
let taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', addTask);

function addTask() {
    let taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    let li = document.createElement('li');
    li.textContent = taskText;

    li.addEventListener('click', function () {
        li.style.display = 'none';
    });

    taskList.appendChild(li);

    taskInput.value = '';
}

// function addTask() {
//     console.log('Button clicked'); // Debug line
//     let taskText = taskInput.value.trim();
// }

// console.log(taskInput, addTaskButton, taskList);


