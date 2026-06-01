function separateDigits(nums: number[]): number[] {
    const res: number[] = [];
    for (const num of nums) {
        let x = num;
        const tmp: number[] = [];
        while (x > 0) {
            tmp.push(x % 10);
            x = Math.floor(x / 10);
        }
        for (let i = tmp.length - 1; i >= 0; i--) {
            res.push(tmp[i]);
        }
    }
    return res;
}