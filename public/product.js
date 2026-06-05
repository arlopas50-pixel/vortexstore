function renderProducts(){

const packageGrid =
document.getElementById(
'packageGrid'
)

packageGrid.innerHTML = ''

games.ml.forEach(product => {

packageGrid.innerHTML += `

<div class="package-option"
onclick="selectPackage(
'${product.service}',
'${product.name}',
'${product.price}'
)">
💎 ${product.name}
<br>
<span>${product.price}</span>
</div>

`

})

}

let selectedPayment = ''

function selectPayment(method){

selectedPayment = method

document.getElementById(
'paymentSelected'
).innerText =
'Metode: ' + method

document
.querySelectorAll('.payment-method')
.forEach(item=>{

item.classList.remove('active')

})

event.currentTarget
.classList.add('active')

}

async function checkNickname(){

const userId =
document.getElementById("userId").value

const serverId =
document.getElementById("serverId").value

if(userId.length < 5) return

try{

const response =
await fetch('/nickname',{

method:'POST',

headers:{
'Content-Type':'application/json'
},

body:JSON.stringify({
userId,
serverId
})

})

const data = await response.json()

document.getElementById(
'nicknameBox'
).innerHTML =
'Nickname: ' + data.nickname

}catch(err){

document.getElementById(
'nicknameBox'
).innerHTML =
'Nickname tidak ditemukan'

}

}


let currentGame = ''
const games = {

ml:[

{
service:"MLA3-S13",
name:"3 Diamonds",
price:"Rp 1.500"
},

{
service:"MLA5-S13",
name:"5 Diamonds",
price:"Rp 2.000"
},

{
service:"MLA10-S13",
name:"10 Diamonds",
price:"Rp 3.500"
},

{
service:"MLA12-S13",
name:"12 Diamonds",
price:"Rp 4.000"
},

{
service:"MLA15-S13",
name:"15 Diamonds",
price:"Rp 5.000"
},

{
service:"MLA17-S13",
name:"17 Diamonds",
price:"Rp 5.500"
},

{
service:"MLA19-S13",
name:"19 Diamonds",
price:"Rp 6.000"
},

{
service:"MLA22-S13",
name:"22 Diamond",
price:"Rp 7.000",
},

{
service:"MLA28-S13",
name:"28 Diamonds",
price:"Rp 8.000"
},

{
service:"MLA36-S13",
name:"36 Diamond",
price:"Rp 10.000",
},

{
service:"MLA44-S13",
name:"44 Diamonds",
price:"Rp 12.000"
},

{
service:"MLA59-S13",
name:"59 Diamonds",
price:"Rp 16.000"
},

{
service:"MLA64-S13",
name:"64 Diamonds",
price:"Rp 17.500"
}

],

ff:[

{
service:"FF5",
name:"5 Diamonds FF",
price:"Rp 1.000"
},

{
service:"FF12",
name:"12 Diamonds FF",
price:"Rp 2.000"
}

],

pubg:[

{
service:"PUBG60",
name:"60 UC",
price:"Rp 15.000"
}

]

}

const productContainer = document.querySelector(".products")

function loadGame(game){

currentGame = game

const productContainer =
document.getElementById("products")

productContainer.innerHTML = ""

games[game].forEach(product=>{

productContainer.innerHTML += `

<div class="card">

<h2>${product.name}</h2>

<div class="price">
${product.price}
</div>

<button class="buy-btn"
onclick="orderNow(
'${product.service}',
'${product.name}',
'${product.price}'
)">
Buy Now
</button>

</div>

`

})

}


function searchProducts() {

const input = document
.getElementById("searchInput")
.value.toLowerCase()

const cards =
document.querySelectorAll(".card")

cards.forEach(card => {

const text =
card.innerText.toLowerCase()

if(text.includes(input)) {

card.style.display = "block"

} else {

card.style.display = "none"

}

})

}


let selectedService = ''
let selectedPrice = ''
let selectedProduct = ''

function selectPackage(service,product,price){

selectedService = service
selectedProduct = product
selectedPrice = price

document.getElementById('selectedPackage')
.innerText = product

document.getElementById('selectedPrice')
.innerText = price

}

function orderNow(){

document.getElementById('popup')
.style.display = 'flex'

document.getElementById('productName')
.innerText = selectedProduct

document.getElementById('productPrice')
.innerText = selectedPrice

}

function closePopup(){

document.getElementById('popup')
.style.display = 'none'

}

async function submitOrder(){

const userId =
document.getElementById('userId').value

const serverId =
document.getElementById('serverId').value

if(!userId || !serverId){

alert('Lengkapi data')

return

}

document.getElementById('nickname')
.innerText = 'Nickname: Player ML'

document.getElementById('loading')
.style.display = 'block'

try{

const response = await fetch('/order',{

method:'POST',

headers:{
'Content-Type':'application/json'
},

body:JSON.stringify({

userId:userId,
serverId:serverId,
service:selectedService

})

})

const result = await response.json()

document.getElementById('loading')
.style.display = 'none'

alert(JSON.stringify(result))

const resultBox =
document.getElementById('resultBox')

resultBox.style.display = 'block'

if(
result.result == true ||
result.success == true
){

resultBox.className =
'result-box success'

resultBox.innerText =
'✅ Transaksi Berhasil'

}else{

resultBox.className =
'result-box failed'

resultBox.innerText =
'❌ ' + (
result.message ||
'Transaksi Gagal'
)

}

}catch(err){

document.getElementById('loading')
.style.display = 'none'

alert('Server Error')

}

}

const slides =
document.querySelectorAll('.slide')

let currentSlide = 0

setInterval(()=>{

slides[currentSlide]
.classList.remove('active')

currentSlide++

if(currentSlide >= slides.length){

currentSlide = 0

}

slides[currentSlide]
.classList.add('active')

},3000)

renderProducts()
