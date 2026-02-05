// Last updated: 2/5/2026, 8:10:24 AM
1function constructTransformedArray(nums: number[]): number[] {
2    const n = nums.length;
3    const result: number[] = new Array(n);
4
5    for (let i = 0; i < n; i++) {
6        const newIndex = ((i + nums[i]) % n + n) % n;
7        result[i] = nums[newIndex];
8    }
9
10    return result;
11}
12