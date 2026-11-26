function canAliceWin(n: number): boolean {
    let take = 10,
        k = 0;
    while (n >= take) {
        n -= take;
        take--;
        k++;
    }
    return k % 2 === 1;
}