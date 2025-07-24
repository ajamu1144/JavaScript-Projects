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
const checkOut = document.getElementById('checkOut');
const timer = document.querySelectorAll('.timer');
const countdownPage = document.getElementById('countdownPage');
let daysOriginal;

function upperFirst(text){
    return text[0].toUpperCase() + text.slice(1);
}

bookBtn.addEventListener("click", function(e){
    let selectedOption = hotelType.options[hotelType.selectedIndex];
    let out = new Date(checkOut.value).getTime();
    let now = new Date().getTime();
    let dur = out - now;
    e.preventDefault();
    console.log(checkOut.value);
    console.log();
    console.log(dur + ' that is the duration')
    console.log(out + ' that is when we are leaving in milliseconds')
    console.log(now + ' that is now in milliseconds')
    if(name.value.length < 0 || name.value.length > 20 || name.value === ''){
        freeConfirm.style.display = 'flex'
        paidConfirm.style.display = 'none'
        freeConfirm.querySelector('.name').textContent = name.value;
    }
    else if(dur <= 0){
        checkOutError.style.display = 'flex'
    }

    else if(checkOut.value === ''){
        checkOutError.style.display = 'flex'
    }

    else{
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
            handleCount()
            paidConfirm.querySelector('.price').textContent = `pay a total of ₦${selectedOption.dataset.price * Math.ceil(daysOriginal)} `;

            // paidConfirm.querySelector('.price').textContent =
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

})

edit.forEach(editBtn=>{
    editBtn.addEventListener("click", function(){
        this.parentElement.parentElement.parentElement.style.display = "none";
        chooseHotelPage.style.display = "flex";
    })
})

function handleCount(){
    let finalText
    let timeOut = new Date(checkOut.value);
    console.log(timeOut)
    const now = new Date().getTime();
    const Duration = timeOut - now;
    console.log(Duration)
    daysOriginal = Duration /(1000*60*60*24);
    if (Duration <= 0){
        finalText = `Dear ${name.value}, kindly vacate the room`
    }
    else{
        let days = (Math.floor(Duration /(1000*60*60*24))).toString().padStart(2, "0");
        let hours = (Math.floor((Duration /(1000*60*60)%24))).toString().padStart(2, "0");
        let minutes = (Math.floor((Duration/1000/60)%60)).toString().padStart(2, "0");
        let seconds = (Math.floor((Duration/1000)%60)).toString().padStart(2, "0");
        finalText = `${days}d : ${hours}h : ${minutes}m : ${seconds}s`
    }
    console.log(finalText)

    return finalText
}


confirm.forEach(confirmBtn =>{
    confirmBtn.addEventListener('click', function(){
        confirmBtn.parentElement.parentElement.parentElement.style.display = "none";
        countdownPage.style.display = 'block'
        countdownPage.querySelector('.packName').textContent = upperFirst(name.value);
        countdownPage.querySelector('.packSuite').textContent = hotelType.value !== 'free' ? `${upperFirst(hotelType.value)} suit` : upperFirst(hotelType.value);
        setInterval(function(){
            // if({days} === handleCount()){
            //
            // }
            document.querySelector('.timer').textContent = handleCount()
            let dates = "01d:22hr:15mns:10secs";
            let arrayDates = dates.split(":")
            let daysArray = []
            arrayDates.forEach((day) => {
                let newDay = day.slice(0, 2)
                daysArray.push(newDay)
                console.log(newDay)
                console.log(daysArray)
            })

            console.log()

        }, 1000)
    })
})