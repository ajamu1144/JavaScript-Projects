let inp = document.getElementById("inp");
let btn = document.getElementById("btn");
let ul = document.getElementById("ul");
btn.addEventListener("click", function(){
	let text = inp.value;
	let textNode = document.createTextNode(text);
	let li = document.createElement("li");
	li.appendChild(textNode);
	ul.insertBefore(li, ul.firstChild);
})