function rotateArray(numbers, positions) {
    const rotateBy = positions % numbers.length;
    return [...numbers.slice(-rotateBy), ...numbers.slice(0, -rotateBy)];
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));
