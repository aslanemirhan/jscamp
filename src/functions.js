

// 01.11.21 (Monday) - JS2

function addToCart(quantity,productName="Elma") {
    console.log("Sepete eklendi : " + productName+ " ," + "Fiyatı : " + quantity)
}

addToCart(10)


let sayHello = (yourName) =>{
    console.log("Hello " + yourName)
}
 let yourName = "Mehmet Yılmaz"

sayHello(yourName)


let product1 = {productName:"Elma", unitPrice:10, quantity:5}

function addToCart3(products){
    console.log("Ürün : "+products.productName )
    console.log("Fiyatı : "+products.unitPrice)
    console.log("Miktarı : "+products.quantity)
}

addToCart3(product1)

// Referans Types : Array and Object
let product2 = {productName:"Armut", unitPrice:10, quantity:5}
let product3 = {productName:"Muz", unitPrice:10, quantity:5}

product2 = product3
product3.productName = "Kivi"
console.log(product2.productName)

//  Value Types : Primitive and Numbers
let sayi1 = 10
let sayi2 = 20

sayi1 = sayi2
sayi2 = 100

console.log(sayi1)

function addToCart4(x){
    console.log(products)
}

let products = [
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5}
]

addToCart4(products)

// REST : birlestirme

console.log("REST")

let add = (...sayilar)  => {
    console.log(sayilar)
}

add(10,20,312,3,23,67)

// SPREAD : ayırma

console.log("SPREAD")

let add2 = (...numbers) =>{
    let total = 0
    for(let i=0; i<numbers.length; i++ ){
        console.log(numbers[i])
        total = total + numbers[i]
    }
    console.log(total)
}

add2(10,20)

let numbers = [10,32,123,9,76]
console.log(...numbers)
console.log(Math.max(...numbers))


// DESTRUCTURE
console.log("DESTRUCTURE")

let [icAnadolu,Marmara,Karadeniz,[İcAnadoluSehirleri,MarmaraSehirleri,KaradenizSehirleri]] = [
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul,Kocaeli"],
        ["Trabzon","Sinop"]
    ]
]

console.log(icAnadolu.name)
console.log(icAnadolu.population)
console.log(İcAnadoluSehirleri)
console.log(MarmaraSehirleri)
console.log(KaradenizSehirleri)
console.log(Marmara)
console.log(Karadeniz)



// let newProductName, newUnitPrice, newQuantity({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity} ={productName:"Elma",unitPrice:10,quantity:5})
// console.log(newProductName)
// console.log(newUnitPrice)
// console.log(newQuantity)