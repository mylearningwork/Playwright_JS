function isNumberPalindrome(number) {
    const original = Math.abs(number).toString();
    const reversed = original.split('').reverse().join('');

    return original === reversed;
}

console.log(isNumberPalindrome(121));
console.log(isNumberPalindrome(123));
