function constructTransformedArray(nums: number[]): number[] {
    const n = nums.length;
    const result: number[] = new Array(n);

    for (let i = 0; i < n; i++) {
        const newIndex = ((i + nums[i]) % n + n) % n;
        result[i] = nums[newIndex];
    }

    return result;
}
