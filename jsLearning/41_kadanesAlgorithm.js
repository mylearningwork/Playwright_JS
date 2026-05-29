function maxSubarraySum(numbers) {
    let currentSum = numbers[0];
    let bestSum = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        currentSum = Math.max(numbers[i], currentSum + numbers[i]);
        bestSum = Math.max(bestSum, currentSum);
    }

    return bestSum;
}

console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
