function numDistinct(s: string, t: string): number {
    const n = s.length;
    const m = t.length;
    const memo = new Int32Array((n + 1) * (m + 1));
    memo.fill(-1);

    function idx(i: number, j: number): number {
        return i * (m + 1) + j;
    }

    function dp(sIndex: number, tIndex: number): number {
        if (tIndex == m) return 1;
        if (sIndex == n) return 0;
        if (n - sIndex < m - tIndex) return 0;

        const k = idx(sIndex, tIndex);

        if (memo[k] !== -1) return memo[k];
        let res;

        if (s[sIndex] === t[tIndex]) {
            res = dp(sIndex + 1, tIndex + 1) + dp(sIndex + 1, tIndex);
        } else {
            res = dp(sIndex + 1, tIndex);
        }

        memo[k] = res;
        return res;
    }

    return dp(0, 0);
};