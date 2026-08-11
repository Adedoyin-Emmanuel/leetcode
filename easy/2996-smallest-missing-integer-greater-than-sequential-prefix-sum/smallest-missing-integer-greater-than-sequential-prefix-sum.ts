function missingInteger(nums: number[]): number {
    const n = nums.length;
    const numSet = new Set(nums);
    let total = nums[0];

    for (let i = 1; i < n; i++) {
        if (nums[i] === nums[i - 1] + 1) {
            total += nums[i];
        } else {
            break;
        }
    }

    while (numSet.has(total)) {
        total += 1;
    }

    return total;
}