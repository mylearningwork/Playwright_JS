function firstNonRepeatingCharacter(text) {
    const frequency = {};

    for (const char of text) {
        frequency[char] = (frequency[char] || 0) + 1;
    }

    for (const char of text) {
        if (frequency[char] === 1) {
            return char;
        }
    }

    return null;
}

console.log(firstNonRepeatingCharacter('swiss'));
