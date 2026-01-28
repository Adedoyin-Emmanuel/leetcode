# Last updated: 1/28/2026, 8:18:35 AM
1class Solution:
2    def minCost(self, grid: list[list[int]], k: int) -> int:
3        m, n = len(grid), len(grid[0])
4        points = [(i, j) for i in range(m) for j in range(n)]
5        points.sort(key=lambda p: grid[p[0]][p[1]])
6        costs = [[float("inf")] * n for _ in range(m)]
7        for t in range(k + 1):
8            minCost = float("inf")
9            j = 0
10            for i in range(len(points)):
11                minCost = min(minCost, costs[points[i][0]][points[i][1]])
12                if (
13                    i + 1 < len(points)
14                    and grid[points[i][0]][points[i][1]]
15                    == grid[points[i + 1][0]][points[i + 1][1]]
16                ):
17                    i += 1
18                    continue
19                for r in range(j, i + 1):
20                    costs[points[r][0]][points[r][1]] = minCost
21                j = i + 1
22            for i in range(m - 1, -1, -1):
23                for j in range(n - 1, -1, -1):
24                    if i == m - 1 and j == n - 1:
25                        costs[i][j] = 0
26                        continue
27                    if i != m - 1:
28                        costs[i][j] = min(
29                            costs[i][j], costs[i + 1][j] + grid[i + 1][j]
30                        )
31                    if j != n - 1:
32                        costs[i][j] = min(
33                            costs[i][j], costs[i][j + 1] + grid[i][j + 1]
34                        )
35        return costs[0][0]