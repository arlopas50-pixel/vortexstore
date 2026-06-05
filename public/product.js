alert("HALO VORTEX")

function renderProducts(){

const grid =
document.getElementById(
'packageGrid'
)

grid.innerHTML = ''

products.forEach(product=>{

grid.innerHTML += `

<div class="package-option"
onclick="selectPackage(
'${product.service}',
'${product.name}',
'${product.price}'
)">

💎 ${product.name}

<br>

<span>
${product.price}
</span>

</div>

`

})

}

let selectedService = ''
let selectedProduct = ''
let selectedPrice = ''

function selectPackage(
service,
product,
price
){

selectedService = service
selectedProduct = product
selectedPrice = price

document.getElementById(
'selectedPackage'
).innerText = product

document.getElementById(
'selectedPrice'
).innerText = price

}

const products = [

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
