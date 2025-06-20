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
let reset = document.getElementById('reset')

let smth = 4
function main(){
    let inputValue = parseInt(input.value);

    if(smth === 0) {
        // input.value = ''
        result.style.color = 'red'
        result.textContent = `Sorry You Lost, The Number was ${randomNum} 😢😢😢😭😭😭💀💀💀💀💀`
        body.style.backgroundColor = 'red'
        reset.style.display = 'block'
        myButton.style.display = 'none'
    }
// function styles() {
//     if (reset.style.display === 'block' && myButton.style.display === ' none') {
//         reset.style.display = 'none'
//         myButton.style.display = 'block'
//     }
// }

    else if (inputValue === randomNum) {
        input.value = ''
        scr += 5
        result.innerHTML = `Wow, you won! The number was ${randomNum} <br> the Number is Now Changed`;
        result.style.color = 'lime'
        score.textContent = `Score: ${scr}`
        randomNum = Math.floor(Math.random()* 20) + 50;
        highest.innerHTML = `HIGHEST SCORE : ${scr}`
        smth = 4
        console.log(randomNum)
    }
    else if (inputValue < 50 || inputValue > 70) {
        input.value = ''
    	result.textContent = 'sorry values cant be greater then 70 and less than 50';
    }

    else if(isNaN(inputValue)){
        input.value = ''
    	result.textContent = 'pls values must be inputted as a number';
    }
    else if(inputValue > randomNum){
        input.value = ''
        smth-=1
        result.textContent = `The number is less than ${inputValue}, Now you have ${smth + 1} more ${smth === 0 ? "chance" : "chances"}`;
        result.style.color= "blue"
        console.log(smth)
    }
    else if(inputValue < randomNum){
        input.value = ''
        smth-=1;
        result.textContent =`The number is more than ${inputValue}, Now you have ${smth + 1} more ${smth === 0 ? "chance" : "chances"}`
        result.style.color = 'yellow'
        // smth <= 0 ? result.textContent = `GAME OVER THE NUMBER WAS ${randomNum}` : smth;
        console.log(smth)
    }
    else {
        input.value = ''
        result.textContent = `You are wrong `;
        result.style.color = 'red'
        console.log(smth)
    }

    // score.textContent = `Score: ${scr}`
    // randomNum = Math.floor(Math.random()* 20) + 50;
    // highest.innerHTML = `HIGHEST SCORE : ${scr}`
}

myButton.addEventListener('click', main)

reset.addEventListener("click", ()=>{
    window.location.reload()
});


// if (smth <= 0) {
//         result.textContent = 'oops you are out of chances'
//         myButton.removeEventListener('click', checks)
//         myButton.textContent = 'Reset'
//         input.value = ''
//
// }


console.log(randomNum);

// let taskInput = document.getElementById('taskInput');
// let addTaskButton = document.getElementById('addTaskButton');
// let taskList = document.getElementById('taskList');
//
// function addTask(){
//     const taskText = taskInput.value.trim();
//
//     if (taskText === '') {
//         window.alert('Task input cannot be empty!');
//     } else {
//         let listItem = document.createElement('li');
//         listItem.innerHTML = taskText;
//
//         listItem.addEventListener('click', function() {
//             taskList.removeChild(listItem);
//         });
//
//         taskList.appendChild(listItem);
//         taskInput.value = '';
//     }
// }
//
// addTaskButton.addEventListener('click', addTask);
//
// taskInput.addEventListener('keypress', function(event) {
//     if (event.key === 'Enter') {
//         addTask();
//     }
// });

// function addTask() {
//     console.log('Button clicked'); // Debug line
//     let taskText = taskInput.value.trim();
// }

// console.log(taskInput, addTaskButton, taskList);

