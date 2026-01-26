// Last updated: 1/26/2026, 9:26:04 AM
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
15function minDepth(root: TreeNode | null): number {
16    
17    function findDepth(node: TreeNode){
18        let minDepth = 0;
19
20        if(node === null){
21            return 0;
22        }
23
24        if(node.left === null && node.right === null){
25            return 1;
26        }
27
28        const leftDepth = findDepth(node.left);
29        const rightDepth = findDepth(node.right);
30
31        if(node.right === null && node.left !== null ){
32            minDepth += 1 + leftDepth;
33        }
34
35        if(node.left === null && node.right !== null){
36            minDepth += 1 + rightDepth;
37        }
38
39        if(node.left && node.right){
40            minDepth += 1 +  Math.min(leftDepth, rightDepth);
41        }
42
43        return minDepth;
44    }
45
46    return findDepth(root);
47};