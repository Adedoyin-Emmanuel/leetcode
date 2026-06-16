function processStr(s: string): string {
    const result: string[] = [];

    for (const ch of s) {
        if (ch === "*") {
            if (result.length) result.pop();
        } else if (ch === "#") {
            result.push(...result.slice());
        } else if (ch === "%") {
            result.reverse();
        } else {
            result.push(ch);
        }
    }
    
    return result.join("");
};