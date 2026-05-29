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
/*
How it works:
1. toNumber() converts input values into numbers.
2. Invalid numeric input throws a TypeError.
3. addNums() adds the converted numbers and exports the function for reuse.
Detailed execution flow:
1. The sample console.log() at the bottom calls the function with demo input.
2. JavaScript enters the function and runs each statement from top to bottom.
3. Helper variables such as arrays, objects, counters, or Sets store intermediate values.
4. The return statement sends the final answer back to the caller.
5. console.log() prints that returned answer so you can verify the result.

Key JavaScript concepts used:
1. module.exports makes functions available to other files.

Try it yourself:
1. Change the input inside console.log().
2. Run this file with node to compare the new output.
*/
