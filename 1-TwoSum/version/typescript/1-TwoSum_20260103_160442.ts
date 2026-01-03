// Last updated: 1/3/2026, 4:04:42 PM
// Super simple. I'm getting better
1function twoSum(nums: number[], target: number): number[] {
2    /**
3        I'm going to approach this problem with a smart approach.
4
5        I don't know if it will work but the idea is to keep track of 
6
7        numbers we've seen and check which number in the array will complement it
8
9        so we can return that, we can keep our seen numbers in an array.
10
11        Things I had to look up 
12
13        1. 
14     */
15
16     /**
17        Let's handle edge cases
18
19      */
20
21     if(!nums || nums.length === 0){
22        return [];
23     }
24
25     const seen: number[] = [];
26     let compliment = 0;
27
28
29
30     for(let i = 0; i < nums.length; i ++){
31        /**
32            We can start with the first element, we've seen the first element
33            but then, we need to get the value that will complement it in the
34            array. And also keep that in mind.
35         */
36         let currentNumber = nums[i];
37         compliment = target - currentNumber;
38
39        /**
40            Check if we've seen the compliment before if yes, return the index 
41            of the compliment and the current element.
42         */
43         if(seen.includes(compliment)){
44            const indexOfCompliment = nums.indexOf(compliment);
45            const indexOfCurrentNumber = i;
46            const result = [];
47
48            result.push(indexOfCompliment);
49            result.push(indexOfCurrentNumber);
50        
51            return result;
52         }
53
54         seen.push(currentNumber);
55     }
56};