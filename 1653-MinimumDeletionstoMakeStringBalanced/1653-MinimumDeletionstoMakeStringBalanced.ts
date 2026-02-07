// Last updated: 2/7/2026, 4:13:10 AM
1function minimumDeletions(s: string): number {
2
3    /**
4        A's must be on the left,
5        B's must be on the right.
6
7        Deletion = total number of B's on the left
8        + total number of A's on the right
9     */
10
11    let bCounter = 0;
12    let minDeletionsSoFar = 0;
13
14    for (let i = 0; i < s.length; i++) {
15
16
17        if (s[i] === "b") {
18            bCounter++;
19        } else {
20            let costToDeleteA = minDeletionsSoFar + 1;
21            let costToDeleteB = bCounter;
22
23            minDeletionsSoFar = Math.min(costToDeleteA, costToDeleteB);
24        }
25
26    }
27
28    return minDeletionsSoFar;
29
30
31};