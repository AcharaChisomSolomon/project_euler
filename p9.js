function naturalNumbersProduct() {
    for (let c = 1000; c >= 1; c--) {
        for (let b = c - 1; b >= 1; b--) {
            for (let a = b - 1; a >= 1; a--) {
                if (a + b + c === 1000 && Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) {
                    return a * b * c;
                }
            }
        }
    }
}

console.log(naturalNumbersProduct());