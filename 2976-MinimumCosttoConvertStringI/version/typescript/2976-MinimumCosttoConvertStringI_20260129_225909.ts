// Last updated: 1/29/2026, 10:59:09 PM
1function minimumCost(
2    source: string,
3    target: string,
4    original: string[],
5    changed: string[],
6    cost: number[]
7): number {
8    const INF = Number.MAX_SAFE_INTEGER;
9    const n = 26;
10
11    // Initialize distance matrix
12    const dist: number[][] = Array.from({ length: n }, () =>
13        Array(n).fill(INF)
14    );
15
16    for (let i = 0; i < n; i++) {
17        dist[i][i] = 0;
18    }
19
20    //  Fill direct transformations
21    for (let i = 0; i < original.length; i++) {
22        const u = original[i].charCodeAt(0) - 97;
23        const v = changed[i].charCodeAt(0) - 97;
24        dist[u][v] = Math.min(dist[u][v], cost[i]);
25    }
26
27    //  Floyd–Warshall
28    for (let k = 0; k < n; k++) {
29        for (let i = 0; i < n; i++) {
30            for (let j = 0; j < n; j++) {
31                if (dist[i][k] + dist[k][j] < dist[i][j]) {
32                    dist[i][j] = dist[i][k] + dist[k][j];
33                }
34            }
35        }
36    }
37
38    let total = 0;
39
40    for (let i = 0; i < source.length; i++) {
41        const s = source.charCodeAt(i) - 97;
42        const t = target.charCodeAt(i) - 97;
43
44        if (dist[s][t] === INF) return -1;
45        total += dist[s][t];
46    }
47
48    return total;
49}
50