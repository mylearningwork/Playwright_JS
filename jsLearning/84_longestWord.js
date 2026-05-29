function longestWord(sentence) {
    const words = sentence.split(/\s+/);
    let longest = '';

    for (const word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
}

console.log(longestWord('JavaScript makes automation powerful'));
