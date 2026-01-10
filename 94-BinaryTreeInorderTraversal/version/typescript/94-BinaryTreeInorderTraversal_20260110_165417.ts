// Last updated: 1/10/2026, 4:54:17 PM
// Brooo, I'm getting really good at solving binary trees man. Thank you Jesus for opening my brain to understand.
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
15function inorderTraversal(root: TreeNode | null): number[] {
16    /**
17        I should be doing my daily Leetcode challenge, my Mac is at 17% but
18        because I've fallen in love with Binary trees, and I'm just solving and solving questions on it.
19
20        So for this problem, we're already familiar with pre-order and post order. Let's do a mental recap.
21
22        pre-order trasversal -> root->left->right
23        in-order traversal -> left-root-right
24        post-order traversal -> left-right-root
25
26        In this problem, I will be using the recursive approach.
27     */
28
29     let inOrderArray = [];
30
31     // left -> root -> right
32     function traverseTree(node: TreeNode){
33        if(node === null){
34            return;
35        }
36
37        traverseTree(node.left);
38
39        inOrderArray.push(node.val);
40
41        traverseTree(node.right);
42
43     }
44
45     traverseTree(root);
46
47     return inOrderArray;
48};