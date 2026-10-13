function maxAlternatingSum(nums: number[]): number {
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        nums[i] *= nums[i];
    }

    nums.sort((a, b) => a - b);

    let ans = 0;

    for (let i = 0; i < Math.floor(n / 2); i++) {
        ans -= nums[i];
    }

    for (let i = Math.floor(n / 2); i < n; i++) {
        ans += nums[i];
    }
    
    return ans;
}