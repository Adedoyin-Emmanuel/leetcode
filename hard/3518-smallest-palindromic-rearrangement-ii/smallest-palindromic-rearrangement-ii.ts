const C = (n: number, m: number, k: number) => {
    let res = 1;
    m = Math.min(m, n - m);

    for (let i = 1; i <= m; i++) {
        res = (res * (n - i + 1)) / i;
        if (res > k) {
            return k + 1;
        }
    }
    return res;
};

function smallestPalindrome(s: string, k: number): string {
    const partition = Math.floor(s.length / 2);
    const bucket = new Int32Array(26);

    for (let i = 0; i < partition; i++) {
        bucket[s.charCodeAt(i) - 97] += 1;
    }

    const permutations = (rem: number) => {
        let ways = 1;
        for (let i = 0; i < 26; i++) {
            if (bucket[i] === 0) {
                continue;
            }

            ways *= C(rem, bucket[i], k);
            if (ways > k) {
                break;
            }
            rem -= bucket[i];
        }
        return ways;
    };

    let left = "";
    let startIndex = 1;
    for (let pos = 0; pos < partition; pos++) {
        for (let i = 0; i < 26; i++) {
            if (bucket[i] === 0) {
                continue;
            }

            bucket[i] -= 1;

            const ways = permutations(partition - pos - 1);
            if (startIndex + ways > k) {
                left += String.fromCharCode(i + 97);
                break;
            }

            bucket[i] += 1;
            startIndex += ways;
        }
    }

    if (left.length < partition) {
        return "";
    }

    const mid = s.length % 2 !== 0 ? s[partition] : "";
    const right = left.split("").reverse().join("");

    return left + mid + right;
}