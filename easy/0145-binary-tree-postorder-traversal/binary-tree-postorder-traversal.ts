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

function postorderTraversal(root: TreeNode | null): number[] {
    /**
        So let me solve this real quick before going to write my university exams lol.

        I've solved the pre-order problem which was (root->left->right)
        This is post-order which is (left->right->root)

        For this, I will be using the iterative approach, just a little change in logic lol.
     */

     let preOrderArray = [];
     let store = [];



     // let's implement pre order approach first. root->left->right
     // Now let's translate preorder to post order post order is left->right->root
     function traverseTree(node: TreeNode){
        while(node !== null){

            preOrderArray.push(node.val);

            if(node.left !== null){
                store.push(node.left);
            }

            if(node.right !== null){
                node = node.right;
            }else{
                const lastStoredNode = store.pop();

                if(lastStoredNode !== undefined){
                    node = lastStoredNode;
                }else{
                    node = null;
                }
            }  

            
        }
     }

     traverseTree(root);

     return preOrderArray.reverse();
     
};