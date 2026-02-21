const isSmallPrime = (num: number) => {
    return (num === 2 || num === 3 || num === 5 || num === 7 || num === 11 || num === 13 || num === 17 || num === 19);
}

const bitCount = (x: number): number => {
    let count = 0;
    while (x !== 0) {
        x &= (x - 1);
        count++;
    }
    return count;
}

function countPrimeSetBits(left: number, right: number): number {
    let answer = 0;

    for (let i = left; i <= right; i++) {
        if (isSmallPrime(bitCount(i))){
            answer += 1;
        }
    }

    return answer;

};