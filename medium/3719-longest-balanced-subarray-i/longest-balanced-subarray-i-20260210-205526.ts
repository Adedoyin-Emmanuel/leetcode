function longestBalanced(nums: number[]): number {
    let result = 0;
    const n = nums.length;

    for (let i = 0; i < n - 1; i++) {

        const odd = new Set<number>();
        const even = new Set<number>();

        if(n - i <= result) break;

        for (let j = i; j < n; j++) {

            if (nums[j] % 2 === 0) {
                even.add(nums[j]);
            } else {
                odd.add(nums[j]);
            }

            if (even.size == odd.size) {
                result = Math.max(result, j - i + 1);
            }
        }
    }

    return result;
};