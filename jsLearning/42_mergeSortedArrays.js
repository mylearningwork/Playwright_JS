function mergeSortedArrays(firstArray, secondArray) {
    const merged = [];
    let i = 0;
    let j = 0;

    while (i < firstArray.length && j < secondArray.length) {
        if (firstArray[i] <= secondArray[j]) {
            merged.push(firstArray[i]);
            i++;
        } else {
            merged.push(secondArray[j]);
            j++;
        }
    }

    return [...merged, ...firstArray.slice(i), ...secondArray.slice(j)];
}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));
/*
How it works:
1. Two pointers read both sorted arrays from left to right.
2. The smaller current value is added to merged.
3. After one array ends, the remaining values from the other array are appended.
Detailed execution flow:
1. The sample console.log() at the bottom calls the function with demo input.
2. JavaScript enters the function and runs each statement from top to bottom.
3. Helper variables such as arrays, objects, counters, or Sets store intermediate values.
4. The return statement sends the final answer back to the caller.
5. console.log() prints that returned answer so you can verify the result.

Key JavaScript concepts used:
1. slice() copies part of an array or string without changing the original.
2. A while loop repeats until its condition becomes false.

Try it yourself:
1. Change the input inside console.log().
2. Run this file with node to compare the new output.
*/
