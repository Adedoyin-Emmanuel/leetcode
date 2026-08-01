function minimumPushes(word: string): number {
    const counts: number[] = new Array(26).fill(0);

    for (const char of word) {
        counts[char.charCodeAt(0) - 97]++;
    }

    counts.sort((a, b) => b - a);
    let total = 0;

    for (let i = 0; i < 26; i++) {
        if (counts[i] === 0) {
            break;
        }

        total += counts[i] * (Math.floor(i / 8) + 1);
    }

    return total;
}