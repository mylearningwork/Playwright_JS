function removeSpecialCharacters(text) {
    return text.replace(/[^a-zA-Z0-9 ]/g, '');
}

console.log(removeSpecialCharacters('Hello@ JavaScript# 123!'));
