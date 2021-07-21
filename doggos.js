

const DOGGOBREEDS_URL = 'https://dog.ceo/api/breeds/list/all'
const select = document.querySelector('.breeds')
const btn = document.querySelector('#addDoggo')


fetch(DOGGOBREEDS_URL)
.then(response => response.json())
.then(data => {
    breedsObject = data.message
    breedsArray = Object.keys(breedsObject) 
    for (let i = 0; i < breedsArray.length; i++) {
        const option = document.createElement('option')
        option.value = breedsArray[i]
        option.innerText = breedsArray[i];

        select.appendChild(option)
    }
})

select.addEventListener('change', e=>{
    // console.log(e.target.value)
    
    let url = `https://dog.ceo/api/breed/${e.target.value}/images/random`

    getDoggo(url)
})

const img = document.querySelector('#doggo-img')
const spinner = document.querySelector('.spinner')

function getDoggo(url){
    spinner.classList.add('show')
    img.classList.remove('show')
    fetch(url)
    .then(response => response.json())
    .then( data => {
        img.src = data.message
    })
}

img.addEventListener('load',()=>{
    spinner.classList.remove('show')
    img.classList.add('show')
})

btn.addEventListener('click',()=>{
    let breed = $('.breeds')[0].value
    let url = `https://dog.ceo/api/breed/${breed}/images/random`
    getDoggo(url)
})













// const BREED_URL = 'https://dog.ceo/api/breeds/image/random'

// const btn = document.querySelector('#addDoggo')
// const placeImgHere = document.querySelector('.doggos')
// const createImg = document.createElement('img')


// function add(){
//     fetch(BREED_URL)
//     .then(Response => Response.json())
//     .then(data => {
//         createImg.src = data.message
//         createImg.alt = 'A beautiful Doggo'
//     })
// }

// btn.addEventListener('click',()=>{
//     add()
//     placeImgHere.appendChild(createImg)
    
// })
