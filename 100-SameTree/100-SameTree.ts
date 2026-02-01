// Last updated: 2/1/2026, 8:42:48 PM
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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    /**
        Okay, I just solved today's daily challenge and I saw I've solved
        28 problems on Leetcode, so I decided to solve 2  more questions to
        make it 30. I did that when I was at 18 problems too. 

        And if you've been following my solutions, you will know that I love 
        binary trees so much. I honestly don't know why. Lol.

        Be that as it may, let's get to it.

        We're given the roots of 2 binary trees
        and I'm to write a function to determine if they are the same or not.

        We're told 2 binary trees are considered the same if they are structurally
        identical, and the nodes have the same value.

        Let's see if we've a hint. Oh dear, we don't lol.

        Seeing this question, it is obvious that we're going to use a DFS

        I would've approached it by trying to get the sum of all elements in each 
        tree but then we're told for 2 trees to be the same, they have to be
        identical structurally so that wouldn't work

        There are 3 realities to consider.

        1. Both nodes are null
        2. One node is null, the other isn't
        3. Both nodes exist
     */

     function checkIfTreeIsTheSame(treeOne: TreeNode | null, treeTwo: TreeNode | null): boolean {
        // both nodes are null
        if(treeOne === null && treeTwo === null){
            return true;
        }

        // check if first tree is null and the second isn't
        if(treeOne === null && treeTwo !== null){
            return false;
        }

        // check if the second tree is null and the first isn't
        if(treeTwo === null && treeOne !== null){
            return false;
        }

        if(treeOne.val !== treeTwo.val){
            return false;
        }

        // check if both trees aren't null
        if(treeOne !== null && treeTwo !== null){
            const left = checkIfTreeIsTheSame(treeOne.left, treeTwo.left);
            const right = checkIfTreeIsTheSame(treeOne.right, treeTwo.right);

            if(left && right){
                return true;
            }

            return false;
        }

        return false;

     }

     const result = checkIfTreeIsTheSame(p, q);

     return result;

};