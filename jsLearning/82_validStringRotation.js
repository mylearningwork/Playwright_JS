function isValidRotation(first, second) {
    return first.length === second.length && (first + first).includes(second);
}

console.log(isValidRotation('abcd', 'cdab'));
console.log(isValidRotation('abcd', 'acbd'));
