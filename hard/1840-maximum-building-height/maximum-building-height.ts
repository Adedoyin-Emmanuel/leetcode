function maxBuilding(n: number, restrictions: number[][]): number {
    let r: number[][] = restrictions.map((res) => [res[0], res[1]]);
   
    r.push([1, 0]);

    r.sort((a, b) => a[0] - b[0]);

    if (r[r.length - 1][0] !== n) {
        r.push([n, n - 1]);
    }

    const m = r.length;

    for (let i = 1; i < m; i++) {
        const dist = r[i][0] - r[i - 1][0];
        r[i][1] = Math.min(r[i][1], r[i - 1][1] + dist);
    }

    for (let i = m - 2; i >= 0; i--) {
        const dist = r[i + 1][0] - r[i][0];
        r[i][1] = Math.min(r[i][1], r[i + 1][1] + dist);
    }

    let ans = 0;
    for (let i = 0; i < m - 1; i++) {
        const dist = r[i + 1][0] - r[i][0];
        const best = Math.floor((dist + r[i][1] + r[i + 1][1]) / 2);
        ans = Math.max(ans, best);
    }

    return ans;
}