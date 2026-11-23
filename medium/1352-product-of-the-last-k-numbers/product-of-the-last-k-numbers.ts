class ProductOfNumbers {
    private prefix = [1];

    add(num: number): void {
        if(num === 0){
            this.prefix = [1];
        }else {
            this.prefix.push(this.prefix.at(-1)! * num);
        }
    }

    getProduct(k: number): number {
        if(k >= this.prefix.length){
            return 0;
        }

        return this.prefix.at(-1)! / this.prefix.at(-1 - k)!;
    }
}

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */