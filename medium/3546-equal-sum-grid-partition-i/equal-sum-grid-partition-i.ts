function canPartitionGrid(grid: number[][]): boolean {
    const m = grid.length;
    const n = grid[0].length;

    let total = 0;
    const rowSums = new Array(m).fill(0);
    const colSums = new Array(n).fill(0);

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            const val = grid[r][c];
            total += val;
            rowSums[r] += val;
            colSums[c] += val;
        }
    }

    if (total % 2 !== 0) return false;

    const target = total / 2;

    let curr = 0;
    for (let r = 0; r < m - 1; r++) {
        curr += rowSums[r];
        if (curr === target) return true;
    }

    curr = 0;
    for (let c = 0; c < n - 1; c++) {
        curr += colSums[c];
        if (curr === target) return true;
    }

    return false;
};