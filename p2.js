const fibValLessThanFourMillion = () => {
    let a = 1
    let b = 2
    let sum = 0

    while (b < 4000000) {
        let c = b
        b = b + a
        a = c

        if (a % 2 === 0) {
            sum += a
        }
    }

    return sum
}

console.log(fibValLessThanFourMillion())