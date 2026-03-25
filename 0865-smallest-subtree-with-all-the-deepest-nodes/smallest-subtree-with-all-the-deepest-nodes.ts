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

function subtreeWithAllDeepest(root: TreeNode | null): TreeNode | null {
    /**
        Okay, today makes it 8 days of solving Leetcode, my future self is 
        proud of me already. Now let's get to it.

        Today's problem is a bit tricky but once I'm able to figure out
        what we're to return and what I need to know to solve it, then 
        that's it.

        This is my 3rd problem on Binary trees so I know how binary tress
        work already. I know how to traverse a tree with DFS 
        Depth first search and BFS (Breath First Search).

        I'm very sure I will use a Depth first search approach here because
        we need to get subtrees but I'm not sure I'm going to use a Breath
        First Search approach here. (Well at least not yet)

        So the question involves returning the smallest subtree that contains
        all the deepest nodes in the original tree.

        So there are certain keywords we should pay attention to in this problem.

        1. A deepest node
        2. A sub tree
        3. Smallest sub tree

        Now let's understand the 3 keyword or phrases.

        1. A deepest node: This simply means the node that has the largest depth possible
        among any node in the entire tree.
        2. A sub tree: A subtree is simply a tree from another tree, or better put, a subtree
        of a node is a tree consisting of that node, plus the set of all descendants of that node.
        3. Smallest subtree: A smallest subtree is a subtree rooted at the lowest node that 
        conains all the deepest nodes.
 
        Now, we need to be able to do the following to solve the problem

        1. We need to be able to find the deepest node in the original tree
        2. We need to be able to get the subtree with the deepest nodes
        3. We need to be able to get the smallest subtree with the deepest nodes.
      
     */


    function findDepth(node: TreeNode){
        let depth = 1;
        let candidate = node;

        if(node === null){
            return {depth:0, candidate};
        }

        const {depth:leftDepth, candidate: leftCandidate} = findDepth(node.left);
        const {depth:rightDepth, candidate: rightCandidate} = findDepth(node.right);

        if(leftDepth === rightDepth){
            candidate = node;
        }

        if(leftDepth > rightDepth){
            candidate = leftCandidate;
        }

        if(rightDepth > leftDepth){
            candidate = rightCandidate;
        }

        depth += Math.max(leftDepth, rightDepth);

        return {
            depth,
            candidate
        };
    }


    const result = findDepth(root);   

    return result.candidate;
};