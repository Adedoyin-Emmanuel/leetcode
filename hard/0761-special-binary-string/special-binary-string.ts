function makeLargestSpecial(s: string): string {
    if (s.length <= 2) return s;

    let count = 0;
    let start = 0;
    const parts: string[] = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1') count++;
        else count--;

        if (count === 0) {
            const inner = makeLargestSpecial(s.substring(start + 1, i));
            parts.push("1" + inner + "0");
            start = i + 1;
        }
    }

    parts.sort((a, b) => b.localeCompare(a));

    return parts.join("");
}