function reverseSubmatrix(
    grid: number[][],
    x: number,
    y: number,
    k: number,
): number[][] {
    for (let i0 = x, i1 = x + k - 1; i0 < i1; i0++, i1--) {
        for (let j = y; j < y + k; j++) {
            [grid[i0][j], grid[i1][j]] = [grid[i1][j], grid[i0][j]];
        }
    }
    return grid;
}