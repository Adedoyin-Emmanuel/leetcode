function maximumLengthSubstring(s: string): number {
    const n: number = s.length;
    let res: number = 0;
    for (let left = 0; left < n; left++) {
        const count: number[] = new Array(26).fill(0);
        for (let right = left; right < n; right++) {
            const ch: number = s.charCodeAt(right) - 97;
            count[ch]++;
            if (count[ch] > 2) {
                break;
            }
            res = Math.max(res, right - left + 1);
        }
    }
    return res;
}