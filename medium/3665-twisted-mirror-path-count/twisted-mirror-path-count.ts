function uniquePaths(grid: number[][]): number {
    const MOD: number = 1000000007;
    const m: number = grid.length;
    const n: number = grid[0].length;

    // f[i][j][0]: enter (i, j) by moving down
    // f[i][j][1]: enter (i, j) by moving right
    const f: number[][][] = Array.from({ length: m }, () =>
        Array.from({ length: n }, () => [0, 0]),
    );
    f[0][0][0] = 1;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i > 0) {
                if (grid[i - 1][j] === 0) {
                    f[i][j][0] = (f[i - 1][j][0] + f[i - 1][j][1]) % MOD;
                } else {
                    f[i][j][0] = f[i - 1][j][1];
                }
            }

            if (j > 0) {
                if (grid[i][j - 1] === 0) {
                    f[i][j][1] = (f[i][j - 1][0] + f[i][j - 1][1]) % MOD;
                } else {
                    f[i][j][1] = f[i][j - 1][0];
                }
            }
        }
    }

    return (f[m - 1][n - 1][0] + f[m - 1][n - 1][1]) % MOD;
}