function smallestPalindrome(s: string): string {
    const partition = Math.floor(s.length / 2);

    const base = s.substring(0, partition).split("").toSorted();
    const mid = s.length % 2 === 1 ? s[partition] : "";
    const reversed = base.toReversed();

    return base.concat(mid, reversed).join("");
}