function repeatedNTimes(nums: number[]): number {
    /**
        Okay, so I see Ifihan also writes her thought process so I think I will do that here too. I also think I should add the things I had to look up while solving this question.

        I'm thinking we don't even need to scan through the array before we find the n repeated number. We can actually do this.

        1. Have a set that holds the numbers that we've seen
        2. On each iteration, we check if the set already has the number we're currently iterating at, if yes we return that number.
        Best case scenerio, we find the number before the end of the array, worst case scenerio, we find the duplicate at the array end, be that as it may, my proposed solution should work.

        Things I had to look up:

        1. What method in a set do I use to add a new element, funny I know this but it skipped my head. 
     */

     let duplicate = 0;
     const seen = new Set<number>();

     for(let i = 0; i < nums.length; i ++){
        //check if the set has the current value, if yes return that value.
        if(seen.has(nums[i])){
            duplicate = nums[i];
            break;
        }

        seen.add(nums[i]);
     }

     return duplicate;
};