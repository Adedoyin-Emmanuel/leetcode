// Last updated: 1/26/2026, 11:20:04 PM
1function minimumAbsDifference(arr: number[]): number[][] {
2    /**
3        Humm, I've noticed a pattern here, I've been solving sorting questions
4        recently, and most of them are simple. 
5
6        Now, let's get this. 
7
8        First things first, we need to sort this array, 
9        and then get the minimum absolute difference 
10     */
11
12     let minAbsDifference = Infinity;
13     const result = [];
14     const sortedArray = arr.sort((a, b) => a - b);
15
16
17     for(let i = 0; i < arr.length - 1; i++){
18        const currentNumber = sortedArray[i];
19        const nextNumber = sortedArray[i + 1];
20
21        const difference = nextNumber - currentNumber;
22        minAbsDifference = Math.min(difference, minAbsDifference);
23
24        
25    }
26
27    for(let i = 0; i < arr.length - 1; i++){
28        const currentNumber = sortedArray[i];
29        const nextNumber = sortedArray[i + 1];
30        const difference = nextNumber - currentNumber;
31
32        if(difference == minAbsDifference){
33            result.push([currentNumber, nextNumber]);
34        }
35    }
36
37
38    return result;
39};  