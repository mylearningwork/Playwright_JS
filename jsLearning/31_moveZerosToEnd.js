function moveZerosToEnd(numbers) {
    const nonZeros = numbers.filter((number) => number !== 0);
    const zeros = numbers.filter((number) => number === 0);

    return [...nonZeros, ...zeros];
}

console.log(moveZerosToEnd([0, 1, 0, 3, 12]));
