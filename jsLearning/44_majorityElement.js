function majorityElement(numbers) {
    const frequency = {};

    for (const number of numbers) {
        frequency[number] = (frequency[number] || 0) + 1;

        if (frequency[number] > numbers.length / 2) {
            return number;
        }
    }

    return null;
}

console.log(majorityElement([2, 2, 1, 2, 3, 2, 2]));
/*
How it works:
1. The object stores how many times each number appears.
2. After increasing a count, it checks whether that count is more than n / 2.
3. The first value crossing that limit is returned as the majority element.
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
