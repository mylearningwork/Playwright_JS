function sortZerosOnesTwos(numbers) {
    let zeros = 0;
    let ones = 0;
    let twos = 0;

    for (const number of numbers) {
        if (number === 0) zeros++;
        if (number === 1) ones++;
        if (number === 2) twos++;
    }

    return [
        ...Array(zeros).fill(0),
        ...Array(ones).fill(1),
        ...Array(twos).fill(2),
    ];
}

console.log(sortZerosOnesTwos([0, 2, 1, 2, 0, 1, 0]));
/*
How it works:
1. The loop counts how many 0s, 1s, and 2s exist.
2. Array(count).fill(value) creates repeated values.
3. The final array is built as all 0s, then 1s, then 2s.
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
