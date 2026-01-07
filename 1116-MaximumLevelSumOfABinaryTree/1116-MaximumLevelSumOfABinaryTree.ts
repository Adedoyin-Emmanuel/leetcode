// Last updated: 1/8/2026, 12:14:03 AM
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


function maxLevelSum(root: TreeNode | null): number {
    /**
        This is actually very simple and shouldn't take time to solve.
        My only problem is that I've forgotten a lot about binary trees.
        I remember what they are and all but I've forgotten how to traverse it.


        So I've some learning to do.


        Things I had to look up.

        1. What is a binary tree
        2. How do i traverse a binary tree 


        Now we've to do somethings before we can solve this problem

        1. We've to figure how to traverse this binary tree (done)
        2. We've to figure out how to get the level in each tree (done)
        3. We've to figure out how we can keep track of the sum of the level
        (done) 
        in the tree as we traverse and compare it to the previous level
        4. We've to figure out how to return that max level. (done)


     */

     let maxLevelSum = -Infinity, maxLevelNumber = 1,
        currentLevelSum = 0, currentLevelNumber = 0;
     
     const queue: TreeNode[] = [];

     queue.push(root);

     while(queue.length !== 0){
        const levelSize = queue.length;
        currentLevelSum = 0;

        
        for(let i = 0; i < levelSize; i++){
            const currentNode = queue.shift();

            if(currentNode !== null){
                currentLevelSum += currentNode.val;

                if(currentNode.left !== null){
                    queue.push(currentNode.left);
                }

                if(currentNode.right !== null){
                    queue.push(currentNode.right);
                }
            }

        }
        
        currentLevelNumber += 1;

        if(currentLevelSum > maxLevelSum){
            maxLevelSum = currentLevelSum;
            maxLevelNumber = currentLevelNumber;
        }

     }

     return maxLevelNumber;
};