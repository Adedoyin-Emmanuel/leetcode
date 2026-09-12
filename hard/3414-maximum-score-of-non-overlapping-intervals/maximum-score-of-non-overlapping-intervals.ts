function maximumWeight(intervals: number[][]): number[] {
    const n = intervals.length;
    const arr = intervals.map((interval, i) => ({
        l: interval[0],
        r: interval[1],
        weight: interval[2],
        idx: i,
    }));
    // Sort by right endpoint.
    arr.sort((a, b) => a.r - b.r);

    const dp: number[][] = Array.from({ length: n + 1 }, () =>
        Array(5).fill(0),
    );
    const indices: number[][][] = Array.from({ length: n + 1 }, () =>
        Array.from({ length: 5 }, () => []),
    );

    for (let i = 0; i < n; i++) {
        const { l, r, weight, idx } = arr[i];
        // Use binary search to find intervals whose right endpoints are smaller than l.
        let left = 0,
            right = i;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (arr[mid].r < l) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        const k = left;

        for (let j = 1; j < 5; j++) {
            const s1 = dp[i][j];
            const s2 = dp[k][j - 1] + weight;
            if (s1 > s2) {
                dp[i + 1][j] = dp[i][j];
                indices[i + 1][j] = [...indices[i][j]];
                continue;
            }

            const newIndex = [...indices[k][j - 1], idx].sort((a, b) => a - b);
            if (s1 === s2 && compareArrays(indices[i][j], newIndex) < 0) {
                dp[i + 1][j] = s2;
                indices[i + 1][j] = [...indices[i][j]];
            } else {
                dp[i + 1][j] = s2;
                indices[i + 1][j] = newIndex;
            }
        }
    }

    return indices[n][4];
}

function compareArrays(a: number[], b: number[]): number {
    const minLen = Math.min(a.length, b.length);
    for (let i = 0; i < minLen; i++) {
        if (a[i] !== b[i]) {
            return a[i] - b[i];
        }
    }
    return a.length - b.length;
}