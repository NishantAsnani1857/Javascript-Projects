'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const body=document.querySelector('body')

const renderCountry = function (data, className = ' ') {
    let key1 = Object.keys(data.currencies)[0]
    let key2 = Object.keys(data.languages)[0]
    const html = `<article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[key2]}</p>
      <p class="country__row"><span>💰</span>${data.currencies[key1].name} (${data.currencies[key1].symbol})</p>
    </div>
  </article>`


    countriesContainer.insertAdjacentHTML('beforeend', html)
   
}

const renderError=function(msg){
    countriesContainer.insertAdjacentHTML('beforeend',msg)
}
// const request=new XMLHttpRequest()
// request.open('GET','https://restcountries.com/v3.1/name/India')
// request.send();


// request.addEventListener('load',function(e){
//     e.preventDefault();
//     const data=JSON.parse(this.responseText)
//     console.log(data);


// })
///////////////////////////////////////


const fetchCountry = function (country) 
{
    const request = fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(res => 
        {
            if(res.ok==false)
                throw new Error(`Cannot find country (${res.status})`)
            
            return res.json()
        })
            
        .then(function (data) {
            renderCountry(data[0])
            const neighbour = data[0].borders[0]
            // const neighbour='adfbdfb'
            if (!neighbour) return

            return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
                
        }).then((res) => {
            if(res.ok==false)
                throw new Error(`Cannot find neighbour (${res.status})`)
            
            return res.json()
        })
        .then((data) => renderCountry(data[0], 'neighbour'))
        .catch(err=>{
            console.error(`${err} 🎇🎇🎇`)
            renderError(`Something went wrong ${err.message} 🎇🎇🎇`)
        }).finally(()=>{
            countriesContainer.style.opacity = 1 //Executes everytime promise(rejected or resolved)
        })
}



btn.addEventListener('click',(e)=>{
    fetchCountry('Bharat')    
    fetchCountry('USA')    
})

// console.log('First task');

// setTimeout(()=>console.log(`Timer for 0 seconds`),0)
// Promise.resolve('Resolved promise').then((res)=>console.log(res))
// Promise.resolve('Resolved promise 2').then((res)=>
// {
//     for(let i=0;i<100000000;i++)
//     {}
//     console.log(res)
// })
// console.log('Second task');

// let changeBg=function(color)
// {
//     return new Promise(resolve=>{
        
//         setTimeout(()=>{
//             body.style.backgroundColor=color
//             console.log(color);
//             resolve();
//         },1000)
        
//     })
// }
// changeBg('violet')
// .then(()=> changeBg('Blue'))
// .then(()=> changeBg('Green'))
// .then(()=> changeBg('Yellow'))
// .then(()=> changeBg('Orange'))
// .then(()=> changeBg('Red'))
