function minimumDifference(nums: number[], k: number): number {
    /**
        This is very similar to what I solved yesterday, where I had to use 2 
        pointers.

        Intersting. Let me get the mental model. I might even need the 2 pointer 
        again here


     */

     const windowSize = k;
     let minNumber = Infinity;
     const sortedNumbers = nums.sort((a, b) => a - b);

     for(let i = 0; i <= sortedNumbers.length - k; i++){
        let difference = sortedNumbers[i + k - 1] - sortedNumbers[i];
        
        minNumber = Math.min(minNumber, difference);
     }


     return minNumber;
};