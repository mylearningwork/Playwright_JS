function alternatePositiveNegative(numbers) {
    const positives = numbers.filter((number) => number >= 0);
    const negatives = numbers.filter((number) => number < 0);
    const result = [];
    const maxLength = Math.max(positives.length, negatives.length);

    for (let i = 0; i < maxLength; i++) {
        if (i < positives.length) result.push(positives[i]);
        if (i < negatives.length) result.push(negatives[i]);
    }

    return result;
}

console.log(alternatePositiveNegative([1, 2, 3, -4, -1, 4, -6]));
/*
How it works:
1. Positive and negative numbers are separated into two arrays.
2. The loop adds one positive and one negative value alternately.
3. Any remaining values are added when one group is longer.
Detailed execution flow:
1. The sample console.log() at the bottom calls the function with demo input.
2. JavaScript enters the function and runs each statement from top to bottom.
3. Helper variables such as arrays, objects, counters, or Sets store intermediate values.
4. The return statement sends the final answer back to the caller.
5. console.log() prints that returned answer so you can verify the result.

Key JavaScript concepts used:
1. filter() creates a new array with only the values that pass a condition.
2. Math methods are used for numeric calculations.
3. A for loop repeats logic for every index or value.

Try it yourself:
1. Change the input inside console.log().
2. Run this file with node to compare the new output.
*/
