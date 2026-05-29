function characterFrequency(text) {
    const frequency = {};

    for (const char of text) {
        frequency[char] = (frequency[char] || 0) + 1;
    }

    return frequency;
}

console.log(characterFrequency('hello'));
