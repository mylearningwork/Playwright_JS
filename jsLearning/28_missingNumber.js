function missingNumber(numbers, n) {
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = numbers.reduce((total, number) => total + number, 0);

    return expectedSum - actualSum;
}

console.log(missingNumber([1, 2, 4, 5], 5));
/*
How it works:
1. The formula n * (n + 1) / 2 gives the expected sum from 1 to n.
2. The array values are added with reduce().
3. The missing number is expectedSum - actualSum.
Detailed execution flow:
1. The sample console.log() at the bottom calls the function with demo input.
2. JavaScript enters the function and runs each statement from top to bottom.
3. Helper variables such as arrays, objects, counters, or Sets store intermediate values.
4. The return statement sends the final answer back to the caller.
5. console.log() prints that returned answer so you can verify the result.

Key JavaScript concepts used:
1. reduce() combines array values into one final result, such as a sum or count.

Try it yourself:
1. Change the input inside console.log().
2. Run this file with node to compare the new output.
*/
