class SegmentTree {
    private k: number;
    private tree: number[][];

    constructor(nums: number[], k: number) {
        this.k = k;
        const n = nums.length;
        const size = 2 << n.toString(2).length;
        this.tree = Array.from({ length: size }, () =>
            new Array(k + 1).fill(0),
        );
        this.build(nums, 1, 0, n - 1);
    }

    private makeLeaf(o: number, value: number): void {
        const info = new Array(this.k + 1).fill(0);
        const r = value % this.k;
        info[r] = 1;
        info[this.k] = r;
        this.tree[o] = info;
    }

    private mergePre(left: number[], right: number[]): number[] {
        const pre = new Array(this.k + 1).fill(0);
        const mulL = left[this.k];
        const mulR = right[this.k];
        pre[this.k] = (mulL * mulR) % this.k;

        for (let x = 0; x < this.k; x++) pre[x] = left[x];
        for (let x = 0; x < this.k; x++) {
            pre[(mulL * x) % this.k] += right[x];
        }
        return pre;
    }

    private maintain(o: number): void {
        this.tree[o] = this.mergePre(this.tree[o * 2], this.tree[o * 2 + 1]);
    }

    private build(nums: number[], o: number, l: number, r: number): void {
        if (l === r) {
            this.makeLeaf(o, nums[l]);
            return;
        }
        const m = Math.floor((l + r) / 2);
        this.build(nums, o * 2, l, m);
        this.build(nums, o * 2 + 1, m + 1, r);
        this.maintain(o);
    }

    public update(
        o: number,
        l: number,
        r: number,
        index: number,
        value: number,
    ): void {
        if (l === r) {
            this.makeLeaf(o, value);
            return;
        }
        const m = Math.floor((l + r) / 2);
        if (index <= m) this.update(o * 2, l, m, index, value);
        else this.update(o * 2 + 1, m + 1, r, index, value);
        this.maintain(o);
    }

    public query(
        o: number,
        l: number,
        r: number,
        L: number,
        R: number,
    ): number[] {
        if (L <= l && r <= R) return this.tree[o];
        const m = Math.floor((l + r) / 2);
        if (R <= m) return this.query(o * 2, l, m, L, R);
        if (L > m) return this.query(o * 2 + 1, m + 1, r, L, R);
        const left = this.query(o * 2, l, m, L, R);
        const right = this.query(o * 2 + 1, m + 1, r, L, R);
        return this.mergePre(left, right);
    }
}

function resultArray(nums: number[], k: number, queries: number[][]): number[] {
    const n = nums.length;
    const seg = new SegmentTree(nums, k);
    const ans: number[] = [];

    for (const [index, value, start, x] of queries) {
        seg.update(1, 0, n - 1, index, value);
        const pre = seg.query(1, 0, n - 1, start, n - 1);
        ans.push(pre[x]);
    }
    return ans;
}