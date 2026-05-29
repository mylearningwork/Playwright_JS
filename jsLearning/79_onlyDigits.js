function containsOnlyDigits(text) {
    if (text.length === 0) {
        return false;
    }

    for (const char of text) {
        if (char < '0' || char > '9') {
            return false;
        }
    }

    return true;
}

console.log(containsOnlyDigits('12345'));
console.log(containsOnlyDigits('123a'));
