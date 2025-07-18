let subjects = document.querySelectorAll('.subject') // subjects in the unadded
let add = document.getElementById('addSubject')
let remove = document.getElementById('removeSubject')
let added = document.getElementById('Added')
let unadded = document.getElementById('unAdded')
let selectedSub = ""
let selected = false;
let selectedButton = null;
let addedSubjects;
let areAdded = false;
let removeSelected;


const handleClick = (e)=>{
    if(!selected){
        remove.style.display = 'none';
        e.target.style.background = 'red'
        selected = true
        selectedButton = e.target;
        add.style.display = 'block'
    }
    else{
        selectedButton.style.background = 'white'
        selectedButton = null;
        selected = false
        add.style.display = 'none'
    }
}


function changeBg(){
    subjects.forEach(subject =>{
        subject.addEventListener('click', handleClick)
    })
}
changeBg()

add.addEventListener('click', ()=>{
    if (unadded.children.length > 0){
        unadded.removeChild(selectedButton)
        selected = false
        let newBtn = document.createElement('button')
        newBtn.textContent = selectedButton.textContent
        added.appendChild(newBtn)
        selectedButton.style.display = 'none'
        add.style.display = 'none'
        newBtn.classList.add('selectedSubjects')
        addedSubjects = document.querySelectorAll('.selectedSubjects')
        areAdded = true
        console.log(unadded.children.length)
        checkAdded()
    }
})

function checkAdded(){
    if(areAdded){
        addedSubjects.forEach(addedSubject =>{
            addedSubject.addEventListener('click', ()=>{
                remove.style.display = 'block'
                removeSelected = addedSubject
            })
        })
    }
}

function removeSubject(){
    if (removeSelected){
        selected = false
        let tet = removeSelected.textContent
        // added.removeChild(removeSelected)
        checkAdded()
        removeSelected.style.display = 'none'
        let newBtn = document.createElement('button')
        newBtn.textContent = tet
        newBtn.classList.add('subject')
        newBtn.onclick = (e) => handleClick(e)
        // subjects = document.querySelectorAll('.subject')
        added.removeChild(removeSelected)
        unadded.insertBefore(newBtn, unadded.firstChild)
        remove.style.display = 'none'
        removeSelected.remove();
        removeSelected = null
        // added.childNodes.forEach(child =>{
        //     if (child === newBtn){
        //         added.removeChild(newBtn)
        //     }
        // })
    }
}

remove.addEventListener('click', removeSubject)



console.log(unadded.children.length)

// function removeBtn(){
//     addedSubjects.forEach(added =>{
//         added.addEventListener('click', ()=>{
//             added.style.background = 'red'
//         })
//     })
// }
//
// removeBtn()

// subjects.forEach(sub => {
//     sub.addEventListener('click', () => {
//         if(sub.classList.contains('subject') && !selected) {
//             document.querySelectorAll('.subject').forEach(el => {
//                 el.style.background = ""
//             })
//             selected = true
//             sub.style.background = "red"
//             selectedSub = sub
//             add.style.display = "flex"
//             add.textContent = "Click to Add"
//         }
//         else{
//             sub.style.background = "red"
//             add.style.display = "none"
//             remove.style.display = "flex"
//         }
//         remove.addEventListener('click', () => {
//             sub.classList.add('subject')
//             // added.removeChild(sub)
//             unadded.insertBefore(sub, unadded.firstChild)
//             remove.style.display = "none"
//             sub.style.background = ""
//         })
//     })
// })
//
// add.addEventListener('click', () => {
//     selectedSub.style.background = "lime"
//     selectedSub.classList.add('ad')
//     selectedSub.classList.remove('subject')
//     add.style.display = "none"
//     console.log(selectedSub)
//     added.appendChild(selectedSub)
//     selectedSub = ""
//
// })
//
// added.childNodes.forEach(child =>{
//     child.addEventListener('click', () => {
//         child.classList.remove('subject')
//         remove.style.display = "flex"
//         add.style.display = "none !important"
//         add.addEventListener('click', () => {
//             selectedSub.style.background = "lime"
//             add.style.display = "none"
//             selectedSub.classList.add('ad')
//             selectedSub.classList.remove('subject')
//             console.log(selectedSub)
//             unadded.removeChild(selectedSub)
//             selectedSub = ""
//         })
//     });
// })
//
