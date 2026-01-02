// Last updated: 1/2/2026, 4:49:54 AM
1public class Solution {
2    public int RepeatedNTimes(int[] nums) {
3        /**
4            Let's see if I can do this with C# too. So the logic remains the same,
5
6            We don't need to loop through the entire Array, we just need to loop enough to find the duplicate and return it.
7
8            I must admit, I made a few rookie mistakes thinking I was writing Typescript
9
10            Things I had to lookup:
11
12            1. HashSet in C# and DotNet
13        **/
14
15        var seen = new HashSet<int>();
16
17        for(var i = 0; i < nums.Length; i++){
18            if(seen.Contains(nums[i])){
19                return nums[i];
20            }
21
22            seen.Add(nums[i]);
23        }
24
25        return 0;
26    }
27}