function minOperations(s: string): number {
    const n = s.length;

    let mx = "a",
        mn = "z";
    let sorted = true;

    for (let i = 0; i < n; i++) {
        if (s[i] > mx) {
            mx = s[i];
        }
        if (s[i] < mn) {
            mn = s[i];
        }
        if (i > 0 && s[i - 1] > s[i]) {
            sorted = false;
        }
    }
    if (sorted) {
        return 0;
    }
    if (n === 2) {
        return -1;
    }
    if (s[0] === mn || s[n - 1] === mx) {
        return 1;
    }
    for (let i = 1; i < n - 1; i++) {
        if (s[i] === mn || s[i] === mx) {
            return 2;
        }
    }
    
    return 3;
}