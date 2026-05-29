function extractNumbersAndSum(text) {
    const numbers = text.match(/\d+/g) || [];
    return numbers.reduce((total, number) => total + Number(number), 0);
}

console.log(extractNumbersAndSum('abc12def3gh45'));
