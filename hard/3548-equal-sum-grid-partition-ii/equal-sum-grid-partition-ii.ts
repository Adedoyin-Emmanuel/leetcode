function canPartitionGrid(grid: number[][]): boolean {
    let total = 0;
    let m = grid.length;
    let n = grid[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            total += grid[i][j];
        }
    }
    for (let k = 0; k < 4; k++) {
        const exist = new Set<number>();
        exist.add(0);
        let sum = 0;
        m = grid.length;
        n = grid[0].length;
        if (m < 2) {
            grid = rotation(grid);
            continue;
        }
        if (n == 1) {
            for (let i = 0; i < m - 1; i++) {
                sum += grid[i][0];
                let tag = sum * 2 - total;
                if (tag == 0 || tag == grid[0][0] || tag == grid[i][0]) {
                    return true;
                }
            }
            grid = rotation(grid);
            continue;
        }
        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n; j++) {
                exist.add(grid[i][j]);
                sum += grid[i][j];
            }
            let tag = sum * 2 - total;
            if (i == 0) {
                if (tag == 0 || tag == grid[0][0] || tag == grid[0][n - 1]) {
                    return true;
                }
                continue;
            }
            if (exist.has(tag)) {
                return true;
            }
        }
        grid = rotation(grid);
    }
    return false;
}

function rotation(grid: number[][]): number[][] {
    const m = grid.length,
        n = grid[0].length;
    const tmp: number[][] = Array.from({ length: n }, () => Array(m).fill(0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            tmp[j][m - 1 - i] = grid[i][j];
        }
    }
    return tmp;
}