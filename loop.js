// let myArray = ['david', 'joseph', 'emmanuel', 'david', 'joshua']
// console.log(myArray[0])
// console.log(myArray[1])
// console.log(myArray[2])
// console.log(myArray[3])
// console.log(myArray[4])

// let sum = 0;

// for (let i = 0; i <= 20; i++) {
// 		// console.log(`${i} x ${i} = ${i * i}`)
// 		sum += i;

// 		let show = `${sum} + ${i} = ${sum + i}`
// 		console.log(i,show)
// };

// for (const array of myArray) {
// 	console.log(array)
// }

// let newArray = [];
// for (let s = 0; s < myArray.leng; s++) {
// 		newArray.push(myArray[s])
// 				console.log(newArray)
// };

// console.log("================")

// myArray.forEach( (array2)=> {
// 		console.log(array2)
// })
// console.error(`traceback in index')

// 	`)
// for (let k = 20;k > 0; k--) {
// 		if (k % 2 == 1) {
// 			console.log(k, 'this is an odd number')
// 		};
// 		  if(k % 2 == 0) {
// 			console.log(k,'that is an even number')
// 			};
// };

// let p = 0
// while (p <=10) {
// 	console.log(p, "this is an even number");
// 	p++
// }



// console.log('=========================')

// let k = 0
// do{
// 	console.log(k, "this is an even number")
// 	k++
// }

// while(k <= 10)
// ul = document.getElementById('ul')
// let numbers = [10,20,30,40,50,60,70,80]
// let sum = 0;
//
// for (let p =0; p<numbers.length; p++) {
//
// 	sum += numbers[p]
//
// 	ul.innerHTML = `<li>${sum}</li>`
//
// };

//

// for (n = 43; n <= 57; n++) {
// 	let p = true;
// 	for (i = 2; i < n; i++) {
// 		if (n % i === 0){
// 			p = false;
// 		}
// 	}
// 	if (p == true){
// 		console.log(n);
// 	}
// }


let input = document.getElementById('input');
let btn = document.getElementById('button');
let paragraph = document.getElementById('p');
let h1 = document.getElementById('h1')

function isPrime(number) {
    for(i=0; i < number; i++){
        if(i * 2 !== number){
            return false
        }
        else{
            return true
        }
    }
    let newNum = Math.trunc(num)
    return num.toString().includes(".");
}

function check(numh, element){
    if(isPrime(numh)){
        element.style.color = 'red'
        return `${numh} is Not a Prime Number`;
    }
    else{
        element.style.color = 'lime'
        return `${numh} is a Prime Number`
    }
}

function isPrime2(){
}

input.addEventListener('input', ()=>{
    if(input.value > 50){
        paragraph.style.color = "#ff0c37"
        paragraph.textContent = 'You can\'t Input a Number which is greater that 30'
    }

    else if(isNaN(input.value) || input.value === ''){
        paragraph.style.color = "#ff0c37"
        paragraph.textContent = 'Invalid Input(Enter A Correct Input)'
    }
    else if(input.value <= 0){
        paragraph.style.color = "#ff0c37"
        paragraph.textContent = 'Your Input cant be less than 1'
    }
    else{
        if (input.value === '1'){
           paragraph.textContent = `${input.value} is not a prime Number`
        }
        else{
            paragraph.textContent = check(input.value, paragraph)
        }
    }

});

let primes = []
//
// for(i = 50; i <= 100; i++){
//     let p = true
//     if (!isPrime(i)){
//     h1.innerText = primes[i]
//
//     }
//     else{
//         console.log('hi')
//     }
// }
//
