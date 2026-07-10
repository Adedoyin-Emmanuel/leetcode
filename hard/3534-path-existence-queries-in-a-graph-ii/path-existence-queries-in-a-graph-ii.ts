function pathExistenceQueries(
    n: number,
    nums: number[],
    maxDiff: number,
    queries: number[][],
): number[] {
    const idx: number[] = Array.from({ length: n }, (_, i) => i);

    idx.sort((a, b) => nums[a] - nums[b]);

    const pos: number[] = new Array(n);

    for (let i = 0; i < n; i++) {
        pos[idx[i]] = i;
    }

    const m = n.toString(2).length;

    const f: number[][] = Array.from({ length: n }, () => Array(m).fill(0));

    let left = 0;

    for (let i = 0; i < n; i++) {
        while (left < i && nums[idx[i]] - nums[idx[left]] > maxDiff) {
            left++;
        }

        f[i][0] = left;
    }

    for (let j = 1; j < m; j++) {
        for (let i = 0; i < n; i++) {
            f[i][j] = f[f[i][j - 1]][j - 1];
        }
    }

    const res: number[] = [];

    for (const [a, b] of queries) {
        let x = pos[a];
        let y = pos[b];

        if (x > y) {
            [x, y] = [y, x];
        }

        if (x === y) {
            res.push(0);
            continue;
        }

        let step = 0;

        for (let i = m - 1; i >= 0; i--) {
            if (f[y][i] > x) {
                y = f[y][i];
                step += 1 << i;
            }
        }

        res.push(f[y][0] <= x ? step + 1 : -1);
    }

    return res;
}