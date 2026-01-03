// Last updated: 1/3/2026, 4:30:26 PM
// Refined solution using Map instead of array
1
2
3function twoSum(nums: number[], target: number): number[] {
4    /**
5        I'm going to approach this problem with a smart approach.
6
7        I don't know if it will work but the idea is to keep track of 
8
9        numbers we've seen and check which number in the array will complement it
10
11        so we can return that, we can keep our seen numbers in an array.
12
13        Things I had to look up 
14
15        1. 
16     */
17
18     /**
19        Let's handle edge cases
20
21      */
22
23     if(!nums || nums.length === 0){
24        return [];
25     }
26
27
28    interface ISeen {
29        value: number;
30        index: number;
31    }
32
33     const seen: Map<number, ISeen> = new Map();
34     let compliment = 0;
35
36
37
38     for(let i = 0; i < nums.length; i ++){
39        /**
40            We can start with the first element, we've seen the first element
41            but then, we need to get the value that will complement it in the
42            array. And also keep that in mind.
43         */
44         let currentNumber = nums[i];
45         compliment = target - currentNumber;
46
47        /**
48            Check if we've seen the compliment before if yes, return the index 
49            of the compliment and the current element.
50         */
51        
52
53         if(seen.has(compliment)){
54            const found = seen.get(compliment);
55            const indexOfCompliment = found.index;
56            const indexOfCurrentNumber = i;
57            const result = [];
58
59            result.push(indexOfCompliment);
60            result.push(indexOfCurrentNumber);
61        
62            return result;
63         }
64
65         seen.set(currentNumber, {
66            value: currentNumber,
67            index: i
68         });
69     }
70};