function distinctSubseqII(s: string): number {
    const MOD: number = 1000000007;

    const count: number[] = new Array(26).fill(0);
    let sum: number = 0;

    for (const c of s) {
        const total: number = (1 + sum) % MOD;
        const idx: number = c.charCodeAt(0) - 97;

        sum = (sum + total - count[idx] + MOD) % MOD;
        count[idx] = total;
    }

    return sum;
};