



/*

-Asal sayı(Prime Number) : Sadece iki pozitif tam sayı böleni olan dolğal sayılardır
Sadece kendisine ve 1 sayısına kalansız bölünebilen 1'den büyük sayılardır.
- 2,3,5,7,9,11...


*/


let findPrimeNumbers = (...numbers) =>{
    numbers.forEach(number =>{
        let prime = true

        if(number > 1 || number === 1){
            prime = false
            if(number == 2){
                console.log(number + " : ASAL SAYI")
            }
            else{
                for(let i=2; i < number; i++){
                    if(number % i == 0){
                        prime = false
                    }
                }
                if(prime){
                    console.log(number + " : ASAL SAYI")
                }
                else{
                    console.log(number + " : ASAL SAYI DEGİL !")
                }
            }
        }
    })
}

findPrimeNumbers(1,2,3,4,5,6,21)