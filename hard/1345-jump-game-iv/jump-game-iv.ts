function computeMap(arr: number[]): Map<number, number[]> {
    let map = new Map<number, number[]>();

    for (let i = 0; i < arr.length; i++) {

        if (!map.has(arr[i])) {
            map.set(arr[i], []);
        }

        map.get(arr[i])!.push(i);
    }

    return map;
}

function minJumps(arr: number[]): number {
    const queue = [];
    const n = arr.length;
    const visited = new Set<number>();
    const map = computeMap(arr);
    let steps = 0;

    if (n == 1) return steps;

    queue.push(0);

    visited.add(0);

    while (queue.length !== 0) {

        const size = queue.length;

        for (let i = 0; i < size; i++) {
            const current = queue.shift();
            if (current == n - 1) return steps;

            const left = current - 1;
            const right = current + 1;

            if (left >= 0 && !visited.has(left)) {
                visited.add(left);
                queue.push(left);
            }

            if (right < n && !visited.has(right)) {
                visited.add(right);
                queue.push(right);
            }

            for (const j of map.get(arr[current])!) {
                if (!visited.has(j)) {
                    queue.push(j);
                    visited.add(j);
                }
            }


            map.set(arr[current], []);


        }

        steps++;
    }
};