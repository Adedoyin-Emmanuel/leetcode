class LCA {
    private n: number;
    private m: number;
    private d: number[];
    private e: number[][];
    private f: number[][];

    constructor(edges: number[][], root: number = 1) {
        this.n = edges.length + 1;
        this.m = Math.floor(Math.log(this.n) / Math.log(2)) + 1;
        this.d = new Array(this.n + 1).fill(0);
        this.e = new Array(this.n + 1);
        this.f = new Array(this.n + 1);

        for (let i = 0; i <= this.n; i++) {
            this.e[i] = [];
            this.f[i] = new Array(this.m).fill(0);
        }

        for (const edge of edges) {
            const u = edge[0];
            const v = edge[1];
            this.e[u].push(v);
            this.e[v].push(u);
        }

        this.dfs(root, 0);

        for (let i = 1; i < this.m; i++) {
            for (let x = 1; x <= this.n; x++) {
                this.f[x][i] = this.f[this.f[x][i - 1]][i - 1];
            }
        }
    }

    private dfs(x: number, fa: number): void {
        this.f[x][0] = fa;
        for (const y of this.e[x]) {
            if (y === fa) {
                continue;
            }
            this.d[y] = this.d[x] + 1;
            this.dfs(y, x);
        }
    }

    public lca(x: number, y: number): number {
        if (this.d[x] > this.d[y]) {
            [x, y] = [y, x];
        }

        for (let i = this.m - 1; i >= 0; i--) {
            if (this.d[x] <= this.d[this.f[y][i]]) {
                y = this.f[y][i];
            }
        }

        if (x === y) {
            return x;
        }

        for (let i = this.m - 1; i >= 0; i--) {
            if (this.f[y][i] !== this.f[x][i]) {
                x = this.f[x][i];
                y = this.f[y][i];
            }
        }

        return this.f[x][0];
    }

    public dis(x: number, y: number): number {
        return this.d[x] + this.d[y] - this.d[this.lca(x, y)] * 2;
    }
}

const MOD: number = 1000000007;
const N: number = 100010;
const p2: number[] = new Array(N);

(function init(): void {
    p2[0] = 1;
    for (let i = 1; i < N; i++) {
        p2[i] = (p2[i - 1] * 2) % MOD;
    }
})();

function assignEdgeWeights(edges: number[][], queries: number[][]): number[] {
    const lca = new LCA(edges, 1);
    const m = queries.length;
    const res: number[] = new Array(m).fill(0);

    for (let i = 0; i < m; i++) {
        const x = queries[i][0];
        const y = queries[i][1];
        if (x !== y) {
            res[i] = p2[lca.dis(x, y) - 1];
        }
    }

    return res;
}