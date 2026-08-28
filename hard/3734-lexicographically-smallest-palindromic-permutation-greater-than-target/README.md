<h2><a href="https://leetcode.com/problems/lexicographically-smallest-palindromic-permutation-greater-than-target/">3734. Lexicographically Smallest Palindromic Permutation Greater Than Target</a></h2><h3>Hard</h3><hr><p>You are given two strings <code>s</code> and <code>target</code>, each of length <code>n</code>, consisting of lowercase English letters.</p>

<p>Return the <strong><span data-keyword="lexicographically-smaller-string">lexicographically smallest</span> string</strong> that is <strong>both</strong> a <strong><span data-keyword="palindrome-string">palindromic</span> <span data-keyword="permutation">permutation</span></strong> of <code>s</code> and <strong>strictly</strong> greater than <code>target</code>. If no such permutation exists, return an empty string.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;baba&quot;, target = &quot;abba&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">&quot;baab&quot;</span></p>

<p><strong>Explanation:</strong></p>

<ul>
	<li>The palindromic permutations of <code>s</code> (in lexicographical order) are <code>&quot;abba&quot;</code> and <code>&quot;baab&quot;</code>.</li>
	<li>The lexicographically smallest permutation that is strictly greater than <code>target</code> is <code>&quot;baab&quot;</code>.</li>
</ul>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;baba&quot;, target = &quot;bbaa&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">&quot;&quot;</span></p>

<p><strong>Explanation:</strong></p>

<ul>
	<li>The palindromic permutations of <code>s</code> (in lexicographical order) are <code>&quot;abba&quot;</code> and <code>&quot;baab&quot;</code>.</li>
	<li>None of them is lexicographically strictly greater than <code>target</code>. Therefore, the answer is <code>&quot;&quot;</code>.</li>
</ul>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;abc&quot;, target = &quot;abb&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">&quot;&quot;</span></p>

<p><strong>Explanation:</strong></p>

<p><code>s</code> has no palindromic permutations. Therefore, the answer is <code>&quot;&quot;</code>.</p>
</div>

<p><strong class="example">Example 4:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;aac&quot;, target = &quot;abb&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">&quot;aca&quot;</span></p>

<p><strong>Explanation:</strong></p>

<ul>
	<li>The only palindromic permutation of <code>s</code> is <code>&quot;aca&quot;</code>.</li>
	<li><code>&quot;aca&quot;</code> is strictly greater than <code>target</code>. Therefore, the answer is <code>&quot;aca&quot;</code>.</li>
</ul>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n == s.length == target.length &lt;= 300</code></li>
	<li><code>s</code> and <code>target</code> consist of only lowercase English letters.</li>
</ul>


<p><strong>Hints</strong></p>
<ul>
<li>A palindromic permutation exists only if at most one character has an odd count (for odd-length strings) or all counts are even (for even-length strings).</li>
<li>Focus on constructing the first half of the palindrome. The second half is determined by mirroring.</li>
<li>To be lexicographically greater than target, the first half must be greater than or equal to target's first half, with careful handling of the middle character for odd-length strings.</li>
<li>Use a backtracking approach or greedy selection for each position in the first half, trying the smallest available character that can still produce a valid palindrome.</li>
<li>After building the first half, mirror it (and add the middle character if needed) to form the full palindrome and verify it is strictly greater than target.</li>
</ul>