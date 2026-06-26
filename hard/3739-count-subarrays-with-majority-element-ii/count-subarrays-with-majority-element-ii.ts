function countMajoritySubarrays(nums: number[], target: number): number {
    const n = nums.length;
    // represents the occurrence count of prefix sums -n, -(n-1), ..., 0, 1, ..., n, with index offset by n.
    const pre = new Array<number>(n * 2 + 1).fill(0);
    pre[n] = 1;
    let cnt = n;
    let ans = 0,
        presum = 0;
    for (let i = 0; i < n; ++i) {
        if (nums[i] === target) {
            presum += pre[cnt];
            ++cnt;
            ++pre[cnt];
        } else {
            --cnt;
            presum -= pre[cnt];
            ++pre[cnt];
        }
        ans += presum;
    }
    return ans;
}