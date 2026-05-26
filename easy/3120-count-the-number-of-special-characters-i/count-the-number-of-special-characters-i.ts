function numberOfSpecialChars(word: string): number {

    let specialCount = 0;
    let countedLetter = new Set();

    for (let i = 0; i < word.length; i++) {
        const char = word[i];

        if (!countedLetter.has(char.toLowerCase())) {
            const charToLowercase = char.toLowerCase();
            const charToUppercase = char.toUpperCase();

            if (word.includes(charToLowercase) && word.includes(charToUppercase)) {
                specialCount += 1;
            }

            countedLetter.add(char.toLowerCase());
        } else {
            continue;
        }


    }

    return specialCount;

};