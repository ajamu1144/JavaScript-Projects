let input = document.getElementById('hii');
let randomNum = Math.floor(Math.random()* 20) + 50;
let result = document.getElementById('h3');
let myButton = document.getElementById('btn');
let chance = 0;
let value = document.getElementById('body')
let score = document.getElementById('score')
let highest = document.getElementById('highest')
let scr = 0
let body = document.getElementById("bdy")
smth = 25
function checks() {
    chance++;
    let inputValue = parseInt(input.value);

    if(smth <= 0){
        body.style.backgroundColor = 'red'
    }
    if (inputValue === randomNum) {
        result.textContent = `Wow, you won! The number was ${randomNum}`;
        result.style.color = 'lime'
        score.textContent = `Score: ${scr}`
        randomNum = Math.floor(Math.random()* 20) + 50;
        highest.innerHTML = `HIGHEST SCORE : ${scr}`
        scr += 5
    }
    else if (inputValue < 50 || inputValue > 70) {
    	result.textContent = 'sorry values cant be greater then 70 and less than 50';
    }

    else if(isNaN(inputValue)){
    	result.textContent = 'pls values must be inputted as a number';
    }
    else if(inputValue > randomNum){
        result.textContent = `The number is less than ${inputValue}`
        result.style.color= "blue"
        chance++;
        smth-=5
        smth <= 0 ? result.textContent = 'GAME OVER' : smth
    }
    else if(inputValue < randomNum){
        result.textContent =`The number is more than ${inputValue}`
        result.style.color = 'yellow'
        chance++;
        smth <= 0 ? result.textContent = 'GAME OVER' : smth
    }
    else {
        result.textContent = `You are wrong `;
        result.style.color = 'red'
        chance++;
    }

    // score.textContent = `Score: ${scr}`
    // randomNum = Math.floor(Math.random()* 20) + 50;
    // highest.innerHTML = `HIGHEST SCORE : ${scr}`
}


if (chance === 5) {
        result.textContent = 'oops you are out of chances'
        myButton.removeEventListener('click', checks)
        myButton.textContent = 'Reset'
        input.value = ''

}
myButton.addEventListener('click', checks)


console.log(randomNum);

let taskInput = document.getElementById('taskInput');
let addTaskButton = document.getElementById('addTaskButton');
let taskList = document.getElementById('taskList');

function addTask(){
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        window.alert('Task input cannot be empty!');
    } else {
        let listItem = document.createElement('li');
        listItem.innerHTML = taskText;

        listItem.addEventListener('click', function() {
            taskList.removeChild(listItem);
        });

        taskList.appendChild(listItem);
        taskInput.value = '';
    }
}

addTaskButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

// function addTask() {
//     console.log('Button clicked'); // Debug line
//     let taskText = taskInput.value.trim();
// }

// console.log(taskInput, addTaskButton, taskList);

