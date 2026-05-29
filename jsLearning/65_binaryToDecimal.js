function binaryToDecimal(binaryNumber) {
    const binary = String(binaryNumber);
    let decimal = 0;

    for (let i = 0; i < binary.length; i++) {
        decimal = decimal * 2 + Number(binary[i]);
    }

    return decimal;
}

console.log(binaryToDecimal(11001));
/*
How it works:
1. The binary value is read from left to right.
2. Each step multiplies the current decimal value by 2.
3. The current binary digit is then added.
Detailed execution flow:
1. The sample console.log() at the bottom calls the function with demo input.
2. JavaScript enters the function and runs each statement from top to bottom.
3. Helper variables such as arrays, objects, counters, or Sets store intermediate values.
4. The return statement sends the final answer back to the caller.
5. console.log() prints that returned answer so you can verify the result.

Key JavaScript concepts used:
1. A for loop repeats logic for every index or value.

Try it yourself:
1. Change the input inside console.log().
2. Run this file with node to compare the new output.
*/
