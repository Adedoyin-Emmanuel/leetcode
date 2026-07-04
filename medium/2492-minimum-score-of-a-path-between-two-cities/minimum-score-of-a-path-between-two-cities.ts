function minScore(n: number, roads: number[][]): number {
    const root: number[] = Array.from({ length: n + 1 }, (_, i) => i);

    const find = (x: number): number => {
        if (root[x] !== x) {
            root[x] = find(root[x]);
        }
        return root[x];
    };

    for (const [x, y, d] of roads) {
        root[find(x)] = find(y);
    }

    let res = 1e9;
    const g1 = find(1);

    for (const [x, y, d] of roads) {
        if (find(x) === g1) {
            res = Math.min(res, d);
        }
    }

    return res;
}