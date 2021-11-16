/*
a ve b sıfırdan büyük tamsayılar olmak üzere, Eğer a'nın kendisi hariç tüm bölenlerinin toplamı b'ye eşit ise,
 ve aynı zamanda b'nin kendisi hariç tüm bölenlerinin toplamı a'ya eşit ise, a ve b arkadaş sayılardır 
 (amicable numbers).

Örnek ekran çıktısı: 
284 220
1210 1184 
*/

function friendNumber(number1,number2) {
    let totalNum1 = 0
    let totalNum2 = 0

    for(let i = 1; i < number1 ; i++) {
        if(number1 % i == 0) {
            totalNum1 = totalNum1 + i;
            
        }
    }
    for(let i = 1; i < number2; i++) {
        if(number2 % i == 0) {
            totalNum2 += i;
        }
    }
   
    if(totalNum1 == number2 && totalNum2 == number1) {
        
        console.log(number1 + " and " + number2 +" are friend numbers!")
    }
}

console.log("TASK 2 TEST")
friendNumber(220,284)