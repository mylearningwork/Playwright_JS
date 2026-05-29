function isArmstrongNumber(number) {
    const digits = Math.abs(number).toString().split('');
    const power = digits.length;
    const sum = digits.reduce((total, digit) => total + Number(digit) ** power, 0);

    return sum === number;
}

console.log(isArmstrongNumber(153));
console.log(isArmstrongNumber(123));
