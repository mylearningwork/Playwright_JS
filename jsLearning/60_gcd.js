function gcd(first, second) {
    let a = Math.abs(first);
    let b = Math.abs(second);

    while (b !== 0) {
        const remainder = a % b;
        a = b;
        b = remainder;
    }

    return a;
}

console.log(gcd(24, 36));
