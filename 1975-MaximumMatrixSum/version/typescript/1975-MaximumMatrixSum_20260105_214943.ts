// Last updated: 1/5/2026, 9:49:43 PM
// Trying to solve the problem in fewer lines of code.
1function maxMatrixSum(matrix: number[][]): number {
2     let absMatrixSum = 0, totalNegatives = 0, minimumElement = Math.abs(matrix[0][0]);
3
4     for(let i = 0; i < matrix.length; i++){
5        for(let j = 0; j < matrix[i].length; j++){
6            const currentElement = matrix[i][j];
7            absMatrixSum += Math.abs(currentElement);
8
9            minimumElement = (Math.abs(currentElement) < Math.abs(minimumElement)) 
10            ? currentElement : minimumElement;
11
12            totalNegatives += currentElement < 0 ? 1 : 0;
13        }
14     }
15
16     const isEven = !((totalNegatives % 2 ) > 0);
17     const maxPossibleSum = absMatrixSum - (2 * Math.abs(minimumElement));
18
19     return isEven ? absMatrixSum : maxPossibleSum;
20};