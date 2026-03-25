function minAbsDiff(grid: number[][], k: number): number[][] {
    const m = grid.length,
        n = grid[0].length;
    const res: number[][] = Array.from({ length: m - k + 1 }, () =>
        Array(n - k + 1).fill(0),
    );
    for (let i = 0; i + k <= m; i++) {
        for (let j = 0; j + k <= n; j++) {
            let kgrid: number[] = [];
            for (let x = i; x < i + k; x++) {
                for (let y = j; y < j + k; y++) {
                    kgrid.push(grid[x][y]);
                }
            }
            let kmin = Number.MAX_SAFE_INTEGER;
            kgrid.sort((a, b) => a - b);
            for (let t = 1; t < kgrid.length; t++) {
                if (kgrid[t] === kgrid[t - 1]) {
                    continue;
                }
                kmin = Math.min(kmin, kgrid[t] - kgrid[t - 1]);
            }
            if (kmin !== Number.MAX_SAFE_INTEGER) {
                res[i][j] = kmin;
            }
        }
    }
    return res;
}