// Last updated: 1/26/2026, 1:17:24 PM
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
15function postorderTraversal(root: TreeNode | null): number[] {
16    /**
17        So let me solve this real quick before going to write my university exams lol.
18
19        I've solved the pre-order problem which was (root->left->right)
20        This is post-order which is (left->right->root)
21
22        For this, I will be using the iterative approach, just a little change in logic lol.
23     */
24
25     let preOrderArray = [];
26     let store = [];
27
28
29
30     // let's implement pre order approach first. root->left->right
31     // Now let's translate preorder to post order post order is left->right->root
32     function traverseTree(node: TreeNode){
33        while(node !== null){
34
35            preOrderArray.push(node.val);
36
37            if(node.left !== null){
38                store.push(node.left);
39            }
40
41            if(node.right !== null){
42                node = node.right;
43            }else{
44                const lastStoredNode = store.pop();
45
46                if(lastStoredNode !== undefined){
47                    node = lastStoredNode;
48                }else{
49                    node = null;
50                }
51            }  
52
53            
54        }
55     }
56
57     traverseTree(root);
58
59     return preOrderArray.reverse();
60     
61};