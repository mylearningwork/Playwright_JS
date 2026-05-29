function intersection(firstArray, secondArray) {
    const secondSet = new Set(secondArray);
    return [...new Set(firstArray)].filter((item) => secondSet.has(item));
}

console.log(intersection([1, 2, 2, 3, 4], [2, 4, 6]));
/*
How it works:
1. Intersection means common values between two arrays.
   Example:
   firstArray  = [1, 2, 2, 3, 4]
   secondArray = [2, 4, 6]
   Common values are 2 and 4.

2. const secondSet = new Set(secondArray);
   This converts the second array into a Set:
   Set { 2, 4, 6 }
   Set lookup is simple because we can use secondSet.has(item)
   to check whether a value exists.

3. [...new Set(firstArray)]
   This removes duplicates from the first array.
   [1, 2, 2, 3, 4] becomes [1, 2, 3, 4].
   This prevents the final answer from returning duplicate 2s.

4. .filter((item) => secondSet.has(item))
   filter() checks every value from the unique first array.
   It keeps only the values that also exist in secondSet.

5. Final result:
   item = 1 -> secondSet.has(1) is false, so remove it.
   item = 2 -> secondSet.has(2) is true, so keep it.
   item = 3 -> secondSet.has(3) is false, so remove it.
   item = 4 -> secondSet.has(4) is true, so keep it.
   Output is [2, 4].
Detailed execution flow:
1. The sample console.log() at the bottom calls the function with demo input.
2. JavaScript enters the function and runs each statement from top to bottom.
3. Helper variables such as arrays, objects, counters, or Sets store intermediate values.
4. The return statement sends the final answer back to the caller.
5. console.log() prints that returned answer so you can verify the result.

Key JavaScript concepts used:
1. Set is used to keep unique values or check membership quickly.
2. filter() creates a new array with only the values that pass a condition.

Try it yourself:
1. Change the input inside console.log().
2. Run this file with node to compare the new output.
*/
