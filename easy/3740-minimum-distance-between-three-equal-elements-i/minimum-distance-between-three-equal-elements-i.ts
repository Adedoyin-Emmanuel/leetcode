function minimumDistance(nums: number[]): number {
    const indices = new Map<number, number[]>();

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const value = indices.get(num);

        if (!value) {
            indices.set(num as number, [i]);
        } else {
            value.push(i);
        }
    }

    let smallest = Infinity;


    for (const [key, value] of indices) {

        for (let i = 0; i < value.length; i++) {
            const pos1 = value[i];
            const pos2 = value[i + 1];
            const pos3 = value[i + 2];

            const span = pos3 - pos1;
            const distance = 2 * span;

            if (distance < smallest) {
                smallest = distance;
            }

        }


    }

    return smallest == Infinity ? -1 : smallest;
};