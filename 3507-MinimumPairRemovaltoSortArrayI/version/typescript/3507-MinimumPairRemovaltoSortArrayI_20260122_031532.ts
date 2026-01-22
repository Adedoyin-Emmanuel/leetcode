// Last updated: 1/22/2026, 3:15:32 AM
// Get in joor
1function minimumPairRemoval(nums: number[]): number {
2    /**
3        Okay, let's get straight to this, I'm feeling sleepy already.
4
5        The goal is to return the minimum number of operations needed to make the
6        array non-decreasing.
7
8        An array is said to be non-decreasing if each element is greater than or 
9        equal to its
10        previous element (if it exists)
11     */
12
13     function isNonDecreasing(nums: number[]): boolean {
14        for(let i = 0; i < nums.length - 1; i++){
15            if(nums[i] > nums[i + 1]) return false;
16        }
17        return true;
18     }
19
20     let minimumPairRemoval = 0;
21
22     while(!isNonDecreasing(nums)){
23        let minSum = Infinity;
24        let minIndex = -1;
25
26        for(let i = 0; i < nums.length - 1; i++){
27            const currentNumber = nums[i];
28            const nextNumber = nums[i + 1];
29
30            let sum = currentNumber + nextNumber;
31
32            if(sum < minSum){
33                minSum =  sum;
34                minIndex = i;
35            }
36        }
37
38        nums[minIndex] = nums[minIndex] + nums[minIndex + 1];
39        nums.splice(minIndex + 1, 1);
40
41        minimumPairRemoval += 1;
42     }
43
44     return minimumPairRemoval;
45};