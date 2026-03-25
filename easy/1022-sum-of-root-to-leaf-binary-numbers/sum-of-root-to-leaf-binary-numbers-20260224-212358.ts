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

function sumRootToLeaf(root: TreeNode | null): number {
    function DFS(currentNode: TreeNode | null, currentValue:number){

        if(currentNode === null) return 0;

        let total = (currentValue * 2) + currentNode.val;

        if(currentNode.left == null && currentNode.right == null){
            return total;
        }

        const left = DFS(currentNode.left, total);
        const right = DFS(currentNode.right, total);

        return (left + right);
    }

    const result = DFS(root, 0);

    return result;
};