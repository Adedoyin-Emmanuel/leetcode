// Last updated: 1/8/2026, 12:14:16 AM


function twoSum(nums: number[], target: number): number[] {
    /**
        I'm going to approach this problem with a smart approach.

        I don't know if it will work but the idea is to keep track of 

        numbers we've seen and check which number in the array will complement it

        so we can return that, we can keep our seen numbers in an array.

        Things I had to look up 

        1. 
     */

     /**
        Let's handle edge cases

      */

     if(!nums || nums.length === 0){
        return [];
     }


    interface ISeen {
        value: number;
        index: number;
    }

     const seen: Map<number, ISeen> = new Map();
     let compliment = 0;



     for(let i = 0; i < nums.length; i ++){
        /**
            We can start with the first element, we've seen the first element
            but then, we need to get the value that will complement it in the
            array. And also keep that in mind.
         */
         let currentNumber = nums[i];
         compliment = target - currentNumber;

        /**
            Check if we've seen the compliment before if yes, return the index 
            of the compliment and the current element.
         */
        

         if(seen.has(compliment)){
            const found = seen.get(compliment);
            const indexOfCompliment = found.index;
            const indexOfCurrentNumber = i;
            const result = [];

            result.push(indexOfCompliment);
            result.push(indexOfCurrentNumber);
        
            return result;
         }

         seen.set(currentNumber, {
            value: currentNumber,
            index: i
         });
     }
};