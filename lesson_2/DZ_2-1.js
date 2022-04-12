
function nextPrime_num(num){
    for (let i = 2; i <= num; i++){
        if (num % i === 0){
            console.log(i);
        }
    }
}

nextPrime_num(process.argv[2]);