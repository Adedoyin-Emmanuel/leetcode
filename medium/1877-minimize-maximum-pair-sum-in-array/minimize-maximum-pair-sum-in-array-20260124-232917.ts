function minPairSum(nums: number[]): number {
    const sortedNums = nums.sort((num1, num2) => num1 - num2);

    let maxSum = 0;
    let leftPointer = 0, rightPointer = sortedNums.length - 1;

    while(leftPointer < rightPointer){
        maxSum = Math.max(maxSum, nums[leftPointer] + nums[rightPointer]);;

        leftPointer += 1;
        rightPointer -= 1;
    }

    return maxSum;
};