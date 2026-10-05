function scoreOfParentheses(s: string): number {
     const stack: number[] = [0];

    for (const c of s) {
        if (c === '(') {
            stack.push(0);
        }
        else {
            const value = Math.max(2 * stack.pop()!, 1);
            stack[stack.length - 1] += value;
        }
    }

    return stack.pop()!;
};