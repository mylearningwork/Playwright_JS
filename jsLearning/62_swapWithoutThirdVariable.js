function swapNumbers(first, second) {
    first = first + second;
    second = first - second;
    first = first - second;

    return [first, second];
}

console.log(swapNumbers(10, 20));
/*
How it works:
1. The first value stores the sum of both numbers.
2. The second value is recovered by subtracting the old second from the sum.
3. The first value is recovered by subtracting the new second.
Detailed execution flow:
1. The sample console.log() at the bottom calls the function with demo input.
2. JavaScript enters the function and runs each statement from top to bottom.
3. Helper variables such as arrays, objects, counters, or Sets store intermediate values.
4. The return statement sends the final answer back to the caller.
5. console.log() prints that returned answer so you can verify the result.

Key JavaScript concepts used:
1. The function receives input, processes it step by step, and returns the final answer.

Try it yourself:
1. Change the input inside console.log().
2. Run this file with node to compare the new output.
*/
