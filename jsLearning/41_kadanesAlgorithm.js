function maxSubarraySum(numbers) {
    let currentSum = numbers[0];
    let bestSum = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        currentSum = Math.max(numbers[i], currentSum + numbers[i]);
        bestSum = Math.max(bestSum, currentSum);
    }

    return bestSum;
}

console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
/*
How it works:
1. currentSum stores the best subarray sum ending at the current position.
2. At each step, the algorithm decides whether to start fresh or extend the previous subarray.
3. bestSum stores the maximum sum found so far.
Detailed execution flow:
1. The sample console.log() at the bottom calls the function with demo input.
2. JavaScript enters the function and runs each statement from top to bottom.
3. Helper variables such as arrays, objects, counters, or Sets store intermediate values.
4. The return statement sends the final answer back to the caller.
5. console.log() prints that returned answer so you can verify the result.

Key JavaScript concepts used:
1. Math methods are used for numeric calculations.
2. A for loop repeats logic for every index or value.

Try it yourself:
1. Change the input inside console.log().
2. Run this file with node to compare the new output.
*/
