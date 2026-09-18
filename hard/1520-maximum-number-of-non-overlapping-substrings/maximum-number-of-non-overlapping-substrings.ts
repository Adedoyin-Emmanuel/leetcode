class Seg {
    constructor(
        public left: number = -1,
        public right: number = -1,
    ) {}
}

function maxNumOfSubstrings(s: string): string[] {
    const seg: Seg[] = Array.from({ length: 26 }, () => new Seg());

    // Preprocess the left and right endpoints.
    for (let i = 0; i < s.length; i++) {
        const charIdx = s.charCodeAt(i) - "a".charCodeAt(0);

        if (seg[charIdx].left === -1) {
            seg[charIdx].left = seg[charIdx].right = i;
        } else {
            seg[charIdx].right = i;
        }
    }

    for (let i = 0; i < 26; i++) {
        if (seg[i].left !== -1) {
            let j = seg[i].left;

            while (j <= seg[i].right) {
                const charIdx = s.charCodeAt(j) - "a".charCodeAt(0);

                if (
                    seg[i].left <= seg[charIdx].left &&
                    seg[charIdx].right <= seg[i].right
                ) {
                } else {
                    seg[i].left = Math.min(seg[i].left, seg[charIdx].left);
                    seg[i].right = Math.max(seg[i].right, seg[charIdx].right);
                    j = seg[i].left;
                }

                j++;
            }
        }
    }

    // Greedily select intervals.
    seg.sort((a, b) => {
        if (a.right === b.right) {
            return b.left - a.left;
        }
        return a.right - b.right;
    });

    const ans: string[] = [];
    let end = -1;

    for (const segment of seg) {
        const { left, right } = segment;

        if (left === -1) {
            continue;
        }

        if (end === -1 || left > end) {
            end = right;
            ans.push(s.slice(left, right + 1));
        }
    }

    return ans;
}