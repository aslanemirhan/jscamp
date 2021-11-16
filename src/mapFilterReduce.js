console.log("Referance Type")

let cart = [
    {id:1, productName:"Telefon", quantity:2, unitPrice:4000},
    {id:2, productName:"Laptop", quantity:4, unitPrice:8900},
    {id:3, productName:"Bardak", quantity:20, unitPrice:20},
    {id:4, productName:"Çanta", quantity:1, unitPrice:100},
    {id:5, productName:"Monitor", quantity:2, unitPrice:1200},
    {id:6, productName:"Kalem", quantity:8, unitPrice:10},
]

function addToCart(sepet){
    sepet.push({id:7, productName:"Hesap Makinesi", quantity:3, unitPrice:30})
}

console.log(cart)
addToCart(cart)
console.log(cart)

console.log("Value Type")

let number = 10
function addToNumber(sayi){
    sayi += 1
    console.log("Fonksiyon sonucu : " + sayi)
}

addToNumber(number)
console.log("Value Types Result : " + number)


console.log("-----Map-----")

console.log("<ul>")
cart.map(product => {console.log(`<li>${product.productName}</li>`)})
console.log("</ul>")


console.log("-----Filter-----")

let quantityOver2 =  cart.filter(p => p.quantity > 2)
console.log(quantityOver2)


console.log("-----Reduce-----")

let total = cart.reduce((acc,product) => acc + product.unitPrice * 1.80 , 0)
console.log(total)

