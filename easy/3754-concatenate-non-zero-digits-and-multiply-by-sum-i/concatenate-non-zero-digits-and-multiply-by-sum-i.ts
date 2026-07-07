function sumAndMultiply(n: number): number {
    let x: number = 0;
    let sum: number = 0;

    for (let c of String(n)) {
        let d: number = parseInt(c, 10);
        sum += d;
        if (d > 0) {
            x = x * 10 + d;
        }
    }
    return x * sum;
}