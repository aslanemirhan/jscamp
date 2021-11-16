
//  1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.

/*
Mükemmel sayı, sayılar teorisinde, kendisi hariç pozitif tam bölenlerinin toplamı kendisine eşit olan sayı.
 Diğer bir ifadeyle, bir mükemmel sayı, bütün pozitif tam bölenlerinin toplamının yarısına eşittir.

 Örnek:
 6 = 1 + 2 + 3 

 28 = 1 + 2 +  4 + 7 + 14 
*/


function perfectNumber() {
    let total = 0
    for(let i = 1; i < 1000; i++) {
        for(let j = 1; j < i; j++) {
            if(i % j == 0) {
                total = total + j;
            }
        }
        if(i == total) {
            console.log(i + " is a perfect number!")
        }
        total = 0
    }
}

console.log("TASK 3 TEST")
perfectNumber()