
const countriesContainer = document.querySelector('.countries');

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
  countriesContainer.style.opacity = 1

}


// const whereAmI = function (lat, lng) {
//     let key = '65b8e1be7e354855668324oxgce1312'
//     const request = fetch(`https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}&api_key=${key}`)
//         .then((res) => {
//             if (!res.ok) {
//                 if (res.status == 429) {
//                     throw new Error(`Too many reloads API cannot handle`)
//                 }
//                 throw new Error(`Oh no (${res.status}) error `)
//             }
//             return res.json()
//         })
//         .then((data) => {
//             console.log(data);
//             console.log(`You are in ${data.address.city} ,${data.address.country}`);
//             const country = data.address.country
//             return fetch(`https://restcountries.com/v3.1/name/${country}`)

//         }).then((res) => res.json())
//         .then((data) => {
//             renderCountry(data[0])
//         })
//         .catch((err) => console.error(`Something went wrong ${err}`))
// }

// whereAmI(52.508, 13.381)

// 2


// const wait = function (seconds) {
//     return new Promise(function (resolve) {
//         setTimeout(resolve, seconds * 1000);
//     });
// };


// const imageContainer = document.querySelector('.images')
// const createImage = function (imagePath) {
//     return new Promise(function (resolve, reject) {
//         const img = document.createElement('img')
//         img.src = imagePath

//         img.addEventListener('load', function () {
//             imageContainer.append(img)
//             resolve(img)

//         })
//         img.addEventListener('error', function () {
//             reject(new Error(`Error loading the image`))

//         })
//     })
// }
// let currImage;
// createImage('./img/img-1.jpg')
//     .then((res) => {
//         currImage=res
//         console.log(`image 1 loaded`)
//         return wait(2)
//     }).then(()=>{
//         currImage.style.display='none'
//         return createImage('./img/img-2.jpg')
//     }).then((res) => {
//         currImage=res
//         console.log(`image 2 loaded`)
//         return wait(2)
//     }).then(()=>{
//         currImage.style.display='none'
//     })



// const whereAmI=async function(country){
// const res=await fetch(`https://restcountries.com/v3.1/name/${country}`)
// const data=await res.json()
// renderCountry(data[0])
// }

// const getJSON=function(url){
// return fetch(url).then((res)=>res.json())
// }
// const getThreeData=async function(c1,c2,c3){
// try{
//     // const [data1]=await getJSON((`https://restcountries.com/v3.1/name/${c1}`))
//     // console.log(data1);

//     // const [data2]=await getJSON((`https://restcountries.com/v3.1/name/${c2}`))
//     // console.log(data2);

//     // const [data3]=await getJSON((`https://restcountries.com/v3.1/name/${c3}`))
//     // console.log(data3);  //Runs one by one

//    const data=await Promise.all([
//      getJSON((`https://restcountries.com/v3.1/name/${c1}`)),
//      getJSON((`https://restcountries.com/v3.1/name/${c2}`)),
//      getJSON((`https://restcountries.com/v3.1/name/${c3}`))
//     ])

//     data.map((ele)=>{
//         console.log(ele[0].capital);
//     })
// }
// catch(err){
//     console.error(`Oh no error ${err}`);
// }
// }

// getThreeData('usa','australia','russia')


// 3

const wait = (seconds) => {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000)
  })
}


const loadNPause = async function () {
  const imageContainer = document.querySelector('.images')
  try {
    let img = document.createElement('img')
    img.src = './img/img-1.jpg'
    imageContainer.append(img)
    await wait(2)
    img.style.display = 'none'


    img.src = './img/img-2.jpg'
    img.style.display = 'block'
    imageContainer.append(img)
    await wait(2)
    img.style.display = 'none'

  } catch (err) {
    console.error(`Something unexpected happened ${err}`);
  }
}


loadNPause()