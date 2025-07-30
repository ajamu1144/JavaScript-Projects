let input = document.getElementById('input');
let btn = document.getElementById('button');
let paragraph = document.getElementById('p');
let h1 = document.getElementById('h1')

function isFloat(num){
    if(!num.toString().includes('.')){
        console.log(num)
    }
    else{
        return false
    }
}

function isPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i  === 0){
            return false;
        }
    }
    return true;
}

function check(numh, element){
    if(!isPrime(numh)){
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
    if(Number(input.value) > 50){
        paragraph.style.color = "#ff0c37"
        paragraph.textContent = 'You can\'t Input a Number which is greater that 50'
    }

    else if(isNaN(  input.value) || input.value === ''){
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

for (let i = 50; i < 100; i++) {
    if (isPrime(i)) {
        h1.textContent += i + ','
    }
}
