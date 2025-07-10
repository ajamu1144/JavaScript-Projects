const formInput = document.getElementById("formInp");
const formError1 = document.getElementById("currDestinationError");
const formInput2 = document.getElementById("formInp2");
const formError2 = document.getElementById("currDestinationError2");
const submit = document.getElementById("sumbit");
const spinner = document.getElementById("spinner");
const regEx = /^[A-Za-z]+( [A-Za-z]+)*$/;
const confirmationH1 = document.getElementById("confirmationH1");
const mainIter = document.getElementById("mainInter");
const confirmation = document.getElementById("confirmation");
const span1 = document.getElementById("span1");
const span2 = document.getElementById("span2");
const bookBtn = document.getElementById("bookRide");
const editRide = document.getElementById("editRide");
const timer = document.getElementById("timer");
const timerDisplay = document.getElementById("timerDisplay");
const startBtn = document.getElementById("startRide");
const endBtn = document.getElementById("endRide");
const continueBtn = document.getElementById("continueRide");
const pauseBtn = document.getElementById("pauseRide");
const receipt = document.getElementById("receipt");
const fare = document.getElementById("fare");
const timeFare = document.getElementById("timeFare");
const initialTotal = document.getElementById("initialTotal");
const tax = document.getElementById("tax");
const totalAmount = document.getElementById("totalAmount");
const totalTaken = document.getElementById("timeTaken");
let second = 0;
let minute = 0;
let hour = 0;
let secsTimer;
let inter;
let points = 0;

function style(el, em, bool) {
    if (bool) el.style.border = "1.8px solid green", em.style.display = "none";
    else el.style.border = "1.8px solid red", em.style.display = "block";
}

function validateForm(element, regEx, errorMessage) {
    let isValid = regEx.test(element.value); // if i use .match() it returns an object
    style(element, errorMessage, isValid);
    console.log(typeof isValid);
    return isValid;
}

let correct = false;
let correct2 = false;

formInput.addEventListener("input", function () {
    correct = validateForm(formInput, regEx, formError1);
    console.log(`For the first Form : the correct value is ${correct}`);
});

formInput2.addEventListener("input", function () {
    correct2 = validateForm(formInput2, regEx, formError2);
    console.log(`For the second Form : the correct value is ${correct2}`);
});

submit.addEventListener("click", function () {
    if (correct && correct2) {
        spinner.style.display = "flex";
        spinner.addEventListener("animationend", function () {
            span1.textContent = formInput.value;
            span1.style.color = "#ffaa00";
            span2.textContent = formInput2.value;
            span2.style.color = "#ffaa00";
            mainIter.style.display = "none";
            confirmation.style.display = "flex";
        })
    } else {
        validateForm(formInput, regEx, formError1);
        validateForm(formInput2, regEx, formError2);
        window.alert("Follow the necessary Instructions and Put In Valid Inputs");
    }
});


editRide.addEventListener("click", function () {
    mainIter.style.display = "flex";
    confirmation.style.display = "none";
    spinner.style.display = "none";
})

console.log(confirmationH1)

bookBtn.addEventListener("click", function () {
    timer.style.display = "flex";
    mainIter.style.display = "none"
    confirmation.style.display = "none";
})

startBtn.addEventListener("click", function () {
    startBtn.style.display = "none";
    pauseBtn.style.display = "block";
    endBtn.style.display = "flex";
    secAdder = 1;
    minAdder = 0;
    Adder = 0;
    secsTimer = function () {
        inter = setInterval(function () {
            if (second < 59) {
                if (second === 58) {
                    minute++
                    second = 0
                    if (minute === 59) {
                        hour++
                        minute = 0
                    }
                }
            } else {
                second = 0;
            }
            second += secAdder ? secAdder === 1 : 0;
            points++
            console.log(points)
            timerDisplay.textContent = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}:${second.toString().padStart(2, "0")}`;
        }, 1000)
    }
    secsTimer();
});

pauseBtn.addEventListener("click", () => {
    continueBtn.style.display = "block";
    pauseBtn.style.display = "none";
    clearInterval(inter);
})

continueBtn.addEventListener("click", () => {
    continueBtn.style.display = "none";
    pauseBtn.style.display = "block";
    secsTimer()
})

endBtn.addEventListener('click', () => {
    clearInterval(inter)
    // totalTaken.textContent = points;
    receipt.style.display = "flex";
    timer.style.display = "none";
    endBtn.style.display = "none";
    timer.display = "none";
    totalTaken.textContent += `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}:${second.toString().padStart(2, "0")}`
    let timeFareAmount = Math.floor(parseInt(hour) * 100 + parseInt(minute)*100 + parseInt(second)*(100/60));
    timeFare.textContent +=  timeFareAmount;
    let initialValue = 1000 + timeFareAmount
    initialTotal.textContent += initialValue;
    let taxAm = Math.floor(0.1 * initialValue)
    tax.textContent += taxAm;
    totalAmount.textContent += initialValue + taxAm;
})