function calculatePower(base, exponent) {
    let result = 1;

    for (let i = 1; i <= Math.abs(exponent); i++) {
        result = result * base;
    }

    return exponent < 0 ? 1 / result : result;
}

console.log(calculatePower(2, 5));
