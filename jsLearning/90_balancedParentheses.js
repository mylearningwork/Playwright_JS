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
