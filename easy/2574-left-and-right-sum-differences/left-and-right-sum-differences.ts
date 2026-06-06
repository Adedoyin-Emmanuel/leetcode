function leftRightDifference(nums: number[]): number[] {
    const n = nums.length;
    const ans: number[] = new Array(n);

    let leftSum = 0;
    for (let i = 0; i < n; ++i) {
        ans[i] = leftSum;
        leftSum += nums[i];
    }

    let rightSum = 0;
    for (let i = n - 1; i >= 0; --i) {
        ans[i] = Math.abs(ans[i] - rightSum);
        rightSum += nums[i];
    }

    return ans;
}