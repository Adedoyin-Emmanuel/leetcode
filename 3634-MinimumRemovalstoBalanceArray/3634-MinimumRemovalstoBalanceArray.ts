// Last updated: 2/6/2026, 11:57:29 PM
1function minRemoval(nums: number[], k: number): number {
2    /**
3        An array is considered balanced if the value of its maximum element is 
4        at most k times the minimum element.
5
6        I think this is straightforward.
7     */
8
9
10    nums.sort((a, b) => a - b);
11    let n = nums.length;
12    let i = 0;
13    let maxWindow = 0;
14
15
16    for (let j = 0; j < n; j++) {
17        while (nums[j] > k * nums[i]) {
18            i++;
19        }
20
21        maxWindow = Math.max(maxWindow, j - i + 1);
22    }
23    
24    return n - maxWindow;
25};