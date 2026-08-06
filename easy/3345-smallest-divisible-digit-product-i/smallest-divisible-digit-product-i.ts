function smallestNumber(n: number, t: number): number {
    const check = (num: number): boolean => {
        let product = 1;
        while (num > 0) {
            product *= num % 10;
            num = Math.floor(num / 10);
            if (product === 0) {
                break;
            }
        }
        return product % t === 0;
    };

    while (!check(n)) {
        n++;
    }
    return n;
}