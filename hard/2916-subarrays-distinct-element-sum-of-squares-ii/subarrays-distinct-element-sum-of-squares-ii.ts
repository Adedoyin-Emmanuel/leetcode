function sumCounts(nums: number[]): number {
    const n = nums.length;

    const t = new Array(4 * n).fill(0), lz = new Array(4 * n).fill(0);

    const push = (x, l, r) => {
        if (lz[x]) {
            const m = Math.floor((l + r) / 2);
            t[2 * x] += lz[x] * (m - l + 1);
            lz[2 * x] += lz[x];
            t[2 * x + 1] += lz[x] * (r - m);
            lz[2 * x + 1] += lz[x];
            lz[x] = 0;
        }
    };
    
    const upd = (x, l, r, a, b) => {
        if (b < l || r < a) return;
        if (a <= l && r <= b) {
            t[x] += r - l + 1;
            lz[x]++;
            return;
        }
        push(x, l, r);
        const m = Math.floor((l + r) / 2);
        upd(2 * x, l, m, a, b);
        upd(2 * x + 1, m + 1, r, a, b);
        t[x] = t[2 * x] + t[2 * x + 1];
    };
    const qry = (x, l, r, a, b) => {
        if (b < l || r < a) return 0;
        if (a <= l && r <= b) return t[x];
        push(x, l, r);
        const m = Math.floor((l + r) / 2);
        return qry(2 * x, l, m, a, b) + qry(2 * x + 1, m + 1, r, a, b);
    };
    const mod = 1000000007;
    let sq = 0, ans = 0;
    const last = new Array(100001).fill(-1);
    for (let j = 0; j < n; j++) {
        const p = last[nums[j]];
        const s = qry(1, 0, n - 1, p + 1, j);
        sq = (sq + 2 * (s % mod) + (j - p)) % mod;
        upd(1, 0, n - 1, p + 1, j);
        ans = (ans + sq) % mod;
        last[nums[j]] = j;
    }
    return ans;
};