class DSU {
    constructor(public parent: number[]) {}

    find(x: number): number {
        return this.parent[x] === x
            ? x
            : (this.parent[x] = this.find(this.parent[x]));
    }

    join(x: number, y: number) {
        const px = this.find(x);
        const py = this.find(y);
        this.parent[px] = py;
    }
}

const MAX_STABILITY = 2e5;

function maxStability(n: number, edges: number[][], k: number): number {
    let ans = -1;

    if (edges.length < n - 1) {
        return -1;
    }

    const mustEdges = edges.filter(([, , , must]) => must === 1);
    const optionalEdges = edges.filter(([, , , must]) => must !== 1);

    if (mustEdges.length > n - 1) {
        return -1;
    }
    optionalEdges.sort((a, b) => b[2] - a[2]);

    let selectedInit = 0;
    let mustMinStability = MAX_STABILITY;
    const dsuInit = new DSU(Array.from({ length: n }, (_, i) => i));

    for (const [u, v, s] of mustEdges) {
        if (dsuInit.find(u) === dsuInit.find(v) || selectedInit === n - 1) {
            return -1;
        }

        dsuInit.join(u, v);
        selectedInit++;
        mustMinStability = Math.min(mustMinStability, s);
    }

    let l = 0;
    let r = mustMinStability;

    while (l < r) {
        const mid = l + ((r - l + 1) >>> 1);

        const dsu = new DSU(dsuInit.parent.slice());

        let selected = selectedInit;
        let doubledCount = 0;

        for (const [u, v, s] of optionalEdges) {
            if (dsu.find(u) === dsu.find(v)) {
                continue;
            }

            if (s >= mid) {
                dsu.join(u, v);
                selected++;
            } else if (doubledCount < k && s * 2 >= mid) {
                doubledCount++;
                dsu.join(u, v);
                selected++;
            } else {
                break;
            }

            if (selected === n - 1) {
                break;
            }
        }

        if (selected !== n - 1) {
            r = mid - 1;
        } else {
            ans = l = mid;
        }
    }

    return ans;
}