// Last updated: 1/7/2026, 11:37:18 PM
// Finally o, thank you Jesus
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
15
16  
17function maxProduct(root: TreeNode | null): number {
18    /**
19        Okay this is very similar to the question I solved yesterday on binary 
20        trees. It only has a slight variation.
21
22        Yesterday I solved a maximum sum in a binary tree problem. Which involves
23        traversing the tree and getting the levels which the max sum and then
24        returning that level.
25
26        This is a bit similar but it involves spliting the tree first by removing
27        oone edge such that the product of the sums of the subtrees is maximized
28
29        What that simply means is that, you can't just split the trees anyhow.
30        You've to split it such that multiplying the sum of each trees should
31        be the highest.
32
33        To further break this down, it simply means there are several , multiple 
34        ways you can split the root tree into, but the one you should choose must
35        return the highest number when the sums of the two subtress are taken. I 
36        hope you understand. 
37
38
39        Now we need to be able to answer some questions before we can solve this
40        question. Once we can, the solution will become super clear. 
41
42
43        1. How do we split the root binary tree?
44        2. How do we split the root binary tree such that the product of the sum
45        of the two sub tress is maximized?
46        3. How do we return the answer in modulo 10^9 + 7?
47        4. How do we get the sum of the each of the splitted sub tree?
48
49
50        Now let's link the question together. First things first.
51
52        We need to do the following to answer this question.
53
54        1. We need to split the root binary tree. 
55        2. We need to split the tree such that the product of the sum of each
56        trees is maximized.
57        3. We need to get the sum of each splitted sub tree
58        4. We need to take the product of the sum of each splitted sub tree.
59        5. We need to return the product in modulo 10^9 + 7 since our answer may
60        be too large.
61
62        Now to answer question 1, to determine the best possible way to split the
63        tree to meet the citeria, we need to use DFS(Depth First Search),
64        yesterday we use BFS (Breath First Search), to get the sum of each level
65        in the binary tree. The size of each level in the tree for BFS is just
66        the length of the queue. And it uses FIFO (First in, first out).
67
68        Now for DFS, I haven't dealt with it before but then, we have 3 possible 
69        order, pre-order(root->left->right), in-order(left->root->right),
70        post-order(left->right->root). And it is recursive.
71
72
73     */
74     //left, right, root
75
76    function getTotalSumOfTree(node: TreeNode){
77        let sum = 0;
78
79        if(node === null){
80            return sum;
81        }
82
83        let left = getTotalSumOfTree(node.left);
84        let right = getTotalSumOfTree(node.right);
85
86        sum += left;
87        sum += right;
88        sum += node.val;
89
90        return sum;
91    }
92
93    let maxProduct = 0;
94    const MOD = 10 ** 9 + 7;
95    let totalSum = getTotalSumOfTree(root);
96
97
98
99    function computeMaxProduct(node: TreeNode){
100        let sum = 0;
101
102        if(node === null){
103            return sum;
104        }
105
106        let left = computeMaxProduct(node.left);
107        let right = computeMaxProduct(node.right);
108
109        sum += left;
110        sum += right;
111        sum += node.val;
112
113        let product = sum * (totalSum - sum);
114
115        if(product > maxProduct){
116            maxProduct = product;
117        }
118
119        return sum;
120    }
121
122    computeMaxProduct(root);
123
124
125    return maxProduct % MOD;
126
127};