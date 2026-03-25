function longestBalanced(s: string): number {
    const n = s.length;
    let res = 0;

    for (let i = 0; i < n; i++) {
        const cnt: number[] = new Array(26).fill(0);

        for (let j = i; j < n; j++) {
            let flag = true;
            const c = s.charCodeAt(j) - 97;
            cnt[c]++;

            for (const x of cnt) {
                if (x > 0 && x !== cnt[c]) {
                    flag = false;
                    break;
                }
            }

            if (flag) {
                res = Math.max(res, j - i + 1);
            }
        }
    }
    return res;
}