function missingNumber(numbers, n) {
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = numbers.reduce((total, number) => total + number, 0);

    return expectedSum - actualSum;
}

console.log(missingNumber([1, 2, 4, 5], 5));
