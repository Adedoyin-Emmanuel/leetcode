function lexPalindromicPermutation(s: string, target: string): string {
    const n = s.length;
    // Special case: length of 1
    if (n === 1) {
        return s > target ? s : "";
    }

    // Count the frequency of each character
    const cnt: number[] = new Array(26).fill(0);
    for (const c of s) {
        cnt[c.charCodeAt(0) - "a".charCodeAt(0)]++;
    }

    // Check if it can form a palindrome and record the characters with odd occurrences
    let oddChar: string = "";
    for (let i = 0; i < 26; i++) {
        if (cnt[i] % 2 === 1) {
            // More than one character appears an odd number of times, cannot form a palindrome
            if (oddChar !== "") {
                return "";
            }
            oddChar = String.fromCharCode("a".charCodeAt(0) + i);
        }
        cnt[i] = Math.floor(cnt[i] / 2); // It takes only half the characters to construct the left half
    }

    const prefix: string[] = [];

    const check = (c: string): boolean => {
        const left: string[] = [...prefix, c];
        for (let i = 25; i >= 0; i--) {
            for (let k = 0; k < cnt[i]; k++) {
                left.push(String.fromCharCode("a".charCodeAt(0) + i));
            }
        }

        const palindrome: string = [
            ...left,
            oddChar,
            ...left.slice().reverse(),
        ].join("");

        return palindrome > target;
    };

    // Construct the left part of each digit greedily
    for (let i = 0; i < Math.floor(n / 2); i++) {
        let found: boolean = false;
        // Try to place the smallest character in lexicographical order
        for (let j = 0; j < 26; j++) {
            if (cnt[j] === 0) {
                continue;
            }

            cnt[j]--;
            if (check(String.fromCharCode("a".charCodeAt(0) + j))) {
                // If the constructed palindrome is greater than target, choose the character
                prefix.push(String.fromCharCode("a".charCodeAt(0) + j));
                found = true;
                break;
            } else {
                cnt[j]++; // Not meeting the conditions, reset the counter
            }
        }
        if (!found) {
            return ""; // Cannot construct a palindrome larger than target
        }

        if (prefix[i] > target[i]) {
            // prefix is already greater than target
            const left: string[] = [...prefix];
            for (let j = 0; j < 26; j++) {
                for (let k = 0; k < cnt[j]; k++) {
                    left.push(String.fromCharCode("a".charCodeAt(0) + j));
                }
            }
            const palindrome: string = [
                ...left,
                oddChar,
                ...left.slice().reverse(),
            ].join("");
            return palindrome;
        }
    }

    // Construct the final palindrome string
    const ans: string = [...prefix, oddChar, ...prefix.slice().reverse()].join(
        "",
    );
    return ans;
}