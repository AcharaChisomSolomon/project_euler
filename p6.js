const sumSquareDiff = num => {
    let sumOfSquares = 0
    let sumOfNums = 0

    for (let i = 1; i <= num; i++) {
        sumOfSquares += (i * i)
        sumOfNums += i
    }

    return sumOfNums * sumOfNums - sumOfSquares;
}

console.log(sumSquareDiff(100))