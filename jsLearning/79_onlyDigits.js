function containsOnlyDigits(text) {
    if (text.length === 0) {
        return false;
    }

    for (const char of text) {
        if (char < '0' || char > '9') {
            return false;
        }
    }

    return true;
}

console.log(containsOnlyDigits('12345'));
console.log(containsOnlyDigits('123a'));
/*
How it works:
1. An empty string is rejected.
2. Each character is compared with the digit range 0 to 9.
3. If any character is outside that range, the function returns false.
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
