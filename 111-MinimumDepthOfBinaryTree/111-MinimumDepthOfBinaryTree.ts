// Last updated: 2/1/2026, 8:42:45 PM
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

function minDepth(root: TreeNode | null): number {
    
    function findDepth(node: TreeNode){
        let minDepth = 0;

        if(node === null){
            return 0;
        }

        if(node.left === null && node.right === null){
            return 1;
        }

        const leftDepth = findDepth(node.left);
        const rightDepth = findDepth(node.right);

        if(node.right === null && node.left !== null ){
            minDepth += 1 + leftDepth;
        }

        if(node.left === null && node.right !== null){
            minDepth += 1 + rightDepth;
        }

        if(node.left && node.right){
            minDepth += 1 +  Math.min(leftDepth, rightDepth);
        }

        return minDepth;
    }

    return findDepth(root);
};