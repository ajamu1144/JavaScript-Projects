// // let daysOfWeek = ["Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// // let today = daysOfWeek[2];
// // let word = "today is";

// // console.log(`${word} ${today}`);

// // let mySelf = {
// // 	name:"Emmanuel",
// // 	age: 13,
// // 	course: "law",
// // 	school: "ISI",
// // }

// // let about_me = 	`Hello, my name is ${mySelf.name}, and i am ${mySelf.age} and i study ${mySelf.course} and i study at ${mySelf.school}`

// // console.log(about_me)

// // let people = [
// // 	{
// // 		name : "David Joseph",
// // 		age : 30,
// // 		course : "medicine",
// // 		job : "streamer",
// // 	} ,
// // 	{
// // 		name : "Joel Anu",
// // 		age :  32,
// // 		course : "vetinary medicine",
// // 		job : "bouncer"
// // 	} ,
// // 	{
// // 		name : "hallo david",
// // 		age : 67,
// // 		course : "cairopractor",
// // 		job: "medical surgeon"
// // 	}
// // ]

// // let person1 = `Hello, my name is ${people[1].name}, and i am ${people[1].age} years old and i study ${people[1].course} and i am a ${people[1].job}`;
// // let person2 = `Hello, my name is ${people[2].name}, and i am ${people[2].age} years old and i study ${people[2].course} and i am a ${people[2].job}`;
// // let person3 = `Hello, my name is ${people[2].name}, and i am ${people[2].age} years old and i study ${people[2].course} and i am a ${people[2].job}`;

// // console.log(person1)
// // console.log(person2)
// // console.log(person3)


// let num1 = 200
// let num2 = 300
// let sumNumber = num1 + num2
// let minusNumber = num2 - num1
// let multipliedNumber = num2 * num1
// let dividedNumber = num2 / num1
// let remainder = num2 % num1
// let exponent = num2 ** 2

// console.log(`${sumNumber}  is an addition`)
// console.log(`${minusNumber} is a  is a subtraction`)
// console.log(`${multipliedNumber} This is an  multiplication`)
// console.log(`${dividedNumber} is a  divided Number`)
// console.log(`${remainder} is a remainder `)
// console.log(`${exponent} is an exponent `)

// let num3 = 500
// let num4 = 100
// num3 += 50

// console.log(10%4)
// console.log(num1 > num2)
// console.log(num1 < num2)
// console.log(num1 <= num2)
// console.log(num1 >= num2)
// console.log(num1 == num2)
// console.log(num1 === num2)
// console.log(num1 != num2)
// console.log(num1 !== num2)

// let check2 = false
// let check1 = true
// console.log(check1 == false && check2 == true)
// console.log(check1 == false || check2 == true)
// console.log(check1 == false ! check2 == true)

// console.log(30 + "30")

let num1 = parseInt("100");
let num2 = 100;

console.log(num1 + num2)

let num3 = "200"
let num4 = 300

let num5 = +num3

console.log(num4 + num5)

let num6 = Number("400")
let num7 = 500

console.log(num6 + num7)


let first_num =  parseInt(prompt("enter the first number"))
let operator =  prompt("enter a operator")
let sec_num = parseInt(prompt("enter the second number"))

if (isNaN(first_num) || isNaN(sec_num)){
     console.log("one of your input is invalid")
}

    else if(operator == "+") {
        console.log(first_num + sec_num)
}

    else if(operator == "-") {
        console.log(first_num - sec_num)
}

    else if(operator == "/") {
        console.log(first_num / sec_num)
}

    else if(operator == "*") {
        console.log(first_num * sec_num)
}

else{
    console.log("your input is invalid")
}
// let addition = first_num + sec_num

// prompt(addition)

// let age = parseInt(prompt("enter ypur age"))

// 	if (age == 30 || age >= 30){
//       prompt("you are a boomer")
//     }
// 	else if(age > 14){
//     	prompt('you are kinda young')
//     }
//     else if (age >= 12){
//     	prompt("nice try khalid")
//     }
 
let day = prompt("what is today")

switch (day) {
    case "monday":
        console.log("its monday wake up")
        break
    case "tuesday":
        console.log("its tuesday wake up")
        break
    case "wednesday":
        console.log("its wednesday wake up")
        break
    case "thursday":
        console.log("its thursday wake up")
        break
    case "friday":
        console.log("its friday wake up")
        break
    case "saturday":
        console.log("its saturday, sleep in")
        break
    case "sunday":
        console.log("its sunday, go to church")
        break
    default:
        console.log(`${day} is not a day`)
}