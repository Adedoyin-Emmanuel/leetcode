function longestBalanced(s: string): number {
    const n = s.length;
    let maxLen = 0;

    let run = 1;
    for (let i = 1; i < n; i++) {
        if (s[i] === s[i - 1]) {
            run++;
        } else {
            maxLen = Math.max(maxLen, run);
            run = 1;
        }
    }
    maxLen = Math.max(maxLen, run);

    const pairs: [string, string][] = [
        ['a', 'b'],
        ['a', 'c'],
        ['b', 'c']
    ];

    for (const [x, y] of pairs) {
        let diff = 0;
        const map = new Map<number, number>();
        map.set(0, -1);

        for (let i = 0; i < n; i++) {

            if (s[i] !== x && s[i] !== y) {
                diff = 0;
                map.clear();
                map.set(0, i);
                continue;
            }

            if (s[i] === x) diff++;
            else diff--;

            if (map.has(diff)) {
                maxLen = Math.max(maxLen, i - map.get(diff)!);
            } else {
                map.set(diff, i);
            }
        }
    }

    let countA = 0, countB = 0, countC = 0;
    const map3 = new Map<string, number>();
    map3.set("0,0", -1);

    for (let i = 0; i < n; i++) {
        if (s[i] === 'a') countA++;
        if (s[i] === 'b') countB++;
        if (s[i] === 'c') countC++;

        const d1 = countB - countA;
        const d2 = countC - countA;
        const key = `${d1},${d2}`;

        if (map3.has(key)) {
            maxLen = Math.max(maxLen, i - map3.get(key)!);
        } else {
            map3.set(key, i);
        }
    }

    return maxLen;
}
