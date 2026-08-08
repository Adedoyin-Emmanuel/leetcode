function validSequence(word1: string, word2: string): number[] {
    let n = word1.length,
        m = word2.length;
    let last = new Array(m).fill(-1);
    let j = m - 1;
    for (let i = n - 1; i >= 0; --i) {
        if (j >= 0 && word1[i] === word2[j]) {
            last[j] = i;
            j -= 1;
        }
    }
    let res = [];
    let skip = 0;
    j = 0;
    for (let i = 0; i < n; ++i) {
        if (j === m) break;
        if (
            word1[i] === word2[j] ||
            (skip === 0 && (j === m - 1 || i < last[j + 1]))
        ) {
            skip += word1[i] !== word2[j] ? 1 : 0;
            res.push(i);
            j += 1;
        }
    }
    return j === m ? res : [];
}