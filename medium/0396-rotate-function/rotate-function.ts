const maxRotateFunction = function (nums: number[]) {
    let f = 0,
        n = nums.length,
        numSum = _.sum(nums);
    for (let i = 0; i < n; i++) {
        f += i * nums[i];
    }
    let res = f;
    for (let i = n - 1; i > 0; i--) {
        f += numSum - n * nums[i];
        res = Math.max(res, f);
    }
    return res;
};