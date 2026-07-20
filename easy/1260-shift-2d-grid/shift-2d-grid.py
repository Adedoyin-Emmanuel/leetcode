class Solution(object):
    def shiftGrid(self, grid, k):
        """
        :type grid: List[List[int]]
        :type k: int
        :rtype: List[List[int]]
        """
        m,n = len(grid), len(grid[0])
        total = m*n
        k = k%total

        ans = [[0]*n for _ in range(m)]

        for row in range(m):
            for col in range(n):
                oldIndex = (row*n) + col
                newIndex = (oldIndex + k ) % total

                newRow = newIndex // n
                newCol = newIndex % n

                ans[newRow][newCol] = grid[row][col]
        
        return ans