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

function generatePrimes(limit) {
    const primes = [];

    for (let number = 2; number <= limit; number++) {
        if (isPrime(number)) {
            primes.push(number);
        }
    }

    return primes;
}

console.log(generatePrimes(100));
/*
How it works:
1. isPrime() checks one number.
2. generatePrimes() loops from 2 to the given limit.
3. Each prime number is pushed into the primes array.
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
