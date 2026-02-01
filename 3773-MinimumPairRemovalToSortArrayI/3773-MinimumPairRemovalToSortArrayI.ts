// Last updated: 2/1/2026, 8:42:05 PM
function minimumPairRemoval(nums: number[]): number {
    /**
        Okay, let's get straight to this, I'm feeling sleepy already.

        The goal is to return the minimum number of operations needed to make the
        array non-decreasing.

        An array is said to be non-decreasing if each element is greater than or 
        equal to its
        previous element (if it exists)
     */

     function isNonDecreasing(nums: number[]): boolean {
        for(let i = 0; i < nums.length - 1; i++){
            if(nums[i] > nums[i + 1]) return false;
        }

        return true;
     }

     let minimumPairRemoval = 0;
     
     while(!isNonDecreasing(nums)){
        let minSum = Infinity, minIndex = -1;

        for(let i = 0; i < nums.length - 1; i++){
            const currentNumber = nums[i], nextNumber = nums[i + 1];

            let sum = currentNumber + nextNumber;

            if(sum < minSum){
                minSum =  sum;
                minIndex = i;
            }
        }

        nums[minIndex] = nums[minIndex] + nums[minIndex + 1];
        nums.splice(minIndex + 1, 1);

        minimumPairRemoval += 1;
     }

     return minimumPairRemoval;
};