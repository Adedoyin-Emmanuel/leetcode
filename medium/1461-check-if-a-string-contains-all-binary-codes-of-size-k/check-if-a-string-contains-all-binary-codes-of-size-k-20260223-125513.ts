function hasAllCodes(s: string, k: number): boolean {
    const totalNeeded = 1 << k;
    const stringLength = s.length;
    const totalPossible = stringLength - k + 1;

    const substrings = new Set();

    if (totalPossible < totalNeeded) {
        return false;
    }

    for (let i = 0; i <= stringLength - k; i++) {
        substrings.add(s.substring(i, i + k));
    }

    return substrings.size === totalNeeded;
};