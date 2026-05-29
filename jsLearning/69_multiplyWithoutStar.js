function multiply(first, second) {
    let result = 0;
    const isNegative = (first < 0) !== (second < 0);
    const count = Math.abs(second);
    const value = Math.abs(first);

    for (let i = 1; i <= count; i++) {
        result += value;
    }

    return isNegative ? -result : result;
}

console.log(multiply(6, 4));
console.log(multiply(-6, 4));
