// let h3 = document.getElementById('h3');
// let button = document.getElementById('btn');
// let input= document.getElementById('inp');

// let newCountries = ['gUanda', 'U.S', 'Mexico', 'zealand', 'scotland']

// function add() {
// 	newCountries.push(input.value)
// 	console.log('newCountries')
// }

// button.addEventListener('click', function() {

// });

let getContainer = document.getElementById('div')
getContainer.appendChild(ul);

function addlistitem(){
	let li = document.createElement('li')
	let getname = document.getElementById('getName')
let ul = document.createElement('ul');

	li.innerText = name.value;

	ul.appendChild(li)
}
let li = document.createElement('li');

ul.appendChild(li)

getName.value = ""
getname.focus()