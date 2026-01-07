// Last updated: 1/8/2026, 12:14:14 AM
public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        /**
            I've actually did this in TypeScript yesterday so I will be jumping
            straight to solution.

            The basic trick is this.

            Instead of trying to bruteforce the solution.

            We can simply note the current value while looping, 

            check what number will complement that value to get the target.

            and then check if we've seen that number before, if yes, we break 

            and return that index of both.
        */
        
        /*
            First we create a map that holds the value and index of the seen
            numbers
        */

        var seen = new Dictionary<int, int>();

        for(int i = 0; i < nums.Length; i++){
            int currentNumber = nums[i];
            int complement = target - currentNumber;

            /**
                We then check if we've seen the complement before
            **/
            if(seen.ContainsKey(complement)){
                seen.TryGetValue(complement, out int index);
                int[] resultArray = new int[] {index, i};

                return resultArray;
            }

            if(!seen.ContainsKey(nums[i])){
                 seen.Add(nums[i], i);
            }
        }

        return new int[0];
    }
}