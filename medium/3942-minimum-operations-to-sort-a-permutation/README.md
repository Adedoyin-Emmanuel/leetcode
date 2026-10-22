<h2><a href="https://leetcode.com/problems/minimum-operations-to-sort-a-permutation/">3942. Minimum Operations to Sort a Permutation</a></h2><h3>Medium</h3><hr><p>You are given an integer array <code>nums</code> of length <code>n</code>, where <code>nums</code> is a <span data-keyword="permutation-array">permutation</span> of the integers from 0 to <code>n - 1</code>.</p>

<p>You may perform <strong>only</strong> the following operations:</p>

<ul>
	<li><strong>Reverse</strong> the entire array.</li>
	<li><strong>Rotate Left by One</strong>: Move the first element to the end of the array, and rest elements to left by one position.</li>
</ul>

<p>Return an integer denoting the <strong>minimum</strong> number of operations required to sort the array in <strong>increasing</strong> order. If it is <strong>not possible</strong> to sort the array using only the given operations, return -1.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [0,2,1]</span></p>

<p><strong>Output:</strong> <span class="example-io">2</span></p>

<p><strong>Explanation:</strong></p>

<ul>
	<li>Rotate Left by one: <code>[2, 1, 0]</code></li>
	<li>Reverse the array: <code>[0, 1, 2]</code></li>
</ul>

<p>The array becomes sorted in 2 operations, which is minimal</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [1,0,2]</span></p>

<p><strong>Output:</strong> <span class="example-io">2</span></p>

<p><strong>Explanation:</strong></p>

<ul>
	<li>Reverse the array: <code>[2, 0, 1]</code></li>
	<li>Rotate Left by one: <code>[0, 1, 2]</code></li>
</ul>

<p>The array becomes sorted in 2 operations, which is minimal.</p>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [2,0,1,3]</span></p>

<p><strong>Output:</strong> <span class="example-io">-1</span></p>

<p><strong>Explanation:</strong></p>

<p>It is impossible to reach <code>[2, 0, 1, 3]</code>. Thus, the answer is -1.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n == nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>0 &lt;= nums[i] &lt;= n - 1</code></li>
	<li><code>nums</code> is a permutation of integers from 0 to <code>n - 1</code>.</li>
</ul>


<p><strong>Hints</strong></p>
<ul>
<li><strong>1a. (Case Analysis)</strong>

The operations generate only rotations of <code>nums</code> and rotations of <code>reverse(nums)</code>.</li>
<li><strong>1b. (Case Analysis)</strong>

So sorting is possible if and only if <code>nums</code> is a rotation of increasing order, or a rotation of decreasing order.</li>
<li><strong>1c. (Case Analysis)</strong>

If <code>nums</code> is increasing cyclically and <code>nums[i] = 0</code>, then rotating left <code>i</code> times sorts the array, or we may reverse, rotate, then reverse again.

Take the minimum between these possibilities.</li>
<li><strong>1d. (Case Analysis)</strong>

If <code>nums</code> is decreasing cyclically, try both possibilities: reverse first, or rotate first and then reverse. Take the minimum valid cost.</li>
<li><strong>2a. (Breadth-First Search)</strong>

As follows from Hint 1a and 1b, each reachable array can be represented as a state. Since all reachable arrays belong to one of two families, we can compress a state into <code>(type, shift)</code>.

<code>type = 0</code>: a rotation of the original array.
<code>type = 1</code>: a rotation of the reversed array.

<code>shift</code> denotes the number of left rotations applied within that family.</li>
<li><strong>2b. (Breadth-First Search)</strong>

A left rotation changes <code>shift</code> to <code>(shift + 1) % n</code>.

A reverse toggles <code>type</code>, while also changing the corresponding <code>shift</code> to <code>(n - shift) % n</code>.</li>
<li><strong>2c. (Breadth-First Search)</strong>

Build a graph on these <code>2n</code> states using the two allowed operations, then run BFS from <code>(0, 0)</code> to the state representing the input array.</li>
</ul>