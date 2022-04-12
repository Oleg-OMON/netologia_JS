
function nextPrime(num){
    for (let i = 2; i <= num; i++){
        if (num % i === 0){
            console.log(i);
        }
    }
}

nextPrime(process.argv[2]);