function alternatePositiveNegative(numbers) {
    const positives = numbers.filter((number) => number >= 0);
    const negatives = numbers.filter((number) => number < 0);
    const result = [];
    const maxLength = Math.max(positives.length, negatives.length);

    for (let i = 0; i < maxLength; i++) {
        if (i < positives.length) result.push(positives[i]);
        if (i < negatives.length) result.push(negatives[i]);
    }

    return result;
}

console.log(alternatePositiveNegative([1, 2, 3, -4, -1, 4, -6]));
