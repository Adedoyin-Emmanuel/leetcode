function segmentCost(
    s: string,
    l: number,
    m: number,
    factors: number[][],
): number {
    let best = m;
    for (const d of factors[m]) {
        const groups = Math.floor(m / d); // Each group contains groups characters
        let changes = 0;
        for (let offset = 0; offset < d; offset++) {
            for (let t = 0; t < Math.floor(groups / 2); t++) {
                // Pair characters from opposite ends of the group
                if (
                    s[l + offset + t * d] !==
                    s[l + offset + (groups - 1 - t) * d]
                ) {
                    changes++;
                }
            }
        }
        best = Math.min(best, changes);
    }
    return best;
}

function minimumChanges(s: string, k: number): number {
    const n = s.length;
    const factors: number[][] = Array.from({ length: n + 1 }, () => []);
    // Precompute the proper divisors of each number
    for (let d = 1; d <= Math.floor(n / 2); d++) {
        for (let m = d * 2; m <= n; m += d) {
            factors[m].push(d);
        }
    }
    const cost: number[][] = Array.from({ length: n }, () =>
        new Array(n).fill(0),
    );
    for (let l = 0; l + 1 < n; l++) {
        for (let r = l + 1; r < n; r++) {
            // Each substring must have length at least 2
            cost[l][r] = segmentCost(s, l, r - l + 1, factors);
        }
    }

    const memo: number[][] = Array.from({ length: k + 1 }, () =>
        new Array(n).fill(-1),
    );
    const solve = (seg: number, start: number): number => {
        if (seg === 1) {
            // Only one segment remains
            return cost[start][n - 1];
        }
        if (memo[seg][start] !== -1) {
            // Already computed
            return memo[seg][start];
        }
        let best = n;
        const limit = n - 1 - 2 * (seg - 1); // Leave room for seg-1 segments after the first segment
        for (let e = start + 1; e <= limit; e++) {
            best = Math.min(best, cost[start][e] + solve(seg - 1, e + 1));
        }
        memo[seg][start] = best;
        return best;
    };
    return solve(k, 0);
}