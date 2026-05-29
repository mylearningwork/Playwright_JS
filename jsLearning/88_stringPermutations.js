function permutations(text) {
    if (text.length <= 1) {
        return [text];
    }

    const result = [];

    for (let i = 0; i < text.length; i++) {
        const currentChar = text[i];
        const remaining = text.slice(0, i) + text.slice(i + 1);

        for (const permutation of permutations(remaining)) {
            result.push(currentChar + permutation);
        }
    }

    return result;
}

console.log(permutations('abc'));
