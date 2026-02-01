// Last updated: 2/1/2026, 6:00:40 AM
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
15function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
16    /**
17        Okay, I just solved today's daily challenge and I saw I've solved
18        28 problems on Leetcode, so I decided to solve 2  more questions to
19        make it 30. I did that when I was at 18 problems too. 
20
21        And if you've been following my solutions, you will know that I love 
22        binary trees so much. I honestly don't know why. Lol.
23
24        Be that as it may, let's get to it.
25
26        We're given the roots of 2 binary trees
27        and I'm to write a function to determine if they are the same or not.
28
29        We're told 2 binary trees are considered the same if they are structurally
30        identical, and the nodes have the same value.
31
32        Let's see if we've a hint. Oh dear, we don't lol.
33
34        Seeing this question, it is obvious that we're going to use a DFS
35
36        I would've approached it by trying to get the sum of all elements in each 
37        tree but then we're told for 2 trees to be the same, they have to be
38        identical structurally so that wouldn't work
39
40        There are 3 realities to consider.
41
42        1. Both nodes are null
43        2. One node is null, the other isn't
44        3. Both nodes exist
45     */
46
47     function checkIfTreeIsTheSame(treeOne: TreeNode | null, treeTwo: TreeNode | null): boolean {
48        // both nodes are null
49        if(treeOne === null && treeTwo === null){
50            return true;
51        }
52
53        // check if first tree is null and the second isn't
54        if(treeOne === null && treeTwo !== null){
55            return false;
56        }
57
58        // check if the second tree is null and the first isn't
59        if(treeTwo === null && treeOne !== null){
60            return false;
61        }
62
63        if(treeOne.val !== treeTwo.val){
64            return false;
65        }
66
67        // check if both trees aren't null
68        if(treeOne !== null && treeTwo !== null){
69            const left = checkIfTreeIsTheSame(treeOne.left, treeTwo.left);
70            const right = checkIfTreeIsTheSame(treeOne.right, treeTwo.right);
71
72            if(left && right){
73                return true;
74            }
75
76            return false;
77        }
78
79        return false;
80
81     }
82
83     const result = checkIfTreeIsTheSame(p, q);
84
85     return result;
86
87};