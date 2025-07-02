let displayTime = document.querySelector('.clock');
let giveGreetingBtn = document.querySelector('#giveGreetingBtn');
let greetingOutput = document.querySelector('#greetingOutput');
let text2 = document.querySelector('#currentTime2')
const now = new Date();
let day = now.getDay();

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

let hours = now.getHours()
let minutes = now.getMinutes()
function updateClock() {
    displayTime.textContent = `${hours}:${minutes}`;
}
setInterval(updateClock, 1000);
updateClock();

