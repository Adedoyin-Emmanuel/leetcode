function constructProductMatrix(grid: number[][]): number[][] {
    const MOD: number = 12345;
    const n: number = grid.length,
        m: number = grid[0].length;
    const p: number[][] = Array.from({ length: n }, () => new Array(m).fill(0));

    let suffix: number = 1;
    for (let i = n - 1; i >= 0; i--) {
        for (let j = m - 1; j >= 0; j--) {
            p[i][j] = suffix;
            suffix = (suffix * grid[i][j]) % MOD;
        }
    }

    let prefix: number = 1;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            p[i][j] = (p[i][j] * prefix) % MOD;
            prefix = (prefix * grid[i][j]) % MOD;
        }
    }

    return p;
}