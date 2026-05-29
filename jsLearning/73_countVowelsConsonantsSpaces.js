function countVowelsConsonantsSpaces(text) {
    const counts = {
        vowels: 0,
        consonants: 0,
        spaces: 0,
    };

    for (const char of text.toLowerCase()) {
        if (char === ' ') {
            counts.spaces++;
        } else if ('aeiou'.includes(char)) {
            counts.vowels++;
        } else if (char >= 'a' && char <= 'z') {
            counts.consonants++;
        }
    }

    return counts;
}

console.log(countVowelsConsonantsSpaces('Hello JavaScript World'));
