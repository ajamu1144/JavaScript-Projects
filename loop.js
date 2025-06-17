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
ul = document.getElementById('ul')
let numbers = [10,20,30,40,50,60,70,80]
let sum = 0;

for (let p =0; p<numbers.length; p++) {

	sum += numbers[p]

	ul.innerHTML = `<li>${sum}</li>`

}; 

