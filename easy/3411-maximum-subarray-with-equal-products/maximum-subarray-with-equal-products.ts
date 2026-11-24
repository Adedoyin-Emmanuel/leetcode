function maxLength(nums: number[]): number {
    let res = 0;
    const gcd = (a: number, b: number): number => {
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return a;
    };

    for (let i = 0; i < nums.length; i++) {
        let prodVal = nums[i];
        let gcdVal = nums[i];
        let lcmVal = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            prodVal = prodVal * nums[j];
            gcdVal = gcd(gcdVal, nums[j]);
            lcmVal = (lcmVal * nums[j]) / gcd(lcmVal, nums[j]);
            if (prodVal > gcdVal * lcmVal) {
                break;
            }
            if (prodVal === gcdVal * lcmVal) {
                res = Math.max(res, j - i + 1);
            }
        }
    }
    return res;
}