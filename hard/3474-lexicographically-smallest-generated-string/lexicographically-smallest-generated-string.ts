function generateString(str1: string, str2: string): string {
    const n: number = str1.length,
        m: number = str2.length;
    const s: string[] = new Array(n + m - 1).fill("a");
    const fixed: number[] = new Array(n + m - 1).fill(0);

    for (let i = 0; i < n; i++) {
        if (str1[i] === "T") {
            for (let j = i; j < i + m; j++) {
                if (fixed[j] === 1 && s[j] !== str2[j - i]) {
                    return "";
                } else {
                    s[j] = str2[j - i];
                    fixed[j] = 1;
                }
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (str1[i] === "F") {
            let flag: boolean = false;
            let idx: number = -1;
            for (let j = i + m - 1; j >= i; j--) {
                if (str2[j - i] !== s[j]) {
                    flag = true;
                }
                if (idx === -1 && fixed[j] === 0) {
                    idx = j;
                }
            }
            if (flag) {
                continue;
            } else if (idx !== -1) {
                s[idx] = "b";
            } else {
                return "";
            }
        }
    }
    return s.join("");
}