function fibonacciSeries(terms) {
    const series = [];

    for (let i = 0; i < terms; i++) {
        if (i < 2) {
            series.push(i);
        } else {
            series.push(series[i - 1] + series[i - 2]);
        }
    }

    return series;
}

console.log(fibonacciSeries(10));
/*
How it works:
1. The first two Fibonacci values are 0 and 1.
2. Every next value is the sum of the previous two values.
3. The loop continues until the requested number of terms is created.
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
