function kthSmallest(numbers, k) {
    const sorted = numbers.sort((first, second) => first - second);
    return sorted[k - 1];
}

console.log(kthSmallest([7, 10, 4, 3, 20, 15], 3));
/*
How it works:
1. The array copy is sorted from smallest to largest.
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
