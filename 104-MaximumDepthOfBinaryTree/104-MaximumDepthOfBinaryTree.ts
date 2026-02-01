// Last updated: 2/1/2026, 8:42:47 PM
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

function maxDepth(root: TreeNode | null): number {
    /**
        I love Binary Trees so much, I love working with it than arrays or
        other data structures.

        I actually want to attempt 2 questions to make my total solved Leetcode
        questions 20. I'm currently at 18 lol.
     */


     function findDepth(node: TreeNode){
        let depth = 0;

        if(node === null){
            return 0;
        }

        const leftDepth = findDepth(node.left);
        const rightDepth = findDepth(node.right);

        depth += (1 + Math.max(leftDepth, rightDepth));

        return depth;
     }

    
     return findDepth(root);
};