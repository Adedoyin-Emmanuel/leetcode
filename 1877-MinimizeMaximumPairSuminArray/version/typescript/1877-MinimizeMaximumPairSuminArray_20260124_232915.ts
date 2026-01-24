// Last updated: 1/24/2026, 11:29:15 PM
1function minPairSum(nums: number[]): number {
2    const sortedNums = nums.sort((num1, num2) => num1 - num2);
3
4    let maxSum = 0;
5    let leftPointer = 0, rightPointer = sortedNums.length - 1;
6
7    while(leftPointer < rightPointer){
8        maxSum = Math.max(maxSum, nums[leftPointer] + nums[rightPointer]);;
9
10        leftPointer += 1;
11        rightPointer -= 1;
12    }
13
14    return maxSum;
15};