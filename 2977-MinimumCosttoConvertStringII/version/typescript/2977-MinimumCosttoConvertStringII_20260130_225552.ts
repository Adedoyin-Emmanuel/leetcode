// Last updated: 1/30/2026, 10:55:52 PM
1function minimumCost(
2  source: string,
3  target: string,
4  original: string[],
5  changed: string[],
6  cost: number[]
7): number {
8  const INF = 1e18;
9
10  // mapping strings to ids
11  const id = new Map<string, number>();
12  let idx = 0;
13  const getId = (s: string) => {
14    if (!id.has(s)) id.set(s, idx++);
15    return id.get(s)!;
16  };
17
18  for (let i = 0; i < original.length; i++) {
19    getId(original[i]);
20    getId(changed[i]);
21  }
22
23  const m = idx;
24
25  // Floyd-Warshall
26  const dist = Array.from({ length: m }, () =>
27    Array(m).fill(INF)
28  );
29
30  for (let i = 0; i < m; i++) dist[i][i] = 0;
31
32  for (let i = 0; i < original.length; i++) {
33    const u = getId(original[i]);
34    const v = getId(changed[i]);
35    dist[u][v] = Math.min(dist[u][v], cost[i]);
36  }
37
38  for (let k = 0; k < m; k++) {
39    for (let i = 0; i < m; i++) {
40      for (let j = 0; j < m; j++) {
41        const nd = dist[i][k] + dist[k][j];
42        if (nd < dist[i][j]) dist[i][j] = nd;
43      }
44    }
45  }
46
47  class TrieNode {
48    children = new Map<string, TrieNode>();
49    id = -1;
50  }
51
52  const root = new TrieNode();
53
54  function insert(s: string) {
55    let node = root;
56    for (const ch of s) {
57      if (!node.children.has(ch)) {
58        node.children.set(ch, new TrieNode());
59      }
60      node = node.children.get(ch)!;
61    }
62    node.id = getId(s);
63  }
64
65  for (const s of id.keys()) insert(s);
66
67  const n = source.length;
68  const dp = Array(n + 1).fill(INF);
69  dp[0] = 0;
70
71  for (let i = 0; i < n; i++) {
72    if (dp[i] === INF) continue;
73
74    if (source[i] === target[i]) {
75      dp[i + 1] = Math.min(dp[i + 1], dp[i]);
76    }
77
78    let nodeS: TrieNode | null = root;
79    let nodeT: TrieNode | null = root;
80
81    for (let j = i; j < n; j++) {
82      nodeS = nodeS?.children.get(source[j]) ?? null;
83      nodeT = nodeT?.children.get(target[j]) ?? null;
84
85      if (!nodeS || !nodeT) break;
86
87      if (nodeS.id !== -1 && nodeT.id !== -1) {
88        const u = nodeS.id;
89        const v = nodeT.id;
90        if (dist[u][v] < INF) {
91          dp[j + 1] = Math.min(dp[j + 1], dp[i] + dist[u][v]);
92        }
93      }
94    }
95  }
96
97  return dp[n] === INF ? -1 : dp[n];
98}
99