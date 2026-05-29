function isSubstring(text, searchText) {
    return text.includes(searchText);
}

console.log(isSubstring('JavaScript automation', 'script'));
console.log(isSubstring('JavaScript automation', 'Script'));
