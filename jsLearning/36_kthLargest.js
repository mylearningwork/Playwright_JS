function kthLargest(numbers, k) {
    const sorted = [...numbers].sort((first, second) => second - first);
    return sorted[k - 1];
}

console.log(kthLargest([7, 10, 4, 3, 20, 15], 3));
/*
How it works:
1. The array copy is sorted from largest to smallest.
2. k is 1-based, so index k - 1 gives the required element.
3. The original array is not changed because spread creates a copy.
Detailed execution flow:
1. The sample console.log() at the bottom calls the function with demo input.
2. JavaScript enters the function and runs each statement from top to bottom.
3. Helper variables such as arrays, objects, counters, or Sets store intermediate values.
4. The return statement sends the final answer back to the caller.
5. console.log() prints that returned answer so you can verify the result.

Key JavaScript concepts used:
1. sort() arranges array values based on the comparison logic.

Try it yourself:
1. Change the input inside console.log().
2. Run this file with node to compare the new output.
*/
