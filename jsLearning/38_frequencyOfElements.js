function frequencyOfElements(items) {
    const frequency = {};

    for (const item of items) {
        frequency[item] = (frequency[item] || 0) + 1;
    }

    return frequency;
}

console.log(frequencyOfElements([1, 2, 2, 3, 3, 3]));
/*
How it works:
1. An empty object stores each value as a key.
2. For every item, the count starts at 0 if it does not exist.
3. The count is increased by 1 for each occurrence.
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
