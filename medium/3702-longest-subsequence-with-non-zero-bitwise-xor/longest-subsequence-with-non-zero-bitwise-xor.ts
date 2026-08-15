function longestSubsequence(nums: number[]): number {
    const num: number = nums.length;
    let totalXor: number = 0;
    let allZero: boolean = true;

    for (const x of nums) {
        totalXor ^= x;
        if (x > 0) {
            allZero = false;
        }
    }

    if (totalXor > 0) {
        return num;
    }

    return allZero ? 0 : num - 1;
}