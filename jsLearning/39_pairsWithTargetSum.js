function pairsWithTargetSum(numbers, target) {
    const seen = new Set();
    const pairs = [];

    for (const number of numbers) {
        const required = target - number;

        if (seen.has(required)) {
            pairs.push([required, number]);
        }

        seen.add(number);
    }

    return pairs;
}

console.log(pairsWithTargetSum([2, 4, 3, 5, 7, 8], 10));
/*
How it works:
1. seen stores numbers already visited.
2. For each number, target - number gives the required partner.
3. If the partner was already seen, the pair is added to the result.
Detailed execution flow:
1. The sample console.log() at the bottom calls the function with demo input.
2. JavaScript enters the function and runs each statement from top to bottom.
3. Helper variables such as arrays, objects, counters, or Sets store intermediate values.
4. The return statement sends the final answer back to the caller.
5. console.log() prints that returned answer so you can verify the result.

Key JavaScript concepts used:
1. Set is used to keep unique values or check membership quickly.
2. A for loop repeats logic for every index or value.

Try it yourself:
1. Change the input inside console.log().
2. Run this file with node to compare the new output.
*/
