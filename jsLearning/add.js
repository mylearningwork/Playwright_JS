function toNumber(value, argumentName) {
    const numberValue = Number(value);

    if (!Number.isFinite(numberValue)) {
        throw new TypeError(`${argumentName} must be a valid number`);
    }

    return numberValue;
}

function addNums(numOne, numTwo) {
    return toNumber(numOne, 'numOne') + toNumber(numTwo, 'numTwo');
}

console.log(addNums(1, 2));
console.log(addNums('10', '20'));

module.exports = addNums;
