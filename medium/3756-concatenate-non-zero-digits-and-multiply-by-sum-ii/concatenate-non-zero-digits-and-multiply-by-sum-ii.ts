const MOD = 1000000007;
const MAX_N = 100001;
const pow10: bigint[] = new Array(MAX_N);

pow10[0] = 1n;
for (let i = 1; i < MAX_N; ++i) {
    pow10[i] = (pow10[i - 1] * 10n) % BigInt(MOD);
}

function sumAndMultiply(s: string, queries: number[][]): number[] {
    const n = s.length;
    const sum: number[] = new Array(n + 1).fill(0);
    const x: bigint[] = new Array(n + 1).fill(0n);
    const cnt: number[] = new Array(n + 1).fill(0);
    for (let i = 0; i < n; ++i) {
        const d = s.charCodeAt(i) - 48;
        sum[i + 1] = sum[i] + d;
        x[i + 1] = d > 0 ? (x[i] * 10n + BigInt(d)) % BigInt(MOD) : x[i];
        cnt[i + 1] = cnt[i] + (d > 0 ? 1 : 0);
    }
    const m = queries.length;
    const res: number[] = new Array(m);
    for (let i = 0; i < m; ++i) {
        const l = queries[i][0];
        const r = queries[i][1] + 1;
        const length = cnt[r] - cnt[l];
        const val_x =
            (x[r] - ((x[l] * pow10[length]) % BigInt(MOD)) + BigInt(MOD)) %
            BigInt(MOD);
        const val_sum = BigInt(sum[r] - sum[l]);
        res[i] = Number((val_x * val_sum) % BigInt(MOD));
    }
    return res;
}