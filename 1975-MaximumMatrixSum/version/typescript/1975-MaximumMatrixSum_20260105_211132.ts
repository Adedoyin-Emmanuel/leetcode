// Last updated: 1/5/2026, 9:11:32 PM
// I'm getting better lol.
1function maxMatrixSum(matrix: number[][]): number {
2    /**
3        Oh lord. This should be classified under hard lol. 
4
5        But again , I believe I can solve this. I just need to understand the 
6        problem.
7
8        So we are given an n * n integer matrix this means we have 
9        an array of numbers in an array of numbers. That's simply what 
10        matrix means.
11
12        Now we're told we can do any of the following. 
13
14        1. We can choose any two adjacent element of matrix and multiply each 
15        of them by -1. 
16
17        And then two elements are considered to be adjacent if and only if they
18        share a border.
19
20        My goal is to maximize the summation of the matrix's elements. And I
21        should return the maximum sum of the matrix's elements udinr the operation
22        mentioned above.
23
24        So I think we need to figure out somethings, the first one is how to
25        determine if two elements are adjacent.
26
27        The hint 1 is saying we should use the operation so that each row has only
28        one negative number.
29
30        And hint 2 is saying if we have only one negative element, we cannot 
31        convert it to positive. 
32
33        So better understanding the problem. 
34
35        We can get the max possible sum by trying to eliminate negatives as we
36        can. The first step is getting the actual sum of all elements in the
37        matrix. 
38
39        And then we can now get the total negatives, if it is even, we can apply
40        the rule and they will all cancel out. If not, we can only leave a number
41        negative, and it has to be the smallest number to make sure we are getting
42        the max possible sum.
43
44        We've figured out how to get the sum. (done)
45        We need to figure how to get the total negatives. (done)
46        We need to check if the total negative(s) is even or odd. (done)
47        We need to figure out the minimum negative all negatives (not done)
48
49
50        The minimum negative number is actually the largest negative number in 
51        reality.
52
53
54        Things I had to look up:
55
56        1. What's the item in a matrix called (element)
57        2. 
58
59     */
60
61     let absMatrixSum = 0;
62     let totalNegatives = 0;
63     let minimumElement = Math.abs(matrix[0][0]);
64
65     for(let i = 0; i < matrix.length; i++){
66        for(let j = 0; j < matrix[i].length; j++){
67            const currentElement = matrix[i][j];
68            absMatrixSum += Math.abs(currentElement);
69
70            if(Math.abs(currentElement) < Math.abs(minimumElement)){
71                minimumElement = currentElement;
72            }
73
74            if(currentElement < 0){
75                totalNegatives += 1;
76            }
77            
78        }
79     }
80
81     const isEven = !((totalNegatives % 2 ) > 0);
82
83     if(isEven){
84        return absMatrixSum;
85     }
86
87     const maxPossibleSum = absMatrixSum - (2 * Math.abs(minimumElement));
88
89     return maxPossibleSum;
90
91};