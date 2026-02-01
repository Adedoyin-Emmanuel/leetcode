// Last updated: 2/1/2026, 8:42:41 PM
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

function sumOfLeftLeaves(root: TreeNode | null): number {
    /**
        Another Binary tree question, sweet.

        So this problem involves getting the sum of the left leaf.

        We're told that a leaf is a node without a child, a left leaf

        is a leaf that's the left child of another node. I think this is 
        
        simple and I'm wondering why it has a 62.3% acceptance rate. It 
        
        should be like 90% lmao.


        What's the condition to have a leaf?

        To have a leaf, it means that node must not have a child
     */

     let sumOfLeftLeaves = 0;


     const checkIfIsLeaf = (tree : TreeNode | null) => tree !== null && tree.left === null && tree.right === null; 

     function findSumOfLeftLeaves(tree: TreeNode | null){
        if(tree === null){
            return;
        }

        if(checkIfIsLeaf(tree.left)){
            sumOfLeftLeaves += tree.left.val;
        }

        findSumOfLeftLeaves(tree.left);
        findSumOfLeftLeaves(tree.right);
       
     }

     findSumOfLeftLeaves(root);

     return sumOfLeftLeaves;
};