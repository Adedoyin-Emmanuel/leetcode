function subsequencePairCount(nums: number[]): number {
    const MOD = 1000000007;
    const m = Math.max(...nums);

    const gcd = (a: number, b: number): number => {
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return a;
    };

    let dp: number[][] = Array.from({ length: m + 1 }, () =>
        new Array(m + 1).fill(0),
    );
    dp[0][0] = 1;

    for (const num of nums) {
        const ndp: number[][] = Array.from({ length: m + 1 }, () =>
            new Array(m + 1).fill(0),
        );

        for (let j = 0; j <= m; j++) {
            const divisor1 = gcd(j, num);
            const dpRow = dp[j];
            const ndpRow = ndp[j];
            const ndpD1Row = ndp[divisor1];

            for (let k = 0; k <= m; k++) {
                const val = dpRow[k];
                if (val === 0) continue;

                const divisor2 = gcd(k, num);
                ndpRow[k] = (ndpRow[k] + val) % MOD;
                ndpD1Row[k] = (ndpD1Row[k] + val) % MOD;
                ndpRow[divisor2] = (ndpRow[divisor2] + val) % MOD;
            }
        }
        dp = ndp;
    }

    let ans = 0;
    
    for (let j = 1; j <= m; j++) {
        ans = (ans + dp[j][j]) % MOD;
    }

    return ans;
}