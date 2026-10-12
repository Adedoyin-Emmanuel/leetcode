function maxSum(nums: number[], k: number): number {
    const MOD = 1000000007;
    const cnt: number[] = new Array(30).fill(0);

    // Count the number of 1 bits at each position
    for (const num of nums) {
        for (let i = 0; i < 30; i++) {
            if (num & (1 << i)) {
                cnt[i]++;
            }
        }
    }

    let res = 0;
    for (let i = 0; i < k; i++) {
        let cur = 0;
        // Construct the current number from the most significant bit to the least significant bit
        for (let j = 29; j >= 0; j--) {
            if (cnt[j] > 0) {
                cur += Math.pow(2, j);
                cnt[j]--;
            }
        }

        const curBigInt = BigInt(cur);
        res = Number((BigInt(res) + curBigInt * curBigInt) % BigInt(MOD));
    }

    return res;
}