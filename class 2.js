let displayTime = document.querySelector('.clock');
let timeInput = document.querySelector('#timeInput');
let giveGreetingBtn = document.querySelector('#giveGreetingBtn');
let greetingOutput = document.querySelector('#greetingOutput');
let text2 = document.querySelector('#currentTime2')
const now = new Date();
const day = now.getDay();

switch(day){
    case 0:
        text2.textContent = "Today is Sunday go to church"
        break;
    case 1:
        text2.textContent = "Today is Monday go to work"
        break;
    case 2:
        text2.textContent = "Today is Tuesday go to work"
        break;
    case 3:
        text2.textContent = "Today is Wednesday go to work"
        break;
    case 4:
        text2.textContent = "Today is Thursday go to work"
        break;
    case 5:
        text2.textContent = "Today is Friday go to mosque"
        break;
    case 6:
        text2.textContent = "Today is Saturday let us party"
        break;
    default:
        text2.textContent = `${day} is not a day`
}


//understand form validation from book
//use padstart
function updateClock() {
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    displayTime.textContent = `${hours}:${minutes}`;
}

setInterval(updateClock, 1000);
updateClock();
//understand indexing from oga or mr dele
timeInput.addEventListener('input', function() {
    let value = timeInput.value;


    if (value.indexOf(':') > 2 || (value.indexOf(':') !== -1 && value.indexOf(':') !== 2)) {
        value = value.replace(/:/g, '');
    }

    if (value.length === 2 && value.indexOf(':') === -1) {
        value += ':';
    }

    if (value.length > 5) {
        value = value.substring(0, 5);
    }

    timeInput.value = value;
});

giveGreetingBtn.addEventListener('click', function() {
    let timeString = timeInput.value;
    greetingOutput.textContent = '';


//search for string methoda
    const [hoursStr, minutesStr] = timeString.split(':');
    const hours = parseInt(hoursStr, 10);
    const minutes = parseInt(minutesStr, 10);

    let greeting = '';

    if (hours >= 0 && hours < 12) {
        greeting = `Good Morning! It is ${timeString}.`;
    } else if (hours >= 12 && hours <= 16) {
        greeting = `Good Afternoon! It is ${timeString}`;

    } else if (hours > 16 && hours <= 23) {
        greeting = `Good Evening! It is ${timeString}.`;
    } else {
        greeting = `${timeString} is not a valid time.`;
    }

    greetingOutput.textContent = greeting;
});