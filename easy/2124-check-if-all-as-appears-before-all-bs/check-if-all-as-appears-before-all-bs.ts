function checkString(s: string): boolean {
    const n = s.length;
    let lasta = -1; // Index of the last occurrence of 'a'
    let firstb = n; // Index of the first occurrence of 'b'
    for (let i = 0; i < n; ++i) {
        if (s[i] === "a") {
            lasta = Math.max(lasta, i);
        } else {
            firstb = Math.min(firstb, i);
        }
    }
    return lasta < firstb;
}