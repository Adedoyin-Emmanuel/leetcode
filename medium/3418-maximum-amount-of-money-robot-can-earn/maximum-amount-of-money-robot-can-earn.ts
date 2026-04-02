function maximumAmount(coins: number[][]): number {
    const m = coins.length,
        n = coins[0].length;
    const memo: number[][][] = new Array(m);

    for (let i = 0; i < m; i++) {
        memo[i] = new Array(n);
        for (let j = 0; j < n; j++) {
            memo[i][j] = new Array(3).fill(-Infinity);
        }
    }

    const dfs = (i: number, j: number, k: number): number => {
        if (i < 0 || j < 0) {
            return -Infinity;
        }

        const x = coins[i][j];
        if (i === 0 && j === 0) {
            return k > 0 ? Math.max(0, x) : x;
        }

        if (memo[i][j][k] !== -Infinity) {
            return memo[i][j][k];
        }

        let res = Math.max(dfs(i - 1, j, k), dfs(i, j - 1, k)) + x;

        if (k > 0 && x < 0) {
            res = Math.max(res, dfs(i - 1, j, k - 1), dfs(i, j - 1, k - 1));
        }

        memo[i][j][k] = res;
        return res;
    };

    return dfs(m - 1, n - 1, 2);
}