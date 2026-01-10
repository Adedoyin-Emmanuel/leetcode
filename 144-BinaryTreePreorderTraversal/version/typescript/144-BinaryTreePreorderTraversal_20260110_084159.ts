// Last updated: 1/10/2026, 8:41:59 AM
// Get in joor
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
15function preorderTraversal(root: TreeNode | null): number[] {
16    
17    let store = [];
18    let preOrderArray = [];
19
20
21    function traverseNode(node: TreeNode){
22        while(node !== null){
23            preOrderArray.push(node.val);
24
25            if(node.right !== null){
26                store.push(node.right);
27            }
28
29            if(node.left !== null){
30                node = node.left;
31            }else{
32                const lastNodeStored = store.pop();
33
34                if(lastNodeStored !== undefined){
35                    node = lastNodeStored;
36                }else{
37                    break;
38                }
39            }
40        }
41
42    }
43
44    traverseNode(root);
45
46    return preOrderArray;
47};