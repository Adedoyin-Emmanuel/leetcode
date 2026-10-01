function minOperations(nums: number[], x: number): number {
     const totalSum = nums.reduce((acc, num) => acc + num, 0);
    const target = totalSum - x;

    if (target < 0) return -1;
    if (target === 0) return nums.length;

    let currentSum = 0;
    let maxLen = -1;
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        currentSum += nums[right];

        while (currentSum > target && left <= right) {
            currentSum -= nums[left];
            left++;
        }

        if (currentSum === target) {
            maxLen = Math.max(maxLen, right - left + 1);
        }
    }

    return maxLen === -1 ? -1 : nums.length - maxLen;
};