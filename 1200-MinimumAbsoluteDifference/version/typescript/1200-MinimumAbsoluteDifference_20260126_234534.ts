// Last updated: 1/26/2026, 11:45:34 PM
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
12     let result = [];
13     let minAbsDifference = Infinity;
14     const sortedArray = arr.sort((a, b) => a - b);
15
16
17     for(let i = 0; i < arr.length - 1; i++){
18        const currentNumber = sortedArray[i];
19        const nextNumber = sortedArray[i + 1];
20
21        const difference = nextNumber - currentNumber;
22
23        if(difference < minAbsDifference){
24            result = [];
25            minAbsDifference = difference;
26            result.push([currentNumber, nextNumber]);
27        }else if(difference === minAbsDifference){
28            result.push([currentNumber, nextNumber]);
29        }
30
31    }
32
33    return result;
34};  