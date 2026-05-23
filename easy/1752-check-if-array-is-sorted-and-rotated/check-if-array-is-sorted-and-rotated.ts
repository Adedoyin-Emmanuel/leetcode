function check(nums: number[]): boolean {
    let drops = 0, n = nums.length;

    for(let i = 0; i < n; i++){
        if(nums[i] > nums[(i + 1 ) % n]){
            drops += 1;
        }
    }

    return drops <= 1;
};