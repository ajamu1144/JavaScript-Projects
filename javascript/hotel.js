const bookBtn = document.getElementById("bookBtn");
const chooseHotelPage = document.getElementById("chooseHotel");
const name = document.getElementById("name");
const hotelType = document.getElementById("hotelType");
const checkInE1rror = document.getElementById('checkInError')
const checkOutError = document.getElementById('checkOutError')
const nameError = document.getElementById('nameError')
const paidConfirm = document.getElementById('paidConfirm')
const freeConfirm = document.getElementById('freeConfirm')
const confirm = document.querySelectorAll('.confirm');
const edit = document.querySelectorAll('.edit');
const userNname = document.querySelectorAll('.name');
const checkIn = document.getElementById('checkIn');
const checkOut = document.getElementById('checkOut');
const timer = document.querySelectorAll('.timer');
const countdownPage = document.getElementById('countdownPage');
let dur = new Date(checkOut.value).getTime() - new Date().getTime();

function upperFirst(text){
    return text[0].toUpperCase() + text.slice(1);
}

bookBtn.addEventListener("click", function(e){
    e.preventDefault();
    console.log(checkOut.value);
    console.log();
    if(name.value.length > 0 && name.value.length < 20){
        e.preventDefault();
        name.classList.add('ring-[1.8px]')
        name.classList.add('ring-green-500')
        if (name.classList.contains('ring-red-500')){
            name.classList.remove('ring-red-500')
        }
        console.log("clicked");
        console.log("clicked");
        nameError.style.display = "none";
        console.log(hotelType.value);
        chooseHotelPage.style.display = "none";
        if (hotelType.value !== 'free'){
            paidConfirm.style.display = 'flex'
            freeConfirm.style.display = 'none'
            paidConfirm.querySelector('.name').textContent = upperFirst(name.value);
            paidConfirm.querySelector('#type').textContent = upperFirst(hotelType.value);
            // paidConfirm.querySelector('#type').background =

        }

        else if(dur <= 0){
            checkOutError.style.display = "block";
        }

        else {
            freeConfirm.style.display = 'flex'
            paidConfirm.style.display = 'none'
            freeConfirm.querySelector('.name').textContent = name.value;
        }
    }
    // if(checkOut.value === ''){
    //     checkInError.style.display = "block";
    //     // checkOutError.style.display = "block";
    // }

    else{
        e.preventDefault();
        name.classList.add('ring-2')
        name.classList.add('ring-red-500')
        console.log("empty");
        nameError.style.display = "block";
    }

})

edit.forEach(editBtn=>{
    editBtn.addEventListener("click", function(){
        this.parentElement.parentElement.parentElement.style.display = "none";
        chooseHotelPage.style.display = "flex";
    })
})

function handleCount(){
    let timeOut = new Date(checkOut.value).getTime();
    const now = new Date().getTime();
    const Duration = timeOut - now;
    console.log(Duration)
    let days = (Math.floor(Duration /(1000*60*60*24))).toString().padStart(2, "0");
    let hours = (Math.floor((Duration /(1000*60*60)%24))).toString().padStart(2, "0");
    let minutes = (Math.floor((Duration/1000/60)%60)).toString().padStart(2, "0");
    let seconds = (Math.floor((Duration/1000)%60)).toString().padStart(2, "0");
    console.log(`${days}d : ${hours}h : ${minutes}m : ${seconds}s`)
    return `${days}d : ${hours}h : ${minutes}m : ${seconds}s`
}

confirm.forEach(confirmBtn =>{
    confirmBtn.addEventListener('click', function(){
        confirmBtn.parentElement.parentElement.parentElement.style.display = "none";
        countdownPage.style.display = 'block'
        countdownPage.querySelector('.packName').textContent = upperFirst(name.value);
        countdownPage.querySelector('.packSuite').textContent = hotelType.value !== 'free' ? `${upperFirst(hotelType.value)} suit` : upperFirst(hotelType.value);
        setInterval(function(){
            document.querySelector('.timer').textContent = handleCount()
        }, 1000)
    })
})