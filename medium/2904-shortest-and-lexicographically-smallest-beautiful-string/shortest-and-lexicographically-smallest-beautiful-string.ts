function shortestBeautifulSubstring(s: string, k: number): string {
    if ([...s].filter((c) => c === "1").length < k) return "";
    let ans = s,
        cnt = 0,
        left = 0;
    for (let right = 0; right < s.length; right++) {
        cnt += s[right].charCodeAt(0) - 48;
        while (cnt > k || s[left] === "0") {
            cnt -= s[left++].charCodeAt(0) - 48;
        }
        if (cnt === k) {
            const t = s.slice(left, right + 1);
            if (t.length < ans.length || (t.length === ans.length && t < ans)) {
                ans = t;
            }
        }
    }
    return ans;
}