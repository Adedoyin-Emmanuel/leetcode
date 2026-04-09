const MOD = 1_000_000_007n;

const pow = (x: bigint, y: bigint) => {
    let res = 1n;
    for (; y > 0n; y >>= 1n) {
        if (y & 1n) {
            res = (res * x) % MOD;
        }
        x = (x * x) % MOD;
    }
    return res;
};

function xorAfterQueries(nums: number[], queries: number[][]): number {
    const n = nums.length;
    const T = Math.floor(Math.sqrt(n));
    const groups = Array.from<unknown, Array<[number, number, bigint]>>(
        { length: T },
        () => [],
    );

    for (const [l, r, k, v] of queries) {
        if (k < T) {
            groups[k].push([l, r, BigInt(v)]);
        } else {
            for (let i = l; i <= r; i += k) {
                nums[i] = Number((BigInt(nums[i]) * BigInt(v)) % MOD);
            }
        }
    }

    const dif = new BigInt64Array(n + T);
    for (let k = 1; k < T; k++) {
        if (groups[k].length === 0) {
            continue;
        }
        dif.fill(1n);
        for (let [l, r, v] of groups[k]) {
            dif[l] = (dif[l] * BigInt(v)) % MOD;
            const R = Math.floor((r - l) / k + 1) * k + l;
            dif[R] = (dif[R] * pow(BigInt(v), MOD - 2n)) % MOD;
        }

        for (let i = k; i < n; i++) {
            dif[i] = (dif[i] * dif[i - k]) % MOD;
        }
        for (let i = 0; i < n; i++) {
            nums[i] = Number((BigInt(nums[i]) * dif[i]) % MOD);
        }
    }

    let res = 0;
    for (let i = 0; i < n; i++) {
        res = res ^ nums[i];
    }
    return res;
}