function isPerfectSquare(number) {
    if (number < 0) {
        return false;
    }

    const root = Math.sqrt(number);
    return Number.isInteger(root);
}

console.log(isPerfectSquare(49));
console.log(isPerfectSquare(50));
