function decimalToBinary(number) {
    if (number === 0) {
        return '0';
    }

    let quotient = Math.abs(number);
    let binary = '';

    while (quotient > 0) {
        binary = (quotient % 2) + binary;
        quotient = Math.floor(quotient / 2);
    }

    return number < 0 ? `-${binary}` : binary;
}

console.log(decimalToBinary(25));
