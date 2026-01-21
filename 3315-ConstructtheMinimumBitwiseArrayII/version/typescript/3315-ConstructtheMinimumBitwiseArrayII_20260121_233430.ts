// Last updated: 1/21/2026, 11:34:30 PM
// Get in broski
1function minBitwiseArray(nums: number[]): number[] {
2    /**
3        Just as expected lmao. I knew today's question will be part 2 of
4        yesterday's question.
5
6        Low-key waking up to solve Leetcode problems everyday gives me dopamine boost
7
8        Now let's get to it, no time.
9
10        The goal of this problem is to construct the minimum bitwise 
11        array.
12
13        This is very similar to yesterdays' solution, I just have to 
14        unset the previous bit
15     */
16
17     let result = [];
18
19     for(let i = 0; i < nums.length; i++){
20        const currentNumber = nums[i];
21
22        if(currentNumber % 2 === 0){
23            result.push(-1);
24            continue;
25        }
26
27
28        let candidate = currentNumber;
29        let bit = 0;
30
31        while(((candidate >> bit) & 1) == 1){
32            bit += 1;
33        }
34
35        candidate = candidate ^ (1 << (bit - 1));
36
37        result.push(candidate);
38     }
39
40     return result;
41};