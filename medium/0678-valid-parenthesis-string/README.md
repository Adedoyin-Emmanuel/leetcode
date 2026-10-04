<h2><a href="https://leetcode.com/problems/valid-parenthesis-string/">678. Valid Parenthesis String</a></h2><h3>Medium</h3><hr><p>Given a string <code>s</code> containing only three types of characters: <code>&#39;(&#39;</code>, <code>&#39;)&#39;</code> and <code>&#39;*&#39;</code>, return <code>true</code> <em>if</em> <code>s</code> <em>is <strong>valid</strong></em>.</p>

<p>The following rules define a <strong>valid</strong> string:</p>

<ul>
	<li>Any left parenthesis <code>&#39;(&#39;</code> must have a corresponding right parenthesis <code>&#39;)&#39;</code>.</li>
	<li>Any right parenthesis <code>&#39;)&#39;</code> must have a corresponding left parenthesis <code>&#39;(&#39;</code>.</li>
	<li>Left parenthesis <code>&#39;(&#39;</code> must go before the corresponding right parenthesis <code>&#39;)&#39;</code>.</li>
	<li><code>&#39;*&#39;</code> could be treated as a single right parenthesis <code>&#39;)&#39;</code> or a single left parenthesis <code>&#39;(&#39;</code> or an empty string <code>&quot;&quot;</code>.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;()&quot;
<strong>Output:</strong> true
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;(*)&quot;
<strong>Output:</strong> true
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;(*))&quot;
<strong>Output:</strong> true
</pre>

<p><strong class="example">Example 4:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;(&quot;
<strong>Output:</strong> false
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 100</code></li>
	<li><code>s[i]</code> is <code>&#39;(&#39;</code>, <code>&#39;)&#39;</code> or <code>&#39;*&#39;</code>.</li>
</ul>


<p><strong>Hints</strong></p>
<ul>
<li>Use backtracking to explore all possible combinations of treating '*' as either '(', ')', or an empty string. If any combination leads to a valid string, return true.</li>
<li>DP[i][j] represents whether the substring s[i:j] is valid.</li>
<li>Keep track of the count of open parentheses encountered so far. If you encounter a close parenthesis, it should balance with an open parenthesis. Utilize a stack to handle this effectively.</li>
<li>How about using 2 stacks instead of 1? Think about it.</li>
</ul>