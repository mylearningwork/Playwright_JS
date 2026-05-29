function toUpperCaseManual(text) {
    let result = '';

    for (const char of text) {
        const code = char.charCodeAt(0);
        result += code >= 97 && code <= 122 ? String.fromCharCode(code - 32) : char;
    }

    return result;
}

function toLowerCaseManual(text) {
    let result = '';

    for (const char of text) {
        const code = char.charCodeAt(0);
        result += code >= 65 && code <= 90 ? String.fromCharCode(code + 32) : char;
    }

    return result;
}

console.log(toUpperCaseManual('JavaScript'));
console.log(toLowerCaseManual('JavaScript'));
