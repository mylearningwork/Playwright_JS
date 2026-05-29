function maxProductSubarray(numbers) {
    let maxEndingHere = numbers[0];
    let minEndingHere = numbers[0];
    let bestProduct = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        const number = numbers[i];

        if (number < 0) {
            [maxEndingHere, minEndingHere] = [minEndingHere, maxEndingHere];
        }

        maxEndingHere = Math.max(number, maxEndingHere * number);
        minEndingHere = Math.min(number, minEndingHere * number);
        bestProduct = Math.max(bestProduct, maxEndingHere);
    }

    return bestProduct;
}

console.log(maxProductSubarray([2, 3, -2, 4]));
