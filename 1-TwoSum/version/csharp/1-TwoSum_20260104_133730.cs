// Last updated: 1/4/2026, 1:37:30 PM
// C# is really meant for enterprise apps man.
1public class Solution {
2    public int[] TwoSum(int[] nums, int target) {
3        /**
4            I've actually did this in TypeScript yesterday so I will be jumping
5            straight to solution.
6
7            The basic trick is this.
8
9            Instead of trying to bruteforce the solution.
10
11            We can simply note the current value while looping, 
12
13            check what number will complement that value to get the target.
14
15            and then check if we've seen that number before, if yes, we break 
16
17            and return that index of both.
18        */
19        
20        /*
21            First we create a map that holds the value and index of the seen
22            numbers
23        */
24
25        var seen = new Dictionary<int, int>();
26
27        for(int i = 0; i < nums.Length; i++){
28            int currentNumber = nums[i];
29            int complement = target - currentNumber;
30
31            /**
32                We then check if we've seen the complement before
33            **/
34            if(seen.ContainsKey(complement)){
35                seen.TryGetValue(complement, out int index);
36                int[] resultArray = new int[] {index, i};
37
38                return resultArray;
39            }
40
41            if(!seen.ContainsKey(nums[i])){
42                 seen.Add(nums[i], i);
43            }
44        }
45
46        return new int[0];
47    }
48}