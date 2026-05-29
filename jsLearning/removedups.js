
const arr = [1, 2, 3, 4, 5,5,6 ,6];


console.log([...new Set(arr)]);

let uniqueArr=[]

for(let item of arr){

    if(!uniqueArr.includes(item)){
        uniqueArr.push(item)
    }

}

console.log(uniqueArr);
/*
How it works:
1. A Set keeps only unique values.
2. The spread operator converts the Set back to an array.
3. The result is logged without duplicate items.
Detailed execution flow:
1. The sample console.log() at the bottom calls the function with demo input.
2. JavaScript enters the function and runs each statement from top to bottom.
3. Helper variables such as arrays, objects, counters, or Sets store intermediate values.
4. The return statement sends the final answer back to the caller.
5. console.log() prints that returned answer so you can verify the result.

Key JavaScript concepts used:
1. Set is used to keep unique values or check membership quickly.
2. includes() checks whether a value or substring exists.

Try it yourself:
1. Change the input inside console.log().
2. Run this file with node to compare the new output.
*/
