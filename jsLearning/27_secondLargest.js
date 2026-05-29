function secondLargest(numbers) {
    const uniqueSorted = [...new Set(numbers)].sort((first, second) => second - first);
    return uniqueSorted[1];
}

console.log(secondLargest([10, 5, 20, 20, 8]));
/*
How it works:
1. new Set(numbers) removes duplicate values.
2. The unique values are sorted from highest to lowest.
3. The element at index 1 is the second largest value.
Detailed execution flow:
1. The sample console.log() at the bottom calls the function with demo input.
2. JavaScript enters the function and runs each statement from top to bottom.
3. Helper variables such as arrays, objects, counters, or Sets store intermediate values.
4. The return statement sends the final answer back to the caller.
5. console.log() prints that returned answer so you can verify the result.

Key JavaScript concepts used:
1. Set is used to keep unique values or check membership quickly.
2. sort() arranges array values based on the comparison logic.

Try it yourself:
1. Change the input inside console.log().
2. Run this file with node to compare the new output.
*/
