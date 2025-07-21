let bookBtn = document.getElementById("bookBtn");
let name = document.getElementById("name");
let hotelType = document.getElementById("hotelType");

bookBtn.addEventListener("click", function(e){
    if(name.value.length > 0 && name.value.length < 20){
        e.preventDefault();
        name.classList.add('ring-[1.8px]')
        name.classList.add('ring-green-500')
        if (name.classList.contains('ring-red-500')){
            name.classList.remove('ring-red-500')
        }
        console.log("clicked");
        console.log(hotelType.value);
    }
    else{
        e.preventDefault();
        name.classList.add('ring-2')
        name.classList.add('ring-red-500')
        console.log("empty");
    }
})

