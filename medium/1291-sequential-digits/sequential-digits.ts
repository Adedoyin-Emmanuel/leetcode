function sequentialDigits(low: number, high: number): number[] {
    const result = [];

    for (let i = 1; i <= 9; i++) {
        let num = i;

        for (let j = i + 1; j <= 9; j++) {
            num = num * 10 + j;
            console.log(num)

            if (num >= low && num <= high) {
                result.push(num);
            }
        }
    }


    return result.sort((a, b) => a - b);
};