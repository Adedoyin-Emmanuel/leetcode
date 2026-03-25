function minimumDeletions(s: string): number {

    /**
        A's must be on the left,
        B's must be on the right.

        Deletion = total number of B's on the left
        + total number of A's on the right
     */

    let bCounter = 0;
    let minDeletionsSoFar = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "b") {
            bCounter++;
        } else {
            let costToDeleteA = minDeletionsSoFar + 1;
            let costToDeleteB = bCounter;

            minDeletionsSoFar = Math.min(costToDeleteA, costToDeleteB);
        }

    }

    return minDeletionsSoFar;


};