function countSpecificCharacter(text, target) {
    let count = 0;

    for (const char of text) {
        if (char === target) {
            count++;
        }
    }

    return count;
}

console.log(countSpecificCharacter('javascript', 'a'));
