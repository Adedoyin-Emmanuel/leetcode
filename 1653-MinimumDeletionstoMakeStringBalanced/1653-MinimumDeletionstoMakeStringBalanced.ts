// Last updated: 2/7/2026, 3:26:24 AM
1function minimumDeletions(s: string): number {
2
3    /**
4        A's must be on the left,
5        B's must be on the right.
6
7        Deletion = total number of B's on the left
8        + total number of A's on the right
9     */
10    let badLeft = 0;
11    let badRight = 0;
12    let minNoOfDeletions = Infinity;
13
14    for (let i = 0; i < s.length; i++) {
15        if (s[i] !== "b") {
16            badRight++;
17        }
18    }
19
20    for (let i = 0; i < s.length + 1; i++) {
21
22        const cost = badRight + badLeft;
23
24        minNoOfDeletions = Math.min(minNoOfDeletions, cost);
25
26        if (s[i] == "a") {
27            badRight--;
28        } else {
29            badLeft++;
30        }
31    }
32
33    return minNoOfDeletions;
34};