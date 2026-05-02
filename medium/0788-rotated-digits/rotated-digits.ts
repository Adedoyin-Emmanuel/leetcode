function rotatedDigits(n: number): number {
    let count = 0;

    for (let i = 1; i <= n; i++) {
        if (isGood(i)) count++;
    }

    return count;
}

function isGood(num: number): boolean {
    let hasChanged = false;

    while (num > 0) {
        const digit = num % 10;

        if (digit === 3 || digit === 4 || digit === 7) return false;

        if (digit === 2 || digit === 5 || digit === 6 || digit === 9) {
            hasChanged = true;
        }

        num = Math.floor(num / 10);
    }

    return hasChanged;
}