function change() {
    const span1 = document.getElementById('span1');
    const Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'];
    const date = new Date();
    const Month = date.getMonth();
    let day = date.getDay();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let millisecond = date.getMilliseconds();
    let session = 'AM';

    if (hour >= 12) {
        if (hour > 12) hour -= 12;
        session = 'PM';
    }

    day = day < 10 ? '0' + day : day;
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;

    span1.innerHTML = `${Months[Month]} ${day}, ${hour}:${minute}:${second}:${millisecond} ${session}`;
}

setInterval(change, 10);

// Stopwatch logic
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let mm = document.getElementById('mm');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const continueBtn = document.getElementById('continue')
let ms = 0;
let s = 0;
let m = 0;
let isRunning = false;
let stopwatchInterval;
let stopBtn = document.getElementById('stop')
let resetBtn = document.getElementById('reset')

function Counting() {
    ms++;
    if (ms === 100) {
        ms = 0;
        s++;
    }
    if (s === 60) {
        s = 0;
        m++;
    }

    mm.innerHTML = ms < 10 ? '0' + ms : ms;
    sec.innerHTML = s < 10 ? '0' + s : s;
    min.innerHTML = m < 10 ? '0' + m : m;
}

function StartCounting() {
    if (!isRunning) {
        stopwatchInterval = setInterval(Counting, 10);
        isRunning = true;
        startBtn.style.display = 'none';
        pauseBtn.style.display = 'inline-block';
    }
}

function PauseCounting() {
    if (isRunning) {
        clearInterval(stopwatchInterval);
        isRunning = false;
        pauseBtn.style.display = 'none';
        continueBtn.style.display = 'inline-block';
        stopBtn.style.display = 'inline-block'
    }
}

function Continue(){
    StartCounting()
    continueBtn.style.display = 'none'
    // startBtn.style.display = 'inline-block'
    isRunning = true;
    stopBtn.style.display = 'inline-block'
}

function Stop(){
    clearInterval(stopwatchInterval);
    isRunning = false;
    pauseBtn.style.display = 'none';
    continueBtn.style.display = 'none';
    stopBtn.style.display = 'none'
    resetBtn.style.display = 'block'
}

function Reset(){
    min = 0
    sec = 0
    mm = 0
}

startBtn.addEventListener('click', StartCounting);
pauseBtn.addEventListener('click', PauseCounting);
continueBtn.addEventListener('click', Continue)
stopBtn.addEventListener('click', Stop)
resetBtn.addEventListener('click', console.log('we eadadad'))
