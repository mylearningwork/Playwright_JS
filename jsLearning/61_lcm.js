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

function lcm(first, second) {
    if (first === 0 || second === 0) {
        return 0;
    }

    return Math.abs(first * second) / gcd(first, second);
}

console.log(lcm(12, 18));
