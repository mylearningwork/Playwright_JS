function leadersInArray(numbers) {
    const leaders = [];
    let maxFromRight = -Infinity;

    for (let i = numbers.length - 1; i >= 0; i--) {
        if (numbers[i] > maxFromRight) {
            leaders.push(numbers[i]);
            maxFromRight = numbers[i];
        }
    }

    return leaders.reverse();
}

console.log(leadersInArray([16, 17, 4, 3, 5, 2]));
/*
How it works:
1. The loop starts from the right side of the array.
2. maxFromRight tracks the greatest value seen so far on the right.
3. A number is a leader if it is greater than maxFromRight.
Detailed execution flow:
1. The sample console.log() at the bottom calls the function with demo input.
2. JavaScript enters the function and runs each statement from top to bottom.
3. Helper variables such as arrays, objects, counters, or Sets store intermediate values.
4. The return statement sends the final answer back to the caller.
5. console.log() prints that returned answer so you can verify the result.

Key JavaScript concepts used:
1. reverse() changes the order of items from last to first.
2. A for loop repeats logic for every index or value.

Try it yourself:
1. Change the input inside console.log().
2. Run this file with node to compare the new output.
*/
