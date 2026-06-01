function isGood(nums: number[]): boolean {
    nums.sort((a, b) => a - b);
    const n = nums.length - 1;
    
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return false;
        }
    }
    return nums[n] === n;
}