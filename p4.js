function isPalindrome(number) {
    const reverseNumber = parseInt(number.toString().split('').reverse().join(''));
    return number === reverseNumber;
}

function largestPalindromeProduct() {
    let largest = 0;

    for (let i = 999; i > 99; i--) {
        for (let j = 999; j > 99; j--) {
            const product = i * j;
            if (isPalindrome(product) && product > largest) {
                largest = product;
            }
        }
    }

    return largest;
}

console.log(largestPalindromeProduct()); // 906609