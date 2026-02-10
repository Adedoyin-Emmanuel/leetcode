function maxSumTrionic(nums: number[]): number {
    const n = nums.length;
    let p: number, q: number, j: number;
    let max_sum: number, sum: number, res: number;
    let ans: number = -Infinity;

    
    for (let i = 0; i < n; i++) {
        j = i + 1;
        res = 0;
        for (; j < n && nums[j - 1] < nums[j]; j++);
        p = j - 1;
        if (p === i) {
            continue;
        }
        res += nums[p] + nums[p - 1];
        for (; j < n && nums[j - 1] > nums[j]; j++) {
            res += nums[j];
        }
        q = j - 1;
        if (q === p || q === n - 1 || (j < n && nums[j] <= nums[q])) {
            i = q;
            continue;
        }
        res += nums[q + 1];
        max_sum = 0;
        sum = 0;
        for (let k = q + 2; k < n && nums[k] > nums[k - 1]; k++) {
            sum += nums[k];
            max_sum = Math.max(max_sum, sum);
        }
        res += max_sum;
        max_sum = 0;
        sum = 0;
        for (let k = p - 2; k >= i; k--) {
            sum += nums[k];
            max_sum = Math.max(max_sum, sum);
        }
        res += max_sum;
        ans = Math.max(ans, res);
        i = q - 1;
    }
    return ans;
}