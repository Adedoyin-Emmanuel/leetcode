function maxProductPath(grid: number[][]): number {
    const MOD = 1000000007;
    const m = grid.length,
        n = grid[0].length;

    const maxgt: number[][] = new Array(m)
        .fill(0)
        .map(() => new Array(n).fill(0));
    const minlt: number[][] = new Array(m)
        .fill(0)
        .map(() => new Array(n).fill(0));

    maxgt[0][0] = minlt[0][0] = grid[0][0];
    for (let i = 1; i < n; i++) {
        maxgt[0][i] = minlt[0][i] = maxgt[0][i - 1] * grid[0][i];
    }
    for (let i = 1; i < m; i++) {
        maxgt[i][0] = minlt[i][0] = maxgt[i - 1][0] * grid[i][0];
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (grid[i][j] >= 0) {
                maxgt[i][j] =
                    Math.max(maxgt[i][j - 1], maxgt[i - 1][j]) * grid[i][j];
                minlt[i][j] =
                    Math.min(minlt[i][j - 1], minlt[i - 1][j]) * grid[i][j];
            } else {
                maxgt[i][j] =
                    Math.min(minlt[i][j - 1], minlt[i - 1][j]) * grid[i][j];
                minlt[i][j] =
                    Math.max(maxgt[i][j - 1], maxgt[i - 1][j]) * grid[i][j];
            }
        }
    }

    if (maxgt[m - 1][n - 1] < 0) {
        return -1;
    } else {
        return maxgt[m - 1][n - 1] % MOD;
    }
}