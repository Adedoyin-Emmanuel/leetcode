function countSubmatrices(grid: number[][], k: number): number {
    const n = grid.length;
    const m = grid[0].length;
    const cols: number[] = new Array(m).fill(0);
    let result = 0;

    for (let i = 0; i < n; i++) {
        let rows: number = 0;
        for (let j = 0; j < m; j++) {
            cols[j] += grid[i][j];
            rows += cols[j];
            if (rows <= k) {
                result++;
            }
        }
    }

    return result;
}