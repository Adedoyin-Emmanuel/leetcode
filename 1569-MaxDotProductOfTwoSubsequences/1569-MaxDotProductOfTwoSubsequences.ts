// Last updated: 2/1/2026, 8:42:24 PM
function maxDotProduct(nums1: number[], nums2: number[]): number {
    /**
        The funny thing is that Leetcode hard questions are sometimes 
        simpler than their easy questions.

        I've solved 9 Leetcode problems up until now and I can see 2 tricks
        I've seen in other questions that I can apply here.

        1. I've to use dynamic programming here.
        2. Anywhere you see max, remember if negative integers can be in the data
        type, start your comparison from -Infinity.

        Now let me better understand this question. 

        We've 2 arrays, nums1, and nums2

        I'm to return the max dot product between non-empty subsequences of 
        nums1 and nums2 with the same length.

        And then we're told a subsequence of a array is a new array which is
        formed from the original array by deleting some(can be none) of the 
        characters / elements without disturbing the relative positions of the
        remaining elements or characters.

        In my own understanding, for each array, there are several subsequence that we
        can have, but the goal is to pick a non-empty subsequence of equal length in both arrays,
        such that the product is maximal.

        use (i, j),
        skip i,
        skip j

        So for every (i, j), there are 4 possible options
        1. nums1[i] * nums2[j]
        2. nums1[i] * nums2[j] + DP[i + 1][j + 1]
        3. DP[i + 1][j]
        4. DP[i][j + 1]
     */
     const DP: number[][] = [];

     // lets try to fill the array
     for(let i = 0; i < nums1.length + 1; i ++){
        DP.push([]);
        for(let j = 0; j < nums2.length + 1; j ++){
            DP[i].push(-Infinity);
        }
     }


     for(let i =  nums1.length - 1; i >= 0; i --){
        for(let j = nums2.length - 1; j >= 0; j --){
            const total1 = nums1[i] * nums2[j];
            const total2 = nums1[i] * nums2[j] + DP[i + 1][j + 1];
            const total3 = DP[i + 1][j];
            const total4 = DP[i][j + 1];

            DP[i][j] = Math.max(total1, total2, total3, total4);;
        }
     }

     return DP[0][0];
};