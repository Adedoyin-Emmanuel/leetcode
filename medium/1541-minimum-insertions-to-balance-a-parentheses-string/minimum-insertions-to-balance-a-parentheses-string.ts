function minInsertions(s: string): number {
    let insertions: number = 0;
    let leftCount: number = 0;
    const length: number = s.length;
    let index: number = 0;

    while (index < length) {
        const c: string = s[index];
        if (c === "(") {
            leftCount++;
            index++;
        } else {
            if (leftCount > 0) {
                leftCount--;
            } else {
                insertions++;
            }

            if (index < length - 1 && s[index + 1] === ")") {
                index += 2;
            } else {
                insertions++;
                index++;
            }
        }
    }

    insertions += leftCount * 2;
    return insertions;
}