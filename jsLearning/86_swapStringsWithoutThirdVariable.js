function swapStrings(first, second) {
    first = first + second;
    second = first.slice(0, first.length - second.length);
    first = first.slice(second.length);

    return [first, second];
}

console.log(swapStrings('hello', 'world'));
/*
How it works:
1. Both strings are joined into the first variable.
2. The original first string is extracted into second.
3. The remaining part becomes the new first string.
Detailed execution flow:
1. The sample console.log() at the bottom calls the function with demo input.
2. JavaScript enters the function and runs each statement from top to bottom.
3. Helper variables such as arrays, objects, counters, or Sets store intermediate values.
4. The return statement sends the final answer back to the caller.
5. console.log() prints that returned answer so you can verify the result.

Key JavaScript concepts used:
1. slice() copies part of an array or string without changing the original.

Try it yourself:
1. Change the input inside console.log().
2. Run this file with node to compare the new output.
*/
