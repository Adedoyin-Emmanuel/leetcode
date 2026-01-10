// Last updated: 1/10/2026, 2:02:05 AM
// Get in joor.
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
15function preorderTraversal(root: TreeNode | null): number[] {
16    
17    let preOrderArray = [];
18
19    function traverseTree(node: TreeNode){
20        if(node === null){
21            return;
22        }
23
24        // Pre order moves from root -> left -> right
25        const root = node;
26
27        preOrderArray.push(root.val);
28
29        traverseTree(node.left);
30        traverseTree(node.right);
31
32    }
33
34    traverseTree(root);
35
36    return preOrderArray;
37};