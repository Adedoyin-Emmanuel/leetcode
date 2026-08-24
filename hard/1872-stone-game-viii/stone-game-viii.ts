function stoneGameVIII(stones: number[]): number {
    const n = stones.length;
    const pre: number[] = new Array(n);
    pre[0] = stones[0];
    for (let i = 1; i < n; i++) {
        pre[i] = pre[i - 1] + stones[i];
    }

    const f: number[] = new Array(n);
    f[n - 1] = pre[n - 1];
    for (let i = n - 2; i >= 1; i--) {
        f[i] = Math.max(f[i + 1], pre[i] - f[i + 1]);
    }
    return f[1];
}