const numIsDivisibleBy = num => {
    for (let i = 1; i <= 20; i++) {
        if (num % i !== 0) {
            return false
        }
    }

    return true
}

const highestNumDivisibleBy = () => {
    let i = 1
    while (true) {
        if (numIsDivisibleBy(i)) {
            return i
        }
        i++
    }
}

console.log(highestNumDivisibleBy())