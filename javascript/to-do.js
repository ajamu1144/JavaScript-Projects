let taskInput = document.getElementById('taskInput');
let addTaskButton = document.getElementById('addTaskButton');
let taskList = document.getElementById('taskList');
let error = document.getElementById('error');

function addTask() {
    let taskText = taskInput.value;

    if (taskText === "") {
        error.textContent = 'Please enter a task';
        error.style.color = 'red'
    }
    else{
        error.textContent = '';
        let li = document.createElement('li');
        let tickContent = document.createTextNode('\u2714');
        let tickElement = document.createElement('span');
        tickElement.appendChild(tickContent);
        tickElement.style.background = 'green';
        tickElement.style.color = 'white';
        tickElement.classList.add('ticked');
        console.log(tickElement.textContent);
        let currentTask = document.createTextNode(`${taskText}`);
        li.appendChild(currentTask);
        li.appendChild(tickElement);
        taskList.appendChild(li);
        let ticked = document.querySelectorAll('.ticked');
        ticked.forEach(tick=>{
            tick.addEventListener('click', ()=>{
                tick.style.textDecoration = 'none !important';
                tick.parentElement.style.textDecoration = 'line-through';
                taskInput.focus()
            })
        })
        li.addEventListener('click', function () {
            li.style.display = 'none';
        });
        // (\u2714)

        taskInput.value = '';
    }
}

addTaskButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        addTask();
    }
})
// function addTask() {
//     console.log('Button clicked'); // Debug line
//     let taskText = taskInput.value.trim();
// }

// console.log(taskInput, addTaskButton, taskList);


