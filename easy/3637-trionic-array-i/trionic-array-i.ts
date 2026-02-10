function isTrionic(nums: number[]): boolean {
    let index = 0;
    let peak = 0;
    let valley = 0;
    const end = nums.length - 1;

    while (nums[index] < nums[index + 1]) {
        index += 1;
    }

    if (index === 0 || index === end) return false;

    peak = index;

    while (nums[index] > nums[index + 1]) {
        index += 1;
    }
    if (index === peak || index === end) return false;
    
    valley = index;

    while (nums[index] < nums[index + 1]) {
        index += 1;
    }

    return index == end;
};