function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

// write a program to get the highest prime factor of a number
function highestPrimeFactor(number) {
    let highest = 1;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0 && isPrime(i)) {
            highest = i;
        }
    }
    return highest;
}


console.log(highestPrimeFactor(600851475143)); // 6857