
const numbs= [1,2,3,5,7,8]

console.log(numbs);

console.log("Squared : " + numbs.map((num)=>num*2))

console.log("Divided : " + numbs.map((num)=>num/2))
/*
How it works:
1. map() creates a new array from every number.
2. The first map doubles each value.
3. The second map divides each value by 2.
Detailed execution flow:
1. The sample console.log() at the bottom calls the function with demo input.
2. JavaScript enters the function and runs each statement from top to bottom.
3. Helper variables such as arrays, objects, counters, or Sets store intermediate values.
4. The return statement sends the final answer back to the caller.
5. console.log() prints that returned answer so you can verify the result.

Key JavaScript concepts used:
1. map() creates a new array by transforming every item.

Try it yourself:
1. Change the input inside console.log().
2. Run this file with node to compare the new output.
*/
