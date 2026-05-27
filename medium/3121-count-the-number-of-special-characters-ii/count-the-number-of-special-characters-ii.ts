function numberOfSpecialChars(word: string): number {
    let specialLetterCount = 0;
    const map = new Map<string, number[]>();

    for (let i = 0; i < word.length; i++) {
        const ch = word[i];
        const key = ch.toLowerCase();

        if (!map.has(key)) {
            map.set(key, [-1, -1]); // [lastLower, firstUpper]
        }

        const value = map.get(key)!;

        if (ch === ch.toLowerCase()) {
            value[0] = i; 
        } else {
            if (value[1] === -1) {
                value[1] = i;
            }
        }
    }

    for (const [_, [lastLower, firstUpper]] of map) {
        if (lastLower !== -1 && firstUpper !== -1 && lastLower < firstUpper) {
            specialLetterCount++;
        }
    }

    return specialLetterCount;
}