
const nums = [3, 4, 5, 6, 4, 5, 6, 7, 6];

const frequency = {};

for (const num of nums) {
    frequency[num] = (frequency[num] || 0) + 1;
}

console.log(frequency);


function countChar(chars, charToSearch) {

    let count=0
    for(let i=0;i<chars.length;i ++) {

        if((chars.toLowerCase()[i]) === charToSearch) {
            count++
        }

    }

    return count;

}

console.log(countChar("AAAAAAAAAalokraiAlok","a"))
/*
How it works:
1. An object stores the count for each number.
2. For every number, the old count is read or 0 is used.
3. The count is increased by 1.
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
