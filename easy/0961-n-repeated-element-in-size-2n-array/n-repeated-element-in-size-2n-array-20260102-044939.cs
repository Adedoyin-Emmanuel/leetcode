public class Solution {
    public int RepeatedNTimes(int[] nums) {
        /**
            Let's see if I can do this with C# too. So the logic remains the same,

            We don't need to loop through the entire Array, we just need to loop enough to find the duplicate and return it.

            I must admit, I made a few rookie mistakes thinking I was writing Typescript

            Things I had to lookup:

            1. HashSet in C# and DotNet
        **/

        var seen = new HashSet<int>();

        for(var i = 0; i < nums.Length; i++){
            if(seen.Contains(nums[i])){
                return nums[i];
            }

            seen.Add(nums[i]);
        }

        return 0;
    }
}