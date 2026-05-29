function isStringPalindrome(text) {
    const cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}

console.log(isStringPalindrome('Madam'));
console.log(isStringPalindrome('hello'));
