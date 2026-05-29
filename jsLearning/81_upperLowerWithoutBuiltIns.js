function toUpperCaseManual(text) {
    let result = '';

    for (const char of text) {
        const code = char.charCodeAt(0);
        result += code >= 97 && code <= 122 ? String.fromCharCode(code - 32) : char;
    }

    return result;
}

function toLowerCaseManual(text) {
    let result = '';

    for (const char of text) {
        const code = char.charCodeAt(0);
        result += code >= 65 && code <= 90 ? String.fromCharCode(code + 32) : char;
    }

    return result;
}

console.log(toUpperCaseManual('JavaScript'));
console.log(toLowerCaseManual('JavaScript'));
/*
How it works:
1. Each character code is checked with charCodeAt().
2. Lowercase letters are converted by subtracting 32.
3. Uppercase letters are converted by adding 32.
Detailed execution flow:
1. The sample console.log() at the bottom calls the function with demo input.
2. JavaScript enters the function and runs each statement from top to bottom.
3. Helper variables such as arrays, objects, counters, or Sets store intermediate values.
4. The return statement sends the final answer back to the caller.
5. console.log() prints that returned answer so you can verify the result.

Key JavaScript concepts used:
1. A for loop repeats logic for every index or value.
2. charCodeAt() reads the numeric character code for manual character conversion.
3. String.fromCharCode() converts a character code back into text.

Try it yourself:
1. Change the input inside console.log().
2. Run this file with node to compare the new output.
*/
