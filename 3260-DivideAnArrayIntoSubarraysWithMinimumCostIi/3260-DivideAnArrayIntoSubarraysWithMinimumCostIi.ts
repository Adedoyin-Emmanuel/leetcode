// Last updated: 2/5/2026, 7:08:32 AM
import {
    AvlTree,
    AvlTreeNode,
    BinarySearchTree,
    BinarySearchTreeNode,
} from "@datastructures-js/binary-search-tree";

class Container {
    private k: number;
    private st1: Map<number, number>;
    private st2: Map<number, number>;
    private st1Size: number;
    private st2Size: number;
    private tree1: AvlTree<number>;
    private tree2: AvlTree<number>;
    private sm: number;

    constructor(k: number) {
        this.k = k;
        this.st1 = new Map<number, number>();
        this.st2 = new Map<number, number>();
        this.st1Size = 0;
        this.st2Size = 0;
        this.tree1 = new AvlTree<number>((a: number, b: number) => a - b);
        this.tree2 = new AvlTree<number>((a: number, b: number) => a - b);
        this.sm = 0;
    }

    add(x: number): void {
        if (this.st2Size > 0 && x >= this.tree2.min().getValue()) {
            this.tree2.insert(x);
            this.st2.set(x, (this.st2.get(x) || 0) + 1);
            this.st2Size++;
        } else {
            this.tree1.insert(x);
            this.st1.set(x, (this.st1.get(x) || 0) + 1);
            this.sm += x;
            this.st1Size++;
        }
        this.adjust();
    }

    erase(x: number): void {
        if (this.st1.has(x) && this.st1.get(x)! > 0) {
            this.st1.set(x, this.st1.get(x)! - 1);
            this.st1Size--;
            if (this.st1.get(x)! === 0) {
                this.st1.delete(x);
                this.tree1.remove(x);
            }
            this.sm -= x;
        } else if (this.st2.has(x) && this.st2.get(x)! > 0) {
            this.st2.set(x, this.st2.get(x)! - 1);
            this.st2Size--;
            if (this.st2.get(x)! === 0) {
                this.st2.delete(x);
                this.tree2.remove(x);
            }
        }
        this.adjust();
    }

    private adjust(): void {
        while (this.st1Size < this.k && this.st2Size > 0) {
            const x = this.tree2.min().getValue();
            this.st1Size++;
            this.st2Size--;
            this.st2.set(x, this.st2.get(x)! - 1);
            if (this.st2.get(x)! === 0) {
                this.tree2.remove(x);
                this.st2.delete(x);
            }
            this.st1.set(x, (this.st1.get(x) || 0) + 1);
            this.tree1.insert(x);
            this.sm += x;
        }

        while (this.st1Size > this.k) {
            const x = this.tree1.max().getValue();
            this.st1Size--;
            this.st2Size++;
            this.st1.set(x, this.st1.get(x)! - 1);
            if (this.st1.get(x)! === 0) {
                this.tree1.remove(x);
                this.st1.delete(x);
            }
            this.st2.set(x, (this.st2.get(x) || 0) + 1);
            this.tree2.insert(x);
            this.sm -= x;
        }
    }

    sum(): number {
        return this.sm;
    }
}

function minimumCost(nums: number[], k: number, dist: number): number {
    const n = nums.length;
    const cnt = new Container(k - 2);
    for (let i = 1; i < k - 1; i++) {
        cnt.add(nums[i]);
    }

    let ans = cnt.sum() + nums[k - 1];
    for (let i = k; i < n; i++) {
        const j = i - dist - 1;
        if (j > 0) {
            cnt.erase(nums[j]);
        }
        cnt.add(nums[i - 1]);
        ans = Math.min(ans, cnt.sum() + nums[i]);
    }

    return ans + nums[0];
}