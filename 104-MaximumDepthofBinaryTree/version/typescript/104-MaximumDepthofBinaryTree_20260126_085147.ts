// Last updated: 1/26/2026, 8:51:47 AM
1/**
2 * Definition for a binary tree node.
3 * class TreeNode {
4 *     val: number
5 *     left: TreeNode | null
6 *     right: TreeNode | null
7 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
8 *         this.val = (val===undefined ? 0 : val)
9 *         this.left = (left===undefined ? null : left)
10 *         this.right = (right===undefined ? null : right)
11 *     }
12 * }
13 */
14
15function maxDepth(root: TreeNode | null): number {
16    /**
17        I love Binary Trees so much, I love working with it than arrays or
18        other data structures.
19
20        I actually want to attempt 2 questions to make my total solved Leetcode
21        questions 20. I'm currently at 18 lol.
22     */
23
24
25     function findDepth(node: TreeNode){
26        let depth = 0;
27
28        if(node === null){
29            return 0;
30        }
31
32        const leftDepth = findDepth(node.left);
33        const rightDepth = findDepth(node.right);
34
35        depth += (1 + Math.max(leftDepth, rightDepth));
36
37        return depth;
38     }
39
40    
41     return findDepth(root);
42};