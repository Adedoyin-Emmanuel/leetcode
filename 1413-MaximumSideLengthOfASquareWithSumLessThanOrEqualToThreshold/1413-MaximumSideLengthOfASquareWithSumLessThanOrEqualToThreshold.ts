// Last updated: 2/1/2026, 8:42:27 PM
function maxSideLength(mat: number[][], threshold: number): number {
    /**
        Again, still on solving squares problems lol. This is long but a bit straightfoward than
        yesterday's problem. Let's see.
     */
    const m = mat.length, n = mat[0].length;

    /*fill prefix sum array*/
    const ps = Array.from({ length: m + 1 }, () =>
        Array(n + 1).fill(0)
    );

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            ps[i][j] =
                mat[i - 1][j - 1] +
                ps[i - 1][j] +
                ps[i][j - 1] -
                ps[i - 1][j - 1];
        }
    }

    /**
      see if any square of size k is valid

    */
    const can = (k: number): boolean => {
        for (let i = 0; i + k <= m; i++) {
            for (let j = 0; j + k <= n; j++) {
                const sum =
                    ps[i + k][j + k] -
                    ps[i][j + k] -
                    ps[i + k][j] +
                    ps[i][j];
                if (sum <= threshold) return true;
            }
        }
        return false;
    };

    let left = 0;
    let right = Math.min(m, n);

    while (left < right) {
        const mid = Math.floor((left + right + 1) / 2);
        if (can(mid)) left = mid;
        else right = mid - 1;
    }

    return left;
};