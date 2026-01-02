// Last updated: 1/2/2026, 4:11:40 AM
// Wow, I'm getting better, I solved this in less than 10 mins. Easy peeazy.
1function repeatedNTimes(nums: number[]): number {
2    /**
3        Okay, so I see Ifihan also writes her thought process so I think I will do that here too. I also think I should add the things I had to look up while solving this question.
4
5        I'm thinking we don't even need to scan through the array before we find the n repeated number. We can actually do this.
6
7        1. Have a set that holds the numbers that we've seen
8        2. On each iteration, we check if the set already has the number we're currently iterating at, if yes we return that number.
9        Best case scenerio, we find the number before the end of the array, worst case scenerio, we find the duplicate at the array end, be that as it may, my proposed solution should work.
10
11        Things I had to look up:
12
13        1. What method in a set do I use to add a new element, funny I know this but it skipped my head. 
14     */
15
16     let duplicate = 0;
17     const seen = new Set<number>();
18
19     for(let i = 0; i < nums.length; i ++){
20        //check if the set has the current value, if yes return that value.
21        if(seen.has(nums[i])){
22            duplicate = nums[i];
23            break;
24        }
25
26        seen.add(nums[i]);
27     }
28
29     return duplicate;
30};