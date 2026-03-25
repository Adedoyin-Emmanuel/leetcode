const MOD = 1000000007;

function numberOfStableArrays(
    zero: number,
    one: number,
    limit: number,
): number {
    const memo: number[][][] = Array.from({ length: zero + 1 }, () =>
        Array.from({ length: one + 1 }, () => [-1, -1]),
    );

    function dp(zero: number, one: number, lastBit: number): number {
        if (zero === 0) {
            return lastBit === 0 || one > limit ? 0 : 1;
        } else if (one === 0) {
            return lastBit === 1 || zero > limit ? 0 : 1;
        }

        if (memo[zero][one][lastBit] === -1) {
            let res = 0;
            if (lastBit === 0) {
                res = (dp(zero - 1, one, 0) + dp(zero - 1, one, 1)) % MOD;
                if (zero > limit) {
                    res = (res - dp(zero - limit - 1, one, 1) + MOD) % MOD;
                }
            } else {
                res = (dp(zero, one - 1, 0) + dp(zero, one - 1, 1)) % MOD;
                if (one > limit) {
                    res = (res - dp(zero, one - limit - 1, 0) + MOD) % MOD;
                }
            }
            memo[zero][one][lastBit] = res % MOD;
        }
        return memo[zero][one][lastBit];
    }

    return (dp(zero, one, 0) + dp(zero, one, 1)) % MOD;
}