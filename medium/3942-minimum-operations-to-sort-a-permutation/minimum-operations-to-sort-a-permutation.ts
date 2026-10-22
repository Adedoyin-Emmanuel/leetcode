function minOperations(nums: number[]): number {
    const n = nums.length;
    if (n === 1) {
        return 0;
    }

    const start = nums.indexOf(0);
    let asc = true;
    let desc = true;

    for (let i = 1; i < n; i++) {
        const value = nums[(start + i) % n];

        if (value !== i) {
            asc = false;
        }
        if (value !== n - i) {
            desc = false;
        }

        if (!asc && !desc) {
            return -1;
        }
    }

    if (asc) {
        return Math.min(start, n - start + 2);
    }

    return Math.min(n - start, start + 2);
}