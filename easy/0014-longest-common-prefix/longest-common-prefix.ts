function longestCommonPrefix(strs: string[]): string {
    //find shortest word in the string array
    let shortestWord = strs[0];
    for (let i = 1; i < strs.length; i++) {
        const currentWord = strs[i];

        if (shortestWord.length > currentWord.length) {
            shortestWord = currentWord;
        }
    }

    let currentPrefix = shortestWord;

    for (let i = 0; i < strs.length; i++) {
        let currentWord = strs[i];

        while(!currentWord.startsWith(currentPrefix)){
            currentPrefix = currentPrefix.slice(0, currentPrefix.length - 1);
        }
    }

    return currentPrefix;
};