function maximumProduct(nums: number[]): number {
    /**
        First idea is to sort the array
        and then pick the top 3 
        and smallest negatives and max
     */
     const length = nums.length;

     nums.sort((a, b) => a - b);

     let max1 = nums[length - 1];
     let max2 = nums[length - 2];
     let max3 = nums[length - 3];

     let min1 = nums[0];
     let min2 = nums[1];


     const maxProduct1 = max1 * max2 * max3;
     const maxProduct2 = min1 * min2 * max1;

     return Math.max(maxProduct1, maxProduct2);


};