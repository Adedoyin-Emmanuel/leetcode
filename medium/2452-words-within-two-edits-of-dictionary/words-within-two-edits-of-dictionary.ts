function twoEditWords(queries: string[], dictionary: string[]): string[] {
    const ans: string[] = [];
    for (const query of queries) {
        for (const s of dictionary) {
            let dis = 0;
            for (let i = 0; i < query.length; i++) {
                if (query[i] !== s[i]) {
                    dis++;
                }
            }
            if (dis <= 2) {
                ans.push(query);
                break;
            }
        }
    }
    return ans;
}