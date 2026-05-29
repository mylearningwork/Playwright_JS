function isEven(number) {
    return Math.floor(number / 2) * 2 === number;
}

console.log(isEven(10) ? 'Even' : 'Odd');
console.log(isEven(7) ? 'Even' : 'Odd');
