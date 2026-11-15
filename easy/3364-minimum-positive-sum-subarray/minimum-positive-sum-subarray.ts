
function minimumSumSubarray(nums: number[], l: number, r: number): number {
    const n = nums.length;
    let ans = Infinity;

    for (let size = l; size <= r; size++) {
        let sum = 0;

        // Calculate first window
        for (let i = 0; i < size; i++) {
            sum += nums[i];
        }

        if (sum > 0) {
            ans = Math.min(ans, sum);
        }

        // Slide the window
        for (let i = size; i < n; i++) {
            sum += nums[i];
            sum -= nums[i - size];

            if (sum > 0) {
                ans = Math.min(ans, sum);
            }
        }
    }

    return ans === Infinity ? -1 : ans;
}