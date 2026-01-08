// Last updated: 1/8/2026, 9:29:21 AM
// Get in joor
1function maxDotProduct(nums1: number[], nums2: number[]): number {
2    /**
3        The funny thing is that Leetcode hard questions are sometimes 
4        simpler than their easy questions.
5
6        I've solved 9 Leetcode problems up until now and I can see 2 tricks
7        I've seen in other questions that I can apply here.
8
9        1. I've to use dynamic programming here.
10        2. Anywhere you see max, remember if negative integers can be in the data
11        type, start your comparison from -Infinity.
12
13        Now let me better understand this question. 
14
15        We've 2 arrays, nums1, and nums2
16
17        I'm to return the max dot product between non-empty subsequences of 
18        nums1 and nums2 with the same length.
19
20        And then we're told a subsequence of a array is a new array which is
21        formed from the original array by deleting some(can be none) of the 
22        characters / elements without disturbing the relative positions of the
23        remaining elements or characters.
24
25        In my own understanding, for each array, there are several subsequence that we
26        can have, but the goal is to pick a non-empty subsequence of equal length in both arrays,
27        such that the product is maximal.
28
29        use (i, j),
30        skip i,
31        skip j
32
33        So for every (i, j), there are 4 possible options
34        1. nums1[i] * nums2[j]
35        2. nums1[i] * nums2[j] + DP[i + 1][j + 1]
36        3. DP[i + 1][j]
37        4. DP[i][j + 1]
38     */
39     const DP: number[][] = [];
40
41     // lets try to fill the array
42     for(let i = 0; i < nums1.length + 1; i ++){
43        DP.push([]);
44        for(let j = 0; j < nums2.length + 1; j ++){
45            DP[i].push(-Infinity);
46        }
47     }
48
49
50     for(let i =  nums1.length - 1; i >= 0; i --){
51        for(let j = nums2.length - 1; j >= 0; j --){
52            const total1 = nums1[i] * nums2[j];
53            const total2 = nums1[i] * nums2[j] + DP[i + 1][j + 1];
54            const total3 = DP[i + 1][j];
55            const total4 = DP[i][j + 1];
56
57            DP[i][j] = Math.max(total1, total2, total3, total4);;
58        }
59     }
60
61     return DP[0][0];
62};