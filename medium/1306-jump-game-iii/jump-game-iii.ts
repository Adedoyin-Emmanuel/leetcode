function canReach(arr: number[], start: number): boolean {

    const queue = [];
    const visited = new Set<number>();

    queue.push(start);

    while (queue.length !== 0) {
        const current = queue.shift();

        if (visited.has(current)) continue;

        visited.add(current);

        const step = arr[current];

        if (step === 0) return true;

        const left = current - step;
        const right = current + step;

        if (left >= 0 && left < arr.length && !visited.has(left)) {

            queue.push(left);
        }

        if (right >= 0 && right < arr.length && !visited.has(right)) {

            queue.push(right);
        }

    }

    return false;

};