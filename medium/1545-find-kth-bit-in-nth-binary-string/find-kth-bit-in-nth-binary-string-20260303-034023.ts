function findKthBit(n: number, k: number): string {
    let sequence = "0";

    for (let i = 1; i < n && k > sequence.length; i++) {
        sequence += "1";

        let temp = sequence;

        for (let j = temp.length - 2; j >= 0; j--) {
            let invertedBit = (temp[j] === "1") ? "0" : "1";
            sequence += invertedBit;
        }

    }

    return sequence[k - 1];
};