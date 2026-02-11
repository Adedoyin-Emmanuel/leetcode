<h2><a href="https://leetcode.com/problems/longest-balanced-subarray-ii/">3721. Longest Balanced Subarray II</a></h2><h3>Hard</h3><hr><p>You are given an integer array <code>nums</code>.</p>

<p>A <strong><span data-keyword="subarray-nonempty">subarray</span></strong> is called <strong>balanced</strong> if the number of <strong>distinct even</strong> numbers in the subarray is equal to the number of <strong>distinct odd</strong> numbers.</p>

<p>Return the length of the <strong>longest</strong> balanced subarray.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [2,5,4,3]</span></p>

<p><strong>Output:</strong> <span class="example-io">4</span></p>

<p><strong>Explanation:</strong></p>

<ul>
	<li>The longest balanced subarray is <code>[2, 5, 4, 3]</code>.</li>
	<li>It has 2 distinct even numbers <code>[2, 4]</code> and 2 distinct odd numbers <code>[5, 3]</code>. Thus, the answer is 4.</li>
</ul>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [3,2,2,5,4]</span></p>

<p><strong>Output:</strong> <span class="example-io">5</span></p>

<p><strong>Explanation:</strong></p>

<ul>
	<li>The longest balanced subarray is <code>[3, 2, 2, 5, 4]</code>.</li>
	<li>It has 2 distinct even numbers <code>[2, 4]</code> and 2 distinct odd numbers <code>[3, 5]</code>. Thus, the answer is 5.</li>
</ul>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [1,2,3,2]</span></p>

<p><strong>Output:</strong> <span class="example-io">3</span></p>

<p><strong>Explanation:</strong></p>

<ul>
	<li>The longest balanced subarray is <code>[2, 3, 2]</code>.</li>
	<li>It has 1 distinct even number <code>[2]</code> and 1 distinct odd number <code>[3]</code>. Thus, the answer is 3.</li>
</ul>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>
</ul>


<p><strong>Hints</strong></p>
<ul>
<li>Store the first (or all) occurrences for each value in <code>pos[val]</code>.</li>
<li>Build a lazy segment tree over start indices <code>l in [0..n-1]</code> that supports range add and can tell if any index has value <code>0</code> (keep <code>mn</code>/<code>mx</code>).</li>
<li>Use <code>sign = +1</code> for odd values and <code>sign = -1</code> for even values.</li>
<li>Initialize by adding each value's contribution with <code>update(p, n-1, sign)</code> where <code>p</code> is its current first occurrence.</li>
<li>Slide left <code>l</code>: pop <code>pos[nums[l]]</code>, let <code>next</code> = next occurrence or <code>n</code>, do <code>update(0, next-1, -sign)</code>, then query for any <code>r >= l</code> with value <code>0</code> and update <code>ans = max(ans, r-l+1)</code>.</li>
</ul>