function reverseNumber(number) {
    const sign = number < 0 ? -1 : 1;
    const reversed = Math.abs(number).toString().split('').reverse().join('');

    return sign * Number(reversed);
}

console.log(reverseNumber(12345));
