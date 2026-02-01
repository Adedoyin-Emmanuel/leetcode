// Last updated: 2/1/2026, 8:42:17 PM
function minimumCost(
  source: string,
  target: string,
  original: string[],
  changed: string[],
  cost: number[]
): number {
  const INF = 1e18;

  // mapping strings to ids
  const id = new Map<string, number>();
  let idx = 0;
  const getId = (s: string) => {
    if (!id.has(s)) id.set(s, idx++);
    return id.get(s)!;
  };

  for (let i = 0; i < original.length; i++) {
    getId(original[i]);
    getId(changed[i]);
  }

  const m = idx;

  // Floyd-Warshall
  const dist = Array.from({ length: m }, () =>
    Array(m).fill(INF)
  );

  for (let i = 0; i < m; i++) dist[i][i] = 0;

  for (let i = 0; i < original.length; i++) {
    const u = getId(original[i]);
    const v = getId(changed[i]);
    dist[u][v] = Math.min(dist[u][v], cost[i]);
  }

  for (let k = 0; k < m; k++) {
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < m; j++) {
        const nd = dist[i][k] + dist[k][j];
        if (nd < dist[i][j]) dist[i][j] = nd;
      }
    }
  }

  class TrieNode {
    children = new Map<string, TrieNode>();
    id = -1;
  }

  const root = new TrieNode();

  function insert(s: string) {
    let node = root;
    for (const ch of s) {
      if (!node.children.has(ch)) {
        node.children.set(ch, new TrieNode());
      }
      node = node.children.get(ch)!;
    }
    node.id = getId(s);
  }

  for (const s of id.keys()) insert(s);

  const n = source.length;
  const dp = Array(n + 1).fill(INF);
  dp[0] = 0;

  for (let i = 0; i < n; i++) {
    if (dp[i] === INF) continue;

    if (source[i] === target[i]) {
      dp[i + 1] = Math.min(dp[i + 1], dp[i]);
    }

    let nodeS: TrieNode | null = root;
    let nodeT: TrieNode | null = root;

    for (let j = i; j < n; j++) {
      nodeS = nodeS?.children.get(source[j]) ?? null;
      nodeT = nodeT?.children.get(target[j]) ?? null;

      if (!nodeS || !nodeT) break;

      if (nodeS.id !== -1 && nodeT.id !== -1) {
        const u = nodeS.id;
        const v = nodeT.id;
        if (dist[u][v] < INF) {
          dp[j + 1] = Math.min(dp[j + 1], dp[i] + dist[u][v]);
        }
      }
    }
  }

  return dp[n] === INF ? -1 : dp[n];
}
