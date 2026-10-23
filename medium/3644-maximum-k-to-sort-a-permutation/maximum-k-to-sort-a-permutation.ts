function sortPermutation(nums: number[]): number {
    const n = nums.length;
    let res = 2 ** 31 - 1;
    for (let i = 0; i < n; ++i) {
        if (nums[i] === i) {
            continue;
        }
        res &= nums[i];
    }
    return res === 2 ** 31 - 1 ? 0 : res;
}