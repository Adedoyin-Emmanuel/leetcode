// Last updated: 1/9/2026, 11:15:41 PM
// Yessssssssss, finally.
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
15function subtreeWithAllDeepest(root: TreeNode | null): TreeNode | null {
16    /**
17        Okay, today makes it 8 days of solving Leetcode, my future self is 
18        proud of me already. Now let's get to it.
19
20        Today's problem is a bit tricky but once I'm able to figure out
21        what we're to return and what I need to know to solve it, then 
22        that's it.
23
24        This is my 3rd problem on Binary trees so I know how binary tress
25        work already. I know how to traverse a tree with DFS 
26        Depth first search and BFS (Breath First Search).
27
28        I'm very sure I will use a Depth first search approach here because
29        we need to get subtrees but I'm not sure I'm going to use a Breath
30        First Search approach here. (Well at least not yet)
31
32        So the question involves returning the smallest subtree that contains
33        all the deepest nodes in the original tree.
34
35        So there are certain keywords we should pay attention to in this problem.
36
37        1. A deepest node
38        2. A sub tree
39        3. Smallest sub tree
40
41        Now let's understand the 3 keyword or phrases.
42
43        1. A deepest node: This simply means the node that has the largest depth possible
44        among any node in the entire tree.
45        2. A sub tree: A subtree is simply a tree from another tree, or better put, a subtree
46        of a node is a tree consisting of that node, plus the set of all descendants of that node.
47        3. Smallest subtree: A smallest subtree is a subtree rooted at the lowest node that 
48        conains all the deepest nodes.
49 
50        Now, we need to be able to do the following to solve the problem
51
52        1. We need to be able to find the deepest node in the original tree
53        2. We need to be able to get the subtree with the deepest nodes
54        3. We need to be able to get the smallest subtree with the deepest nodes.
55      
56     */
57
58
59    function findDepth(node: TreeNode){
60        let depth = 1;
61        let candidate = node;
62
63        if(node === null){
64            return {depth:0, candidate};
65        }
66
67        const {depth:leftDepth, candidate: leftCandidate} = findDepth(node.left);
68        const {depth:rightDepth, candidate: rightCandidate} = findDepth(node.right);
69
70        if(leftDepth === rightDepth){
71            candidate = node;
72        }
73
74        if(leftDepth > rightDepth){
75            candidate = leftCandidate;
76        }
77
78        if(rightDepth > leftDepth){
79            candidate = rightCandidate;
80        }
81
82        depth += Math.max(leftDepth, rightDepth);
83
84        return {
85            depth,
86            candidate
87        };
88    }
89
90
91    const result = findDepth(root);   
92
93    return result.candidate;
94};