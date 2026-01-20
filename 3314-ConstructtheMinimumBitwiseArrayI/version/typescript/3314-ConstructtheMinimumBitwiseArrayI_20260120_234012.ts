// Last updated: 1/20/2026, 11:40:12 PM
// Get in joor
1function minBitwiseArray(nums: number[]): number[] {
2    /**
3        Ah easy keh? Ki la ri gbo?
4
5        This should be relatively simple, let's see.
6
7        I'm a bit confused about the bitwise operators, I've to look into it.
8     */
9
10     let result = [];
11
12     for(let i = 0; i < nums.length; i++){
13        const currentNumber = nums[i];
14
15        if(currentNumber == 2){
16            result.push(-1);
17            continue
18        }
19
20        let temp = currentNumber;
21        let trailingOnes = 0;
22
23        while((temp & 1) == 1){
24            trailingOnes += 1;
25            temp = temp >> 1;
26        }
27
28        let candidate = currentNumber - (1 << (trailingOnes - 1));
29
30        result.push(candidate);
31     }
32
33     return result;
34};