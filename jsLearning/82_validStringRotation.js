function isValidRotation(first, second) {
    return first.length === second.length && (first + first).includes(second);
}

console.log(isValidRotation('abcd', 'cdab'));
console.log(isValidRotation('abcd', 'acbd'));
/*
How it works:
1. Both strings must have the same length.
2. A valid rotation will appear inside first + first.
3. includes() checks whether the second string exists in that doubled string.
Detailed execution flow:
1. The sample console.log() at the bottom calls the function with demo input.
2. JavaScript enters the function and runs each statement from top to bottom.
3. Helper variables such as arrays, objects, counters, or Sets store intermediate values.
4. The return statement sends the final answer back to the caller.
5. console.log() prints that returned answer so you can verify the result.

Key JavaScript concepts used:
1. includes() checks whether a value or substring exists.

Try it yourself:
1. Change the input inside console.log().
2. Run this file with node to compare the new output.
*/
