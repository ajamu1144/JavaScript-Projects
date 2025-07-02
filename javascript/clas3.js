let myDiv= document.getElementById("head");
let getInput = document.querySelector("#hello")
let button = document.getElementById("button")

//
//
// console.log(getId)
// console.log(getClass)
// console.log(getTag)
// console.log(getInput.value)
// console.log(getInput.value)
// console.log(getInput.value)

let myfunction = () =>{
    if (getInput.value == ""){
        myDiv.textContent = "your input caznt be empty"
    }
    else{
        myDiv.textContent = getInput.value
    }
}

