function maxTotalValue(nums: number[], k: number): number {
    const n = nums.length;
    const logn = 32 - Math.clz32(n);
    const stMax: number[][] = Array.from({ length: n }, () =>
        Array(logn).fill(0),
    );
    const stMin: number[][] = Array.from({ length: n }, () =>
        Array(logn).fill(0),
    );
    for (let i = 0; i < n; i++) {
        stMax[i][0] = stMin[i][0] = nums[i];
    }
    for (let j = 1; j < logn; j++) {
        for (let i = 0; i + (1 << j) <= n; i++) {
            stMax[i][j] = Math.max(
                stMax[i][j - 1],
                stMax[i + (1 << (j - 1))][j - 1],
            );
            stMin[i][j] = Math.min(
                stMin[i][j - 1],
                stMin[i + (1 << (j - 1))][j - 1],
            );
        }
    }
    const queryMax = (l: number, r: number): number => {
        const j = 31 - Math.clz32(r - l + 1);
        return Math.max(stMax[l][j], stMax[r - (1 << j) + 1][j]);
    };
    const queryMin = (l: number, r: number): number => {
        const j = 31 - Math.clz32(r - l + 1);
        return Math.min(stMin[l][j], stMin[r - (1 << j) + 1][j]);
    };

    const heap = new Heap(
        (a: [number, number, number], b: [number, number, number]) =>
            b[0] - a[0],
    );
    for (let l = 0; l < n; l++) {
        heap.push([queryMax(l, n - 1) - queryMin(l, n - 1), l, n - 1]);
    }
    let ans = 0;
    while (k--) {
        const [val, l, r] = heap.pop()!;
        ans += val;
        if (r > l) {
            heap.push([queryMax(l, r - 1) - queryMin(l, r - 1), l, r - 1]);
        }
    }
    return ans;
}