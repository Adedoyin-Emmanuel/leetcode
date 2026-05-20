function findThePrefixCommonArray(A: number[], B: number[]): number[] {

    const n = A.length;
    const frequency = Array(n + 1).fill(0);
    const C = Array(n).fill(0);
    let common = 0;

    for(let i = 0; i < n; i++){
        const x = A[i], y = B[i];

        frequency[x] ++;
        if(frequency[x] == 2){
            common++;
        }

        frequency[y] ++;
        if(frequency[y] == 2){
            common++;
        }

        C[i] = common;
    }

    return C;
};