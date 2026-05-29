function pairsWithTargetSum(numbers, target) {
    const seen = new Set();
    const pairs = [];

    for (const number of numbers) {
        const required = target - number;

        if (seen.has(required)) {
            pairs.push([required, number]);
        }

        seen.add(number);
    }

    return pairs;
}

console.log(pairsWithTargetSum([2, 4, 3, 5, 7, 8], 10));
