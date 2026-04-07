class Robot {
    private moved: boolean = false;
    private index: number = 0;
    private pos: number[][] = [];
    private dir: number[] = [];
    private toDir: Map<number, string> = new Map();

    constructor(width: number, height: number) {
        this.toDir.set(0, "East");
        this.toDir.set(1, "North");
        this.toDir.set(2, "West");
        this.toDir.set(3, "South");

        for (let i = 0; i < width; ++i) {
            this.pos.push([i, 0]);
            this.dir.push(0);
        }
        for (let i = 1; i < height; ++i) {
            this.pos.push([width - 1, i]);
            this.dir.push(1);
        }
        for (let i = width - 2; i >= 0; --i) {
            this.pos.push([i, height - 1]);
            this.dir.push(2);
        }
        for (let i = height - 2; i > 0; --i) {
            this.pos.push([0, i]);
            this.dir.push(3);
        }
        this.dir[0] = 3;
    }

    step(num: number): void {
        this.moved = true;
        this.index = (this.index + num) % this.pos.length;
    }

    getPos(): number[] {
        return this.pos[this.index];
    }

    getDir(): string {
        if (!this.moved) {
            return "East";
        }
        return this.toDir.get(this.dir[this.index])!;
    }
}
/**
 * Your Robot object will be instantiated and called as such:
 * var obj = new Robot(width, height)
 * obj.step(num)
 * var param_2 = obj.getPos()
 * var param_3 = obj.getDir()
 */