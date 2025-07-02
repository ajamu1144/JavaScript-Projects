let myself = {
	name:"Ajamu Emmanuel",
	age:"13",
	school:"ISI",
	height:"12.4 feet",
	weight:"20 pounds"
}

let write = document.getElementById('text');
	
document.getElementById('btn').onclick = function btnclick() {
	write.textContent = `hello my name i ${myself.name} and i am ${myself.age} years old. I go to the school named ${myself.school} i stand at about ${myself.height} and i weight about ${myself.weight}`
}