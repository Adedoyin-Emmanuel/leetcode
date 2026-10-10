function minSumSquareDiff(
    nums1: number[],
    nums2: number[],
    k1: number,
    k2: number,
): number {
    let k = k1 + k2;
    const n = nums1.length;
    let maxDif = 0;
    for (let i = 0; i < n; i++) {
        nums1[i] = Math.abs(nums1[i] - nums2[i]);
        maxDif = Math.max(maxDif, nums1[i]);
    }

    let l = 0,
        r = maxDif,
        res = 0;
    while (l <= r) {
        const mid = (l + r) >> 1;
        let sum = 0;
        for (const num of nums1) {
            sum += num > mid ? num - mid : 0;
        }
        if (sum <= k) {
            r = mid - 1;
            res = mid;
        } else {
            l = mid + 1;
        }
    }

    for (const num of nums1) {
        if (num > res) {
            k -= num - res;
        }
    }

    nums1.sort((a, b) => b - a);
    let ans = 0;
    for (const num of nums1) {
        let diff = Math.min(num, res);
        if (k > 0 && diff > 0) {
            diff--;
            k--;
        }
        ans += diff * diff;
    }
    return ans;
}