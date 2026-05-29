function extractNumbersAndSum(text) {
    const numbers = text.match(/\d+/g) || [];
    return numbers.reduce((total, number) => total + Number(number), 0);
}

console.log(extractNumbersAndSum('abc12def3gh45'));
/*
How it works:
1. The regular expression finds one or more digits together.
2. If no numbers are found, an empty array is used.
3. Each extracted number is converted and added with reduce().
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
