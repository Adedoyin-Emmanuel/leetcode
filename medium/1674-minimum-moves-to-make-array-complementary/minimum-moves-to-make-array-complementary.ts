function minMoves(nums: number[], limit: number): number {
    const n = nums.length;

    const sumCount = new Map<number, number>();
    const minArr: number[] = [];
    const maxArr: number[] = [];

    for (let i = 0; i < n / 2; i++) {
        const a = Math.min(nums[i], nums[n - 1 - i]);
        const b = Math.max(nums[i], nums[n - 1 - i]);

        const sum = a + b;
        sumCount.set(sum, (sumCount.get(sum) ?? 0) + 1);

        minArr.push(a);
        maxArr.push(b);
    }

    minArr.sort((x, y) => x - y);
    maxArr.sort((x, y) => x - y);

    const lowerBound = (arr: number[], target: number): number => {
        let left = 0,
            right = arr.length;
        while (left < right) {
            const mid = left + Math.floor((right - left) >>> 1);
            if (arr[mid] >= target) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    };

    let minOps = n;

    for (let c = 2; c <= 2 * limit; c++) {
        const addLeft = n / 2 - lowerBound(minArr, c);
        const addRight = lowerBound(maxArr, c - limit);

        const currentOps = n / 2 + addLeft + addRight - (sumCount.get(c) ?? 0);
        minOps = Math.min(minOps, currentOps);
    }

    return minOps;
}