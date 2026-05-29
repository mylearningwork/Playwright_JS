function subarrayWithGivenSum(numbers, target) {
    let start = 0;
    let currentSum = 0;

    for (let end = 0; end < numbers.length; end++) {
        currentSum += numbers[end];

        while (currentSum > target && start <= end) {
            currentSum -= numbers[start];
            start++;
        }

        if (currentSum === target) {
            return numbers.slice(start, end + 1);
        }
    }

    return [];
}

console.log(subarrayWithGivenSum([1, 4, 20, 3, 10, 5], 33));
/*
How it works:
1. start and end create a sliding window.
2. The end pointer expands the window by adding values.
3. If the sum becomes too large, the start pointer shrinks the window.
Detailed execution flow:
1. The sample console.log() at the bottom calls the function with demo input.
2. JavaScript enters the function and runs each statement from top to bottom.
3. Helper variables such as arrays, objects, counters, or Sets store intermediate values.
4. The return statement sends the final answer back to the caller.
5. console.log() prints that returned answer so you can verify the result.

Key JavaScript concepts used:
1. slice() copies part of an array or string without changing the original.
2. A for loop repeats logic for every index or value.
3. A while loop repeats until its condition becomes false.

Try it yourself:
1. Change the input inside console.log().
2. Run this file with node to compare the new output.
*/
