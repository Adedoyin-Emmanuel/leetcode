// Last updated: 1/8/2026, 12:13:59 AM
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


  
function maxProduct(root: TreeNode | null): number {
    /**
        Okay this is very similar to the question I solved yesterday on binary 
        trees. It only has a slight variation.

        Yesterday I solved a maximum sum in a binary tree problem. Which involves
        traversing the tree and getting the levels which the max sum and then
        returning that level.

        This is a bit similar but it involves spliting the tree first by removing
        oone edge such that the product of the sums of the subtrees is maximized

        What that simply means is that, you can't just split the trees anyhow.
        You've to split it such that multiplying the sum of each trees should
        be the highest.

        To further break this down, it simply means there are several , multiple 
        ways you can split the root tree into, but the one you should choose must
        return the highest number when the sums of the two subtress are taken. I 
        hope you understand. 


        Now we need to be able to answer some questions before we can solve this
        question. Once we can, the solution will become super clear. 


        1. How do we split the root binary tree?
        2. How do we split the root binary tree such that the product of the sum
        of the two sub tress is maximized?
        3. How do we return the answer in modulo 10^9 + 7?
        4. How do we get the sum of the each of the splitted sub tree?


        Now let's link the question together. First things first.

        We need to do the following to answer this question.

        1. We need to split the root binary tree. 
        2. We need to split the tree such that the product of the sum of each
        trees is maximized.
        3. We need to get the sum of each splitted sub tree
        4. We need to take the product of the sum of each splitted sub tree.
        5. We need to return the product in modulo 10^9 + 7 since our answer may
        be too large.

        Now to answer question 1, to determine the best possible way to split the
        tree to meet the citeria, we need to use DFS(Depth First Search),
        yesterday we use BFS (Breath First Search), to get the sum of each level
        in the binary tree. The size of each level in the tree for BFS is just
        the length of the queue. And it uses FIFO (First in, first out).

        Now for DFS, I haven't dealt with it before but then, we have 3 possible 
        order, pre-order(root->left->right), in-order(left->root->right),
        post-order(left->right->root). And it is recursive.


     */
     //left, right, root

    function getTotalSumOfTree(node: TreeNode){
        let sum = 0;

        if(node === null){
            return sum;
        }

        let left = getTotalSumOfTree(node.left);
        let right = getTotalSumOfTree(node.right);

        sum += left;
        sum += right;
        sum += node.val;

        return sum;
    }

    let maxProduct = 0;
    const MOD = 10 ** 9 + 7;
    let totalSum = getTotalSumOfTree(root);



    function computeMaxProduct(node: TreeNode){
        let sum = 0;

        if(node === null){
            return sum;
        }

        let left = computeMaxProduct(node.left);
        let right = computeMaxProduct(node.right);

        sum += left;
        sum += right;
        sum += node.val;

        let product = sum * (totalSum - sum);

        if(product > maxProduct){
            maxProduct = product;
        }

        return sum;
    }

    computeMaxProduct(root);


    return maxProduct % MOD;

};