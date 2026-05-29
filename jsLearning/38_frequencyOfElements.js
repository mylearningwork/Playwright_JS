function frequencyOfElements(items) {
    const frequency = {};

    for (const item of items) {
        frequency[item] = (frequency[item] || 0) + 1;
    }

    return frequency;
}

console.log(frequencyOfElements([1, 2, 2, 3, 3, 3]));
