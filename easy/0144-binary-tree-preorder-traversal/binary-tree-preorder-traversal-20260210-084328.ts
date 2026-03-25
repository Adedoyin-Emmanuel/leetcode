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

function preorderTraversal(root: TreeNode | null): number[] {
    
    let store = [];
    let preOrderArray = [];


    function traverseNode(node: TreeNode){
        while(node !== null){
            preOrderArray.push(node.val);

            if(node.right !== null){
                store.push(node.right);
            }

            if(node.left !== null){
                node = node.left;
            }else{
                const lastNodeStored = store.pop();

                if(lastNodeStored !== undefined){
                    node = lastNodeStored;
                }else{
                    node = null;
                }
            }
        }

    }

    traverseNode(root);

    return preOrderArray;
};