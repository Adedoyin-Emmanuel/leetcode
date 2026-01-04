// Last updated: 1/4/2026, 8:47:51 AM
// This shouldn't be regarded as medium, it is actually simple
1function sumFourDivisors(nums: number[]): number {
2    /**
3        This one is quite straightforward but still a bit technical 
4
5        so in my understanding, we have an array of numbers,
6
7        and in that arary of numbers, we should retunr the sum of divisors of 
8
9        the integers in that array that have exactly four divisors, if there
10
11        isn't such in the array, we should return 0
12
13        So the first hint is saying I should find the divisors of each element 
14
15        in the array
16
17        The second hint is saying I only need to loop to the square root of a 
18
19        number to find its divisors.
20
21
22        Things I had to look up:
23
24        As a pure  nerd, first things first, let me look up the meaning of divisor
25
26        So a divisor is a number that divides another number to produce a result
27
28        So now the next question is how do I get the divisors for a particular
29
30        number. And hint 2 is telling me I only need to loop to the square root 
31
32        of a number to find its divisors.
33
34        So I think this sould be relatively simple, the hint has helped me
35
36        discover a trick lol. So this is what we've to do.
37
38
39        First, we declare a set that holds the divisors of the currrent iteration
40        
41        value.
42
43        Now how do we find the divisors of the current iteration value? The hint
44        
45        already told us we have to loop to the square root of that number and then
46
47        check if the number is divisible by the index of the loop and then store
48
49        the result and the divisor in the set. We can then plug in our submission 
50
51        logic to see which of the numbers have exactly 4 divisors and then just 
52
53        return the sum of the divisors.
54     */
55
56     
57    let sum = 0;
58
59     for(let i = 0; i < nums.length; i ++){
60        const currentNumber = nums[i];
61        const divisorsSet = new Set<number>();
62        const squareRoot = Math.floor(Math.sqrt(nums[i]));
63
64        for(let j = 1; j <= squareRoot; j++){
65
66          
67            /**
68                Check if the curent number can be divided by the current index
69
70                If set, store the divisor and the quotient too.
71             */
72            if(currentNumber % j == 0){
73
74               
75
76                /**
77                    Let's take into consideration perfect squares. 
78                    My Set handles this but let's just do it with the logic
79                 */
80
81                 if(j * j === currentNumber){
82                    divisorsSet.add(j);
83                 }else{
84                    const quotient = currentNumber  / j;
85                    divisorsSet.add(quotient);
86                    divisorsSet.add(j);
87                 }
88                
89                if(divisorsSet.size > 4) break;
90            }
91
92        }
93
94        /**
95            We can then check if the divisorSet size if 4 and then return the
96            sum
97         */
98        if(divisorsSet.size === 4){
99            for(const n of divisorsSet){
100                sum += n;
101            }
102        }
103 
104     }
105
106     return sum;
107};