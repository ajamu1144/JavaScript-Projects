let plus_i = document.getElementById("plus");
let minus_i = document.getElementById("minus");
let divide_i = document.getElementById("divide");
let multiply_i = document.getElementById("multi");
let num1 = document.getElementById("first");
let num2 = document.getElementById("second");
let span = document.getElementById("myspan")
let amount = document.getElementById('Amount');
let time = document.getElementById('time');
let loan_button = document.getElementById('loan');
// let invest = document.getElementById("invest");
// let investion_date = document.getElementById('investion_date');

function pluss (){
    let first = parseInt(num1.value);
    let second = parseInt(num2.value);
    let result = first +  second;
    span.textContent = "+"; 

    if (isNaN(first) || isNaN(second)) {
        document.getElementById("result").textContent = "That is not a number";
    }
    else{
        document.getElementById("result").textContent = result;
    }
} 

function minuss (){
    let firstm = parseInt(num1.value);
    let secondm = parseInt(num2.value);
    let result = firstm - secondm;
    span.textContent = "-";
    if (isNaN(firstm) || isNaN(secondm)) {
        document.getElementById("result").textContent = "That is not a number";
    }
    else{
        document.getElementById("result").textContent = result;
    }

}

function divides (){
    let firstd = parseInt(num1.value);
    let secondd = parseInt(num2.value);
    let result = firstd / secondd;
    document.getElementById("result").textContent = result;
    span.textContent = "/";
    if (isNaN(firstd) || isNaN(secondd)) {
        document.getElementById("result").textContent = "That is not a number";
    }
    else{
        document.getElementById("result").textContent = result;
    }
}
function multiplies (){
    let firstm = parseInt(num1.value);
    let secondm = parseInt(num2.value);
    let result = firstm * secondm;
    document.getElementById("result").textContent = result;
    span.textContent = "*";

    if (isNaN(firstm) || isNaN(secondm)) {
        document.getElementById("result").textContent = "That is not a number";
    }
    else{
        document.getElementById("result").textContent = result;
    } 
}

function loan() {
    let money = parseInt(amount.value);
    let date = parseInt(time.value);
    let final_amount = 15 / 100 * money + money;
    document.getElementById('answer').textContent = `you are to pay $${final_amount} in ${date} month\'s at ${final_amount / date} per month `;
}

function invest (){
    let amount_invested = parseInt(document.getElementById('Amount_Invested').value);
    let time = parseInt(document.getElementById('timei').value);
    let totali = 15/100 *amount_invested + amount_invested;
    document.getElementById("sooooo").textContent = `you will be paid a total of $${totali} within a total of ${time} month's`

}