function maxProduct(n: number): number {
    let first: number = 0,
        second: number = 0;
    while (n > 0) {
        let x: number = n % 10;
        if (x > first) {
            second = first;
            first = x;
        } else if (x > second) {
            second = x;
        }
        n = Math.floor(n / 10);
    }
    return first * second;
}