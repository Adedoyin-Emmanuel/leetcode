function minBitwiseArray(nums: number[]): number[] {
    /**
        Just as expected lmao. I knew today's question will be part 2 of
        yesterday's question.

        Low-key waking up to solve Leetcode problems everyday gives me dopamine boost

        Now let's get to it, no time.

        The goal of this problem is to construct the minimum bitwise 
        array.

        This is very similar to yesterdays' solution, I just have to 
        unset the previous bit
     */

     let result = [];

     for(let i = 0; i < nums.length; i++){
        const currentNumber = nums[i];

        if(currentNumber % 2 === 0){
            result.push(-1);
            continue;
        }


        let candidate = currentNumber;
        let bit = 0;

        while(((candidate >> bit) & 1) == 1){
            bit += 1;
        }

        candidate = candidate ^ (1 << (bit - 1));

        result.push(candidate);
     }

     return result;
};