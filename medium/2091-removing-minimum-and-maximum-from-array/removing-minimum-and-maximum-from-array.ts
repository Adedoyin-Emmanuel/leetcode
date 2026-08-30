function minimumDeletions(nums: number[]): number {
    const n = nums.length;

    let minidx = 0,
        maxidx = 0;
    for (let i = 0; i < n; i++) {
        if (nums[i] < nums[minidx]) {
            minidx = i;
        }
        if (nums[i] > nums[maxidx]) {
            maxidx = i;
        }
    }
    const l = Math.min(minidx, maxidx);
    const r = Math.max(minidx, maxidx); 

    return Math.min(r + 1, n - l, l + 1 + n - r);
}