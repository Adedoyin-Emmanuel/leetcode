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

function balanceBST(root: TreeNode | null): TreeNode | null {

    var array = [];

    function convertTreeToArray(root: TreeNode | null) {
        if (root === null) {
            return 0;
        }

        convertTreeToArray(root.left);

        array.push(root.val);

        convertTreeToArray(root.right);

        return root;
    }

    convertTreeToArray(root);


    function constructBalancedTree(nums: number[]) {

        let newNode = new TreeNode();

        if (nums.length === 0) {
            return null;
        }

        const mid = Math.floor(nums.length / 2);
        const rootValue = nums[mid];

        const leftHalf = nums.slice(0, mid);
        const rightHalf = nums.slice(mid + 1);


        newNode.val = rootValue;
        newNode.left = constructBalancedTree(leftHalf);
        newNode.right = constructBalancedTree(rightHalf);

        return newNode;
    }

    return constructBalancedTree(array);

};