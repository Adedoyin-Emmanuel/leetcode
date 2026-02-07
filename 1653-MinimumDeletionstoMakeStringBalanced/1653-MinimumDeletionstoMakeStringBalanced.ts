// Last updated: 2/7/2026, 4:14:15 AM
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
15        if (s[i] === "b") {
16            bCounter++;
17        } else {
18            let costToDeleteA = minDeletionsSoFar + 1;
19            let costToDeleteB = bCounter;
20
21            minDeletionsSoFar = Math.min(costToDeleteA, costToDeleteB);
22        }
23
24    }
25
26    return minDeletionsSoFar;
27
28
29};