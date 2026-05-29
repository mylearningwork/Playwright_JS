function sumOfDigits(number) {
    return Math.abs(number)
        .toString()
        .split('')
        .reduce((total, digit) => total + Number(digit), 0);
}

console.log(sumOfDigits(12345));
