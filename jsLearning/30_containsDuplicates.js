function containsDuplicates(numbers) {
    return new Set(numbers).size !== numbers.length;
}

console.log(containsDuplicates([1, 2, 3, 2]));
console.log(containsDuplicates([1, 2, 3, 4]));
/*
How it works:
1. A Set stores only unique values.
2. If Set size is smaller than the original array length, a duplicate exists.
3. The function returns true or false based on that comparison.
Detailed execution flow:
1. The sample console.log() at the bottom calls the function with demo input.
2. JavaScript enters the function and runs each statement from top to bottom.
3. Helper variables such as arrays, objects, counters, or Sets store intermediate values.
4. The return statement sends the final answer back to the caller.
5. console.log() prints that returned answer so you can verify the result.

Key JavaScript concepts used:
1. Set is used to keep unique values or check membership quickly.

Try it yourself:
1. Change the input inside console.log().
2. Run this file with node to compare the new output.
*/
