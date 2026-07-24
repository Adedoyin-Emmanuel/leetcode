function uniqueXorTriplets(nums: number[]): number {
    const n = nums.length;
    let m = 0;
    for (const v of nums) {
        m = Math.max(m, v);
    }
    let u = 1;
    while (u <= m) {
        u <<= 1;
    }
    const s: boolean[] = new Array(u).fill(false);
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            s[nums[i] ^ nums[j]] = true;
        }
    }
    const t: boolean[] = new Array(u).fill(false);
    for (let x = 0; x < u; x++) {
        if (!s[x]) {
            continue;
        }
        for (const v of nums) {
            t[x ^ v] = true;
        }
    }
    let ans = 0;
    for (const b of t) {
        if (b) {
            ans++;
        }
    }
    return ans;
}