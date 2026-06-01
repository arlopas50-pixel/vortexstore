
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
price:"Rp 1.030"
},

{
service:"MLA5-S13",
name:"5 Diamonds",
price:"Rp 1.452"
},

{
service:"MLA10-S13",
name:"10 Diamonds",
price:"Rp 2.904"
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
kode:'PUBG60',
nama:'60 UC',
harga:'Rp 15.000'
},

{
kode:'PUBG325',
nama:'325 UC',
harga:'Rp 75.000'
},

{
kode:'PUBG660',
nama:'660 UC',
harga:'Rp 150.000'
}

],

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

function orderNow(service,product,price){

selectedService = service
selectedProduct = product
selectedPrice = price

document.getElementById('popup')
.style.display = 'flex'

const serverBox =
document.getElementById('serverBox')

if(currentGame === 'ml'){

serverBox.style.display = 'block'

}else{

serverBox.style.display = 'none'

}

document.getElementById('productName')
.innerText = product

document.getElementById('productPrice')
.innerText = price

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

function toggleMenu(){

const menu =
document.getElementById("mobileMenu");

const overlay =
document.getElementById("overlay");

menu.classList.toggle("active");

overlay.classList.toggle("active");

}

const promos = [
  {
    tag: "🔥 Promo Mingguan",
    title: "Diskon Hingga 50%",
    desc: "Semua produk digital sedang diskon besar minggu ini!"
  },
  {
    tag: "⚡ Flash Sale",
    title: "Sale 24 Jam Saja",
    desc: "Cepat! Harga spesial akan berakhir hari ini."
  },
  {
    tag: "🎉 Event Spesial",
    title: "Bundle Hemat Vortex",
    desc: "Beli lebih banyak, hemat lebih besar untuk semua item."
  }
];

let index = 0;

function updatePromo() {
  const promo = promos[index];

  const title = document.getElementById("promo-title");
  const desc = document.getElementById("promo-desc");
  const tag = document.getElementById("promo-tag");

  // fade effect
  title.style.opacity = 0;
  desc.style.opacity = 0;

  setTimeout(() => {
    tag.innerText = promo.tag;
    title.innerText = promo.title;
    desc.innerText = promo.desc;

    title.style.opacity = 1;
    desc.style.opacity = 1;
  }, 300);

  index = (index + 1) % promos.length;
}

// first load
updatePromo();

// rotate every 5 seconds
setInterval(updatePromo, 5000);
