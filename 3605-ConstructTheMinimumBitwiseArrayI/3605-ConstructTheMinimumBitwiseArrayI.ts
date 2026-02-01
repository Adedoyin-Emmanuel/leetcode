// Last updated: 2/1/2026, 8:42:13 PM
function minBitwiseArray(nums: number[]): number[] {
    /**
        Ah easy keh? Ki la ri gbo?

        This should be relatively simple, let's see.

        I'm a bit confused about the bitwise operators, I've to look into it.
     */

     let result = [];

     for(let i = 0; i < nums.length; i++){
        const currentNumber = nums[i];

        if(currentNumber == 2){
            result.push(-1);
            continue
        }

        let temp = currentNumber;
        let trailingOnes = 0;

        while((temp & 1) == 1){
            trailingOnes += 1;
            temp = temp >> 1;
        }

        let candidate = currentNumber - (1 << (trailingOnes - 1));

        result.push(candidate);
     }

     return result;
};