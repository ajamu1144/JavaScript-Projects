// let ul = document.getElementById('ul');
// // let myArray = ['david', 'joseph', 'leo', 'kahmi', 'praise', 'jackie'];
// let inp = document.querySelector('input')

// function display() {
	
// 	if (inp.value == '') {
// 		btn.removeEventListener('click', display)
// 	}
// 	else{
// 		let newArr = []
// 	  	newArr.push(inp.value)
// 			for(let i = 0; i < newArr.length; i++){
// 				ul.innerHTML += `<li>${newArr[i]}</li>`
// 			}
// }
// inp.value = ''


// console.log(`
// 		================<<<<<<<<<<<<<<<>>>>>>>>>>>>======================
// 		>>>>>>>>>>>>>>>>>==========================<<<<<<<<<<<<<<<<<<<<<<<
// 	`)



let btn = document.querySelector('button');
let ul = document.getElementById('ul');

let chars = "1234567890ABCDEF";

function display() {    
    let color = '#'; 

    for (let i = 0; i < 6; i++) {
        let rand = Math.floor(Math.random() * 16);
        color += chars[rand]; 
    }

    ul.innerHTML += `<li style = 'background:#${color}'>${color}</li>`;
}

btn.addEventListener('click', display);     


let body = document.querySelector('body') 


