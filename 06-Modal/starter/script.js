'use strict';

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnOpenModal = document.querySelectorAll('.show-modal')
const para = document.querySelector('p')

console.log(btnOpenModal)

const openModal = function () {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}
for (let i = 0; i < btnOpenModal.length; i++) {
    console.log(btnOpenModal[i].textContent)
    btnOpenModal[i].addEventListener('click', openModal)
}
const closeModal = function () {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}
btnCloseModal.addEventListener('click', closeModal)

document.addEventListener('keydown',(e)=>{
    if(e.key==='Escape')
    {
        if(!modal.classList.contains('hidden'))
        {
            closeModal()
        }
    }
})