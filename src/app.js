



console.log("Merhaba kodlama.io")

let dolarDun = 9.20
//dolarDun = "Istanbul"  JavaScript is not TypeSafe language

let dolarBugün = 9.30

{
    let dolarDun = 9.10
}

const euroDun = 11.10
//euroDun = 12
console.log(euroDun)

//array
//camelCasing
//PascalCasing

let konutKredileri=["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Komut Kredisi"]

console.log("<ul>")
for(let i=0; i<konutKredileri.length; i++){
    console.log("<li>" + konutKredileri[i] + "</li>")
}
console.log("</ul>")
