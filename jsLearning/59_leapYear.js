function isLeapYear(year) {
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

console.log(isLeapYear(2024));
console.log(isLeapYear(2025));
/*
How it works:
1. Years divisible by 400 are leap years.
2. Years divisible by 100 but not 400 are not leap years.
3. Other years divisible by 4 are leap years.
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
