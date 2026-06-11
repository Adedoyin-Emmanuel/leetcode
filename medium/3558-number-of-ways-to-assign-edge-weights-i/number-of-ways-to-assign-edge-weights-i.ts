var assignEdgeWeights = function (edges: number[][]): number {
    const MOD: bigint = 1000000007n;

    const qpow = (x: number, y: number): number => {
        let res: bigint = 1n;
        let base: bigint = BigInt(x);
        let exp: number = y;

        while (exp > 0) {
            if (exp & 1) {
                res = (res * base) % MOD;
            }
            base = (base * base) % MOD;
            exp >>= 1;
        }
        return Number(res);
    };

    const dfs = (g: number[][], x: number, f: number): number => {
        let maxDep: number = 0;
        for (const y of g[x]) {
            if (y === f) continue;
            maxDep = Math.max(maxDep, dfs(g, y, x) + 1);
        }
        return maxDep;
    };

    const n: number = edges.length + 1;
    const g: number[][] = Array.from({ length: n + 1 }, () => []);

    for (let i = 0; i < edges.length; i++) {
        const u: number = edges[i][0];
        const v: number = edges[i][1];
        g[u].push(v);
        g[v].push(u);
    }

    const maxDep: number = dfs(g, 1, 0);
    return qpow(2, maxDep - 1);
};