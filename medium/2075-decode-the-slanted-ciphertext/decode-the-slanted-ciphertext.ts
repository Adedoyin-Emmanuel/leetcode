function decodeCiphertext(encodedText: string, rows: number): string {
    if (rows === 1) return encodedText;

    const cols = encodedText.length / rows;
    const matrix: string[][] = [];

    for (let r = 0; r < rows; r++) {
        matrix.push(
            encodedText.slice(r * cols, (r + 1) * cols).split("")
        );
    }

    let result = "";

    for (let c = 0; c < cols; c++) {
        let r = 0;
        let currCol = c;

        while (r < rows && currCol < cols) {
            result += matrix[r][currCol];
            r++;
            currCol++;
        }
    }

    return result.trimEnd();
}