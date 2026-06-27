function maximumLength(nums: number[]): number {
    const cnt = new Map<number, number>();

    for (const num of nums) {
        cnt.set(num, (cnt.get(num) ?? 0) + 1);
    }

    // ans is at least the number of occurrences of 1, rounded down to an odd number
    const oneCnt = cnt.get(1) ?? 0;
    let ans = oneCnt % 2 ? oneCnt : oneCnt - 1;

    cnt.delete(1);

    for (const num of cnt.keys()) {
        let res = 0;
        let x = num;

        while (cnt.has(x) && cnt.get(x)! > 1) {
            res += 2;
            x *= x;
        }

        ans = Math.max(ans, res + (cnt.has(x) ? 1 : -1));
    }

    return ans;
}