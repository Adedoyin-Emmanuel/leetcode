function findDifferentBinaryString(nums: string[]): string {
    const n = nums.length;
    const seen = new Set(nums);

    const generate = (current: string) => {
        if (current.length == n) {

            if (seen.has(current)) {
                return;
            } else {
                return current;
            }

        }

        let result = generate(current + "0");

        if (result) {
            return result;
        }

        result = generate(current + "1");

        if (result) {
            return result;
        }
    }


    return generate("");

};