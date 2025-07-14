let subjects = document.querySelectorAll('.subject')
let add = document.getElementById('addSubject')
let remove = document.getElementById('removeSubject')
let added = document.getElementById('Added')
let unadded = document.getElementById('unAdded')
let selectedSub = ""
let selected = false;

subjects.forEach(sub => {
    sub.addEventListener('click', () => {
        if(sub.classList.contains('subject') && !selected) {
            document.querySelectorAll('.subject').forEach(el => {
                el.style.background = ""
            })
            selected = true
            sub.style.background = "red"
            selectedSub = sub
            add.style.display = "flex"
            add.textContent = "Click to Add"
        }
        else{
            sub.style.background = "red"
            add.style.display = "none"
            remove.style.display = "flex"
        }
        remove.addEventListener('click', () => {
            sub.classList.add('subject')
            // added.removeChild(sub)
            unadded.insertBefore(sub, unadded.firstChild)
            remove.style.display = "none"
            sub.style.background = ""
        })
    })
})

add.addEventListener('click', () => {
    selectedSub.style.background = "lime"
    selectedSub.classList.add('ad')
    selectedSub.classList.remove('subject')
    add.style.display = "none"
    console.log(selectedSub)
    added.appendChild(selectedSub)
    selectedSub = ""

})

added.childNodes.forEach(child =>{
    child.addEventListener('click', () => {
        child.classList.remove('subject')
        remove.style.display = "flex"
        add.style.display = "none !important"
        add.addEventListener('click', () => {
            selectedSub.style.background = "lime"
            add.style.display = "none"
            selectedSub.classList.add('ad')
            selectedSub.classList.remove('subject')
            console.log(selectedSub)
            unadded.removeChild(selectedSub)
            selectedSub = ""
        })
    });
})

