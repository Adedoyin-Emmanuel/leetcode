function maxMatrixSum(matrix: number[][]): number {
     let absMatrixSum = 0, totalNegatives = 0, minimumElement = Math.abs(matrix[0][0]);

     for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            const currentElement = matrix[i][j];
            absMatrixSum += Math.abs(currentElement);

            minimumElement = (Math.abs(currentElement) < Math.abs(minimumElement)) 
            ? currentElement : minimumElement;

            totalNegatives += currentElement < 0 ? 1 : 0;
        }
     }

     const isEven = !((totalNegatives % 2 ) > 0);
     const maxPossibleSum = absMatrixSum - (2 * Math.abs(minimumElement));

     return isEven ? absMatrixSum : maxPossibleSum;
};