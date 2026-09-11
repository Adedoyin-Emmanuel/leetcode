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

function averageOfSubtree(root: TreeNode | null): number {
    let result: number = 0;

    const traverse = (node: TreeNode | null): [number, number] => {
        if (!node) {
            return [0, 0];
        }

        const [leftSum, leftCount] = traverse(node.left);
        const [rightSum, rightCount] = traverse(node.right);

        const currSum: number = node.val + leftSum + rightSum;
        const currCount: number = 1 + leftCount + rightCount;

        if (Math.floor(currSum / currCount) === node.val) {
            result++;
        }

        return [currSum, currCount];
    };

    traverse(root);

    return result;
}