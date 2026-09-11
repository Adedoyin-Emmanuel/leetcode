function totalNumbers(digits: number[]): number {
    const n = digits.length;
    const vis: boolean[] = new Array(1000).fill(false);
    let ans: number = 0;

    for (let i = 0; i < n; ++i) {
        if (digits[i] === 0) {
            continue;
        }
        for (let j = 0; j < n; ++j) {
            if (j === i) {
                continue;
            }
            for (let k = 0; k < n; ++k) {
                if (k === i || k === j || digits[k] % 2 !== 0) {
                    continue;
                }
                const x = digits[i] * 100 + digits[j] * 10 + digits[k];
                if (!vis[x]) {
                    vis[x] = true;
                    ++ans;
                }
            }
        }
    }

    return ans;
}