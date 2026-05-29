function mostFrequentCharacter(text) {
    const frequency = {};
    let bestChar = null;
    let bestCount = 0;

    for (const char of text) {
        frequency[char] = (frequency[char] || 0) + 1;

        if (frequency[char] > bestCount) {
            bestChar = char;
            bestCount = frequency[char];
        }
    }

    return {
        character: bestChar,
        count: bestCount,
    };
}

console.log(mostFrequentCharacter('javascript'));
