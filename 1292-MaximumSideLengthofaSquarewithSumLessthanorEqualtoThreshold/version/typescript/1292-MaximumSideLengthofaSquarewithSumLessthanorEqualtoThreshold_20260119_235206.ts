// Last updated: 1/19/2026, 11:52:06 PM
// Get in joor. Explnation later.
1function maxSideLength(mat: number[][], threshold: number): number {
2    /**
3        Again, still on solving squares problems lol. This is long but a bit straightfoward than
4        yesterday's problem. Let's see.
5     */
6    const m = mat.length, n = mat[0].length;
7
8    /*fill prefix sum array*/
9    const ps = Array.from({ length: m + 1 }, () =>
10        Array(n + 1).fill(0)
11    );
12
13    for (let i = 1; i <= m; i++) {
14        for (let j = 1; j <= n; j++) {
15            ps[i][j] =
16                mat[i - 1][j - 1] +
17                ps[i - 1][j] +
18                ps[i][j - 1] -
19                ps[i - 1][j - 1];
20        }
21    }
22
23    /**
24      see if any square of size k is valid
25
26    */
27    const can = (k: number): boolean => {
28        for (let i = 0; i + k <= m; i++) {
29            for (let j = 0; j + k <= n; j++) {
30                const sum =
31                    ps[i + k][j + k] -
32                    ps[i][j + k] -
33                    ps[i + k][j] +
34                    ps[i][j];
35                if (sum <= threshold) return true;
36            }
37        }
38        return false;
39    };
40
41    let left = 0;
42    let right = Math.min(m, n);
43
44    while (left < right) {
45        const mid = Math.floor((left + right + 1) / 2);
46        if (can(mid)) left = mid;
47        else right = mid - 1;
48    }
49
50    return left;
51};