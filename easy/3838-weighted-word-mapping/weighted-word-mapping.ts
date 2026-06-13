function mapWordWeights(words: string[], weights: number[]): string {
    let answer = "";

    for (const word of words) {
        let string = 0;
        
        for (const char of word) {
            string += weights[char.charCodeAt(0) - "a".charCodeAt(0)];
        }

        answer += String.fromCharCode("z".charCodeAt(0) - (string % 26));
    }
    return answer;
}