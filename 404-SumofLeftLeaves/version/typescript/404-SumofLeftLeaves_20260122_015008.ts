// Last updated: 1/22/2026, 1:50:08 AM
// Get in.
1/**
2 * Definition for a binary tree node.
3 * class TreeNode {
4 *     val: number
5 *     left: TreeNode | null
6 *     right: TreeNode | null
7 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
8 *         this.val = (val===undefined ? 0 : val)
9 *         this.left = (left===undefined ? null : left)
10 *         this.right = (right===undefined ? null : right)
11 *     }
12 * }
13 */
14
15function sumOfLeftLeaves(root: TreeNode | null): number {
16    /**
17        Another Binary tree question, sweet.
18
19        So this problem involves getting the sum of the left leaf.
20
21        We're told that a leaf is a node without a child, a left leaf
22
23        is a leaf that's the left child of another node. I think this is 
24        
25        simple and I'm wondering why it has a 62.3% acceptance rate. It 
26        
27        should be like 90% lmao.
28
29
30        What's the condition to have a leaf?
31
32        To have a leaf, it means that node must not have a child
33     */
34
35     let sumOfLeftLeaves = 0;
36
37     function checkIfIsLeaf(tree: TreeNode | null){
38        if(tree === null){
39            return false;
40        }
41
42        if(tree.left == null && tree.right == null){
43           return true;
44        }
45
46        return false;
47     }
48
49     function findSumOfLeftLeaves(tree: TreeNode | null){
50        if(tree === null){
51            return;
52        }
53
54        if(checkIfIsLeaf(tree.left)){
55            sumOfLeftLeaves += tree.left.val;
56        }
57
58        findSumOfLeftLeaves(tree.left);
59        findSumOfLeftLeaves(tree.right);
60       
61     }
62
63     findSumOfLeftLeaves(root);
64
65     return sumOfLeftLeaves;
66};