function furthestDistanceFromOrigin(moves: string): number {
    let L = 0, R = 0, B = 0;

    for (const char of moves) {
        if (char === "L") {
            L++;
        } else if (char === "R") {
            R++;
        } else {
            B++;
        }
    }
    return Math.abs(L - R) + B;
}