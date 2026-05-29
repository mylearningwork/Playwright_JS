function removeDuplicatesSorted(numbers) {
    const result = [];

    for (const number of numbers) {
        if (result[result.length - 1] !== number) {
            result.push(number);
        }
    }

    return result;
}

console.log(removeDuplicatesSorted([1, 1, 2, 2, 3, 4, 4]));
/*
How it works:
1. The array is already sorted, so duplicate values are next to each other.
2. Each number is compared with the last value added to result.
3. Only new values are pushed into the result array.
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
