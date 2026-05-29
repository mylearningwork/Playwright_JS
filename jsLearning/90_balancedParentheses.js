function isBalancedParentheses(expression) {
    const stack = [];
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '[',
    };

    for (const char of expression) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            if (stack.pop() !== pairs[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(isBalancedParentheses('(a + b) * [c - d]'));
console.log(isBalancedParentheses('(a + b]'));
/*
How it works:
1. Opening brackets are pushed into a stack.
2. Closing brackets must match the latest opening bracket.
3. The expression is balanced only if the stack is empty at the end.
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
