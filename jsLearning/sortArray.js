const array = [11, 2, 32, 4, 5];

function sortArray(array) {

    return array.sort((a, b) => a - b, 0)
}

console.log(sortArray(array));

function newSort(array) {

    for (let i = 0; i < array.length; i++) {

        for (let j = i + 1; j < array.length; j++) {

            if (array[i] > array[j]) {  //   if (array[i] < array[j]) { reverse order

                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;


            }

        }


    }
    return array;

}
console.log(newSort([3331, 20, 3, 0,499, 5]));
/*
How it works:
1. sort() arranges array values.
2. For numbers, a compare function is usually needed for correct numeric order.
3. The sorted result is printed to the console.
Detailed execution flow:
1. The sample console.log() at the bottom calls the function with demo input.
2. JavaScript enters the function and runs each statement from top to bottom.
3. Helper variables such as arrays, objects, counters, or Sets store intermediate values.
4. The return statement sends the final answer back to the caller.
5. console.log() prints that returned answer so you can verify the result.

Key JavaScript concepts used:
1. sort() arranges array values based on the comparison logic.
2. A for loop repeats logic for every index or value.

Try it yourself:
1. Change the input inside console.log().
2. Run this file with node to compare the new output.
*/
