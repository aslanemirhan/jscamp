


//Prime Numbers up to 1000


let primeNumbers = () =>{
  
    for(let i=0; i < 100; i++){
        let prime = true
        if(i > 1){
            if(i == 2){
                console.log( i + " : Asal sayıdır")
            }
            else{
                for(let j=2; j < i; j++){
                    if(i % j == 0){
                        prime = false
                    }
                }
                if(prime){
                    console.log(i + " : Asal sayıdır")
                }
            }
        }
    }
}
primeNumbers()