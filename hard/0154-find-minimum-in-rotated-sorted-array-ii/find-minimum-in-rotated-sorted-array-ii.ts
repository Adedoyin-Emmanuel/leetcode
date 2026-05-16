function findMin(nums: number[]): number {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        // minimum is in the right half
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        }

        // minimum is in left half (including mid)
        else if (nums[mid] < nums[right]) {
            right = mid;
        }

        // duplicates, can't determine
        else {
            right--;
        }
    }

    return nums[left];
}