function binaryToDecimal(binaryNumber) {
    const binary = String(binaryNumber);
    let decimal = 0;

    for (let i = 0; i < binary.length; i++) {
        decimal = decimal * 2 + Number(binary[i]);
    }

    return decimal;
}

console.log(binaryToDecimal(11001));
