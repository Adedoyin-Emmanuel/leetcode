function findTheString(lcp: number[][]): string {
    const n = lcp.length;
    const word: string[] = new Array(n).fill("");
    let current = "a".charCodeAt(0);

    for (let i = 0; i < n; i++) {
        if (!word[i]) {
            if (current > "z".charCodeAt(0)) {
                return "";
            }
            word[i] = String.fromCharCode(current);
            for (let j = i + 1; j < n; j++) {
                if (lcp[i][j] > 0) {
                    word[j] = word[i];
                }
            }
            current++;
        }
    }

    // verify if the constructed string meets the LCP matrix requirements
    for (let i = n - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (word[i] !== word[j]) {
                if (lcp[i][j] !== 0) {
                    return "";
                }
            } else {
                if (i === n - 1 || j === n - 1) {
                    if (lcp[i][j] !== 1) {
                        return "";
                    }
                } else {
                    if (lcp[i][j] !== lcp[i + 1][j + 1] + 1) {
                        return "";
                    }
                }
            }
        }
    }

    return word.join("");
}