function numberOfSubmatrices(grid: string[][]): number {
    const n = grid.length;
    const m = grid[0].length;
    let ans = 0;

    const sum: number[][][] = Array(n + 1)
        .fill(null)
        .map(() =>
            Array(m + 1)
                .fill(null)
                .map(() => [0, 0]),
        );

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === "X") {
                sum[i + 1][j + 1][0] =
                    sum[i + 1][j][0] + sum[i][j + 1][0] - sum[i][j][0] + 1;
                sum[i + 1][j + 1][1] = 1;
            } else if (grid[i][j] === "Y") {
                sum[i + 1][j + 1][0] =
                    sum[i + 1][j][0] + sum[i][j + 1][0] - sum[i][j][0] - 1;
                sum[i + 1][j + 1][1] =
                    sum[i + 1][j][1] | sum[i][j + 1][1] ? 1 : 0;
            } else {
                sum[i + 1][j + 1][0] =
                    sum[i + 1][j][0] + sum[i][j + 1][0] - sum[i][j][0];
                sum[i + 1][j + 1][1] =
                    sum[i + 1][j][1] | sum[i][j + 1][1] ? 1 : 0;
            }

            if (sum[i + 1][j + 1][0] === 0 && sum[i + 1][j + 1][1] === 1) {
                ans++;
            }
        }
    }
    return ans;
}