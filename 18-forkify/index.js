const btn = document.querySelector('button')
const p = document.querySelector('p')
btn.addEventListener('click', (e) => {
    console.log(e);
    p.textContent = "This text got manipulated"
})