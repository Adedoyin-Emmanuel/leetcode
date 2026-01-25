// Last updated: 1/25/2026, 10:59:34 PM
// GGs
1function minimumDifference(nums: number[], k: number): number {
2    /**
3        This is very similar to what I solved yesterday, where I had to use 2 
4        pointers.
5
6        Intersting. Let me get the mental model. I might even need the 2 pointer 
7        again here
8
9
10     */
11
12     const windowSize = k;
13     let minNumber = Infinity;
14     const sortedNumbers = nums.sort((a, b) => a - b);
15
16     for(let i = 0; i <= sortedNumbers.length - k; i++){
17        let difference = sortedNumbers[i + k - 1] - sortedNumbers[i];
18        
19        minNumber = Math.min(minNumber, difference);
20     }
21
22
23     return minNumber;
24};