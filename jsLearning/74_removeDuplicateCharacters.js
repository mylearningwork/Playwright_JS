function removeDuplicateCharacters(text) {
    return [...new Set(text)].join('');
}

console.log(removeDuplicateCharacters('programming'));
