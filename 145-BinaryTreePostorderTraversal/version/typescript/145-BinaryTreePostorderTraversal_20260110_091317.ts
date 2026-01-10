// Last updated: 1/10/2026, 9:13:17 AM
// get in joor, I'm getting better lol. I solved this within 2 minutes.
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
15function postorderTraversal(root: TreeNode | null): number[] {
16    /**
17        So let me solve this real quick before going to write my university exams lol.
18
19        I've solved the pre-order problem which was (root->left->right)
20        This is post-order which is (left->right->root)
21
22        I'm going to be using the recursive approach first.
23     */
24     let postOrderArray = [];
25
26     function traverseNode(node: TreeNode){
27        if(node === null){
28            return; 
29        }
30
31        traverseNode(node.left);
32        traverseNode(node.right);
33
34        postOrderArray.push(node.val);
35     }
36
37     traverseNode(root);
38
39     return postOrderArray;
40};