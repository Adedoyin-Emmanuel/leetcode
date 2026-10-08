function removeOuterParentheses(s: string): string {
    let res = "";
    
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (c === ")") {
            stack.pop();
        }
        if (stack.length) {
            res += c;
        }
        if (c === "(") {
            stack.push(c);
        }
    }
    return res;
};