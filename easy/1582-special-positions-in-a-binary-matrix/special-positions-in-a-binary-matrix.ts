function numSpecial(mat: number[][]): number {
    let numberOfSpecialPositions = 0;
    const matrixLength = mat.length;
    let rowCount = new Array(matrixLength).fill(0);
    let colCount = new Array(mat[0].length).fill(0);

    for(let i = 0; i < matrixLength; i++){
        for(let j = 0; j < mat[i].length; j++){
            if(mat[i][j] == 1){
                rowCount[i] += 1;
                colCount[j] += 1;
            }
        }
    }

    for(let i = 0; i < matrixLength; i++){
        for(let j = 0; j < mat[i].length; j++){
            if(mat[i][j] === 1 && rowCount[i] === 1 && colCount[j] === 1){
                numberOfSpecialPositions += 1;
            }
        }
    }

    return numberOfSpecialPositions;
};