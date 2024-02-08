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

function p7() {
    let primeCount = 0;
    let number = 1;
    let result = 0;

    while (primeCount < 10001) {
        number++;
        if (isPrime(number)) {
            primeCount++;
            result = number;
        }
    }

    return result;
}

console.log(p7());