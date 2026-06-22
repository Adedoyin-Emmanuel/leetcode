function maxNumberOfBalloons(text: string): number {
    const freq: number[] = Array(26).fill(0);

    for (const c of text) {
        freq[c.charCodeAt(0) - 97]++;
    }

    const countB = freq['b'.charCodeAt(0) - 97];
    const countA = freq['a'.charCodeAt(0) - 97];
    const countL = Math.floor(freq['l'.charCodeAt(0) - 97] / 2);
    const countO = Math.floor(freq['o'.charCodeAt(0) - 97] / 2);
    const countN = freq['n'.charCodeAt(0) - 97];
    
    return Math.min(countB, countA, countL, countO, countN);
};