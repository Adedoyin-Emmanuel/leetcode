// Last updated: 2/5/2026, 7:29:48 AM
1function constructTransformedArray(nums: number[]): number[] {
2    /**
3        Okay been a while I wrote my mind when leetcoding because the past weeks has been insane lol.
4
5        I've been building a tool that helps me leetcode better and I can't wait to share it with you.
6
7        But I think the concept here is fairly simple. All I see is a couple of if and else statements.
8
9        The hint already told us we are to simulate so we are going to do just that.
10
11
12        For each iteration, we've 3 conditions we want to account for.
13
14        1. nums[i] > 0
15        2. nums[i] < 0
16        3. nums[i] == 0
17
18        Now for each of those conditions, what are we doing?
19
20        For condition 
21
22        1. nums[i] > 0, we start at index i and move nums[i] steps to the right in the circular array.
23        And we set result[i] to the value of the index where we land.
24        2. nums[i] < 0, we start at index i and move to abs(nums[i]) steps left in the circular array. We then
25        set result[i] to the value of the index where we land.
26        3. nums[i] == 0, we set result[i] to nums[i]
27
28        And then finally, we return the result
29     */
30
31     let result = [];
32     let n = nums.length;
33
34     for(let i = 0; i < n; i++){
35        
36        if(nums[i] > 0){
37            const rightSteps = nums[i];
38            const newIndex = (i + rightSteps) % n;
39
40            result[i] = nums[newIndex];
41
42        }else if(nums[i] < 0){
43            const leftSteps = Math.abs(nums[i]);
44            const newIndex = ((i - leftSteps % n) + n) % n;
45
46            result[i] = nums[newIndex];
47
48        }else if(nums[i] === 0){
49            result[i] = nums[i];
50        }
51     }
52
53     return result;
54};