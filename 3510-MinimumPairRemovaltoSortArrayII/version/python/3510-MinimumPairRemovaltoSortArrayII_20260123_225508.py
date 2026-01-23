# Last updated: 1/23/2026, 10:55:08 PM
# God will judge you. I wrote this same code with Typescript, it was telling me time limit exceeded, my God will judge you.
1from typing import List
2import heapq
3
4class Solution:
5    def minimumPairRemoval(self, nums: List[int]) -> int:
6        n = len(nums)
7        if n <= 1:
8            return 0
9
10        left = [-1] * n
11        right = [-1] * n
12        alive = [True] * n
13
14        for i in range(n):
15            left[i] = i - 1
16            right[i] = i + 1 if i + 1 < n else -1
17
18        heap = []
19        for i in range(n - 1):
20            heapq.heappush(heap, (nums[i] + nums[i + 1], i))
21
22        bad = sum(1 for i in range(n - 1) if nums[i] > nums[i + 1])
23
24        ops = 0
25
26        while bad > 0:
27            while True:
28                s, i = heapq.heappop(heap)
29                if not alive[i]:
30                    continue
31                j = right[i]
32                if j == -1 or not alive[j]:
33                    continue
34                if nums[i] + nums[j] != s:
35                    continue
36                break
37
38            if left[i] != -1 and nums[left[i]] > nums[i]:
39                bad -= 1
40            if nums[i] > nums[j]:
41                bad -= 1
42            if right[j] != -1 and nums[j] > nums[right[j]]:
43                bad -= 1
44
45            nums[i] += nums[j]
46            alive[j] = False
47
48            right[i] = right[j]
49            if right[j] != -1:
50                left[right[j]] = i
51
52            if left[i] != -1 and nums[left[i]] > nums[i]:
53                bad += 1
54            if right[i] != -1 and nums[i] > nums[right[i]]:
55                bad += 1
56
57            if left[i] != -1:
58                heapq.heappush(heap, (nums[left[i]] + nums[i], left[i]))
59            if right[i] != -1:
60                heapq.heappush(heap, (nums[i] + nums[right[i]], i))
61
62            ops += 1
63
64        return ops
65