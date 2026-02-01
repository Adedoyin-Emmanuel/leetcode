// Last updated: 2/1/2026, 8:42:49 PM
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function inorderTraversal(root: TreeNode | null): number[] {
    /**
        I should be doing my daily Leetcode challenge, my Mac is at 17% but
        because I've fallen in love with Binary trees, and I'm just solving and solving questions on it.

        So for this problem, we're already familiar with pre-order and post order. Let's do a mental recap.

        pre-order trasversal -> root->left->right
        in-order traversal -> left-root-right
        post-order traversal -> left-right-root

        In this problem, I will be using the recursive approach.
     */

     let inOrderArray = [];

     // left -> root -> right
     function traverseTree(node: TreeNode){
        if(node === null){
            return;
        }

        traverseTree(node.left);

        inOrderArray.push(node.val);

        traverseTree(node.right);

     }

     traverseTree(root);

     return inOrderArray;
};