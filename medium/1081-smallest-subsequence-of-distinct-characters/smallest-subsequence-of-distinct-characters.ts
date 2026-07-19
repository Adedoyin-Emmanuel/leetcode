function smallestSubsequence(s: string): string {
    const vis: number[] = new Array(26).fill(0);
    const num: number[] = new Array(26).fill(0);

    for (const ch of s) {
        num[ch.charCodeAt(0) - 97]++;
    }
    const stk: string[] = [];

    for (const ch of s) {
        const idx = ch.charCodeAt(0) - 97;
        if (!vis[idx]) {
            while (stk.length > 0 && stk[stk.length - 1] > ch) {
                const topIdx = stk[stk.length - 1].charCodeAt(0) - 97;
                if (num[topIdx] > 0) {
                    vis[topIdx] = 0;
                    stk.pop();
                } else {
                    break;
                }
            }
            vis[idx] = 1;
            stk.push(ch);
        }
        num[idx]--;
    }

    return stk.join("");
}