function majorityElement(numbers) {
    const frequency = {};

    for (const number of numbers) {
        frequency[number] = (frequency[number] || 0) + 1;

        if (frequency[number] > numbers.length / 2) {
            return number;
        }
    }

    return null;
}

console.log(majorityElement([2, 2, 1, 2, 3, 2, 2]));
