// Last updated: 1/22/2026, 3:25:35 AM
// Gggs
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
17
18        return true;
19     }
20
21     let minimumPairRemoval = 0;
22     
23     while(!isNonDecreasing(nums)){
24        let minSum = Infinity, minIndex = -1;
25
26        for(let i = 0; i < nums.length - 1; i++){
27            const currentNumber = nums[i], nextNumber = nums[i + 1];
28
29            let sum = currentNumber + nextNumber;
30
31            if(sum < minSum){
32                minSum =  sum;
33                minIndex = i;
34            }
35        }
36
37        nums[minIndex] = nums[minIndex] + nums[minIndex + 1];
38        nums.splice(minIndex + 1, 1);
39
40        minimumPairRemoval += 1;
41     }
42
43     return minimumPairRemoval;
44};