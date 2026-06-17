function processStr(s: string, k: number): string {
    let len = 0;
    
    for (const c of s) {
        if (c === "*") {
            if (len > 0) {
                len--;
            }
        } else if (c === "#") {
            len *= 2;
        } else if (c === "%") {
        } else {
            len++;
        }
    }
    if (k + 1 > len) {
        return ".";
    }
    for (let i = s.length - 1; i >= 0; i--) {
        const c = s[i];
        if (c === "*") {
            len++;
        } else if (c === "#") {
            if (k + 1 > (len + 1) / 2) {
                k -= Math.floor(len / 2);
            }
            len = Math.floor((len + 1) / 2);
        } else if (c === "%") {
            k = len - k - 1;
        } else {
            if (k + 1 === len) {
                return c;
            }
            len--;
        }
    }
    return ".";
}