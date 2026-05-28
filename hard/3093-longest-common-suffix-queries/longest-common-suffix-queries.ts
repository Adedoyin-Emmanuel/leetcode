class TrieNode {
    children: (TrieNode | null)[] = new Array(26);
    minLen: number = Infinity;
    idx: number = Infinity;

    constructor() {
        for (let i = 0; i < 26; i++) {
            this.children[i] = null;
        }
    }
}

class Trie {
    root: TrieNode = new TrieNode();

    insert(s: string, idx: number): void {
        const len = s.length;
        let node = this.root;

        if (len < node.minLen) {
            node.minLen = len;
            node.idx = idx;
        }

        for (let i = 0; i < len; i++) {
            const c = s.charCodeAt(i) - 97;
            if (node.children[c] === null) {
                node.children[c] = new TrieNode();
            }
            node = node.children[c]!;

            if (len < node.minLen) {
                node.minLen = len;
                node.idx = idx;
            }
        }
    }

    query(s: string): number {
        let node = this.root;
        const len = s.length;

        for (let i = 0; i < len; i++) {
            const c = s.charCodeAt(i) - 97;
            if (node.children[c] !== null) {
                node = node.children[c]!;
            } else {
                break;
            }
        }

        return node.idx;
    }
}

function stringIndices(
    wordsContainer: string[],
    wordsQuery: string[],
): number[] {
    const trie = new Trie();

    for (let i = 0; i < wordsContainer.length; i++) {
        const reversed = wordsContainer[i].split("").reverse().join("");
        trie.insert(reversed, i);
    }

    const res: number[] = [];
    for (const query of wordsQuery) {
        const reversed = query.split("").reverse().join("");
        res.push(trie.query(reversed));
    }

    return res;
}