class Answer {
    private ans: number[];

    constructor() {
        this.ans = [0, 0, 0];
    }

    put(x: number): void {
        if (x > this.ans[0]) {
            this.ans[2] = this.ans[1];
            this.ans[1] = this.ans[0];
            this.ans[0] = x;
        } else if (x !== this.ans[0] && x > this.ans[1]) {
            this.ans[2] = this.ans[1];
            this.ans[1] = x;
        } else if (x !== this.ans[0] && x !== this.ans[1] && x > this.ans[2]) {
            this.ans[2] = x;
        }
    }

    get(): number[] {
        const ret: number[] = [];
        for (const num of this.ans) {
            if (num !== 0) {
                ret.push(num);
            }
        }
        return ret;
    }
}

function getBiggestThree(grid: number[][]): number[] {
    const m = grid.length,
        n = grid[0].length;
    const sum1: number[][] = Array.from({ length: m + 1 }, () =>
        new Array(n + 2).fill(0),
    );
    const sum2: number[][] = Array.from({ length: m + 1 }, () =>
        new Array(n + 2).fill(0),
    );

    for (let i = 1; i <= m; ++i) {
        for (let j = 1; j <= n; ++j) {
            sum1[i][j] = sum1[i - 1][j - 1] + grid[i - 1][j - 1];
            sum2[i][j] = sum2[i - 1][j + 1] + grid[i - 1][j - 1];
        }
    }

    const ans = new Answer();
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            // a single cell is also a rhombus
            ans.put(grid[i][j]);
            for (let k = i + 2; k < m; k += 2) {
                const ux = i,
                    uy = j;
                const dx = k,
                    dy = j;
                const lx = Math.floor((i + k) / 2),
                    ly = j - Math.floor((k - i) / 2);
                const rx = Math.floor((i + k) / 2),
                    ry = j + Math.floor((k - i) / 2);
                if (ly < 0 || ry >= n) {
                    break;
                }
                const sum =
                    sum2[lx + 1][ly + 1] -
                    sum2[ux][uy + 2] +
                    (sum1[rx + 1][ry + 1] - sum1[ux][uy]) +
                    (sum1[dx + 1][dy + 1] - sum1[lx][ly]) +
                    (sum2[dx + 1][dy + 1] - sum2[rx][ry + 2]) -
                    (grid[ux][uy] + grid[dx][dy] + grid[lx][ly] + grid[rx][ry]);

                ans.put(sum);
            }
        }
    }

    return ans.get();
}