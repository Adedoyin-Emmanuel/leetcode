function binaryGap(n: number): number {
    let a = [];
    let t = 0;

    for(let i = 0; i < 32; i++){
        if(((n >> i) & 1) != 0){
            a[t++] = i;
        }
    }

    let answer = 0;

    for(let i = 0; i < t - 1; i++){
        answer = Math.max(answer, a[i + 1] - a[i]);
    }

    return answer;
};