function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(17));
/*
How it works:
1. Numbers less than or equal to 1 are not prime.
2. The loop checks possible divisors from 2 up to the square root.
3. If no divisor divides evenly, the number is prime.
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
