// Last updated: 2/7/2026, 12:43:09 PM
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
16function maxLevelSum(root: TreeNode | null): number {
17    /**
18        This is actually very simple and shouldn't take time to solve.
19        My only problem is that I've forgotten a lot about binary trees.
20        I remember what they are and all but I've forgotten how to traverse it.
21
22
23        So I've some learning to do.
24
25
26        Things I had to look up.
27
28        1. What is a binary tree
29        2. How do i traverse a binary tree 
30
31
32        Now we've to do somethings before we can solve this problem
33
34        1. We've to figure how to traverse this binary tree (done)
35        2. We've to figure out how to get the level in each tree (done)
36        3. We've to figure out how we can keep track of the sum of the level
37        (done) 
38        in the tree as we traverse and compare it to the previous level
39        4. We've to figure out how to return that max level. (done)
40
41
42     */
43
44     let maxLevelSum = -Infinity, maxLevelNumber = 1,
45        currentLevelSum = 0, currentLevelNumber = 0;
46     
47     const queue: TreeNode[] = [];
48
49     queue.push(root);
50
51     while(queue.length !== 0){
52        const levelSize = queue.length;
53        currentLevelSum = 0;
54
55        
56        for(let i = 0; i < levelSize; i++){
57            const currentNode = queue.shift();
58
59            if(currentNode !== null){
60                currentLevelSum += currentNode.val;
61
62                if(currentNode.left !== null){
63                    queue.push(currentNode.left);
64                }
65
66                if(currentNode.right !== null){
67                    queue.push(currentNode.right);
68                }
69            }
70
71        }
72        
73        currentLevelNumber += 1;
74
75        if(currentLevelSum > maxLevelSum){
76            maxLevelSum = currentLevelSum;
77            maxLevelNumber = currentLevelNumber;
78        }
79
80     }
81
82     return maxLevelNumber;
83};