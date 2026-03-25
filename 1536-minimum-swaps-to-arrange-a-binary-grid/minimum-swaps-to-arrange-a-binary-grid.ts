function minSwaps(grid: number[][]): number {
    const n: number = grid.length;
    const pos: number[] = new Array(n).fill(-1);

    for (let i = 0; i < n; ++i) {
        for (let j = n - 1; j >= 0; --j) {
            if (grid[i][j] === 1) {
                pos[i] = j;
                break;
            }
        }
    }

    let ans = 0;
    for (let i = 0; i < n; ++i) {
        let k = -1;
        for (let j = i; j < n; ++j) {
            if (pos[j] <= i) {
                ans += j - i;
                k = j;
                break;
            }
        }

        if (k !== -1) {
            for (let j = k; j > i; --j) {
                [pos[j], pos[j - 1]] = [pos[j - 1], pos[j]];
            }
        } else {
            return -1;
        }
    }
    return ans;
}
