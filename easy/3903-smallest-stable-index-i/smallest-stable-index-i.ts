function firstStableIndex(nums: number[], k: number): number {
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        let maxValue = nums[i];
        let minValue = nums[i];
        for (let j = 0; j < i; j++) {
            maxValue = Math.max(maxValue, nums[j]);
        }
        for (let j = i + 1; j < n; j++) {
            minValue = Math.min(minValue, nums[j]);
        }
        if (maxValue - minValue <= k) {
            return i;
        }
    }
    return -1;
}