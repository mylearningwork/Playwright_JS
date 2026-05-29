function maxProductSubarray(numbers) {
    let maxEndingHere = numbers[0];
    let minEndingHere = numbers[0];
    let bestProduct = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        const number = numbers[i];

        if (number < 0) {
            [maxEndingHere, minEndingHere] = [minEndingHere, maxEndingHere];
        }

        maxEndingHere = Math.max(number, maxEndingHere * number);
        minEndingHere = Math.min(number, minEndingHere * number);
        bestProduct = Math.max(bestProduct, maxEndingHere);
    }

    return bestProduct;
}

console.log(maxProductSubarray([2, 3, -2, 4]));
/*
How it works:
1. Both max and min products are tracked because a negative number can flip them.
2. When the current number is negative, max and min are swapped.
3. bestProduct stores the highest product found so far.
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
