from typing import List
import heapq

class Solution:
    def minimumPairRemoval(self, nums: List[int]) -> int:
        n = len(nums)
        if n <= 1:
            return 0

        left = [-1] * n
        right = [-1] * n
        alive = [True] * n

        for i in range(n):
            left[i] = i - 1
            right[i] = i + 1 if i + 1 < n else -1

        heap = []
        for i in range(n - 1):
            heapq.heappush(heap, (nums[i] + nums[i + 1], i))

        bad = sum(1 for i in range(n - 1) if nums[i] > nums[i + 1])

        ops = 0

        while bad > 0:
            while True:
                s, i = heapq.heappop(heap)
                if not alive[i]:
                    continue
                j = right[i]
                if j == -1 or not alive[j]:
                    continue
                if nums[i] + nums[j] != s:
                    continue
                break

            if left[i] != -1 and nums[left[i]] > nums[i]:
                bad -= 1
            if nums[i] > nums[j]:
                bad -= 1
            if right[j] != -1 and nums[j] > nums[right[j]]:
                bad -= 1

            nums[i] += nums[j]
            alive[j] = False

            right[i] = right[j]
            if right[j] != -1:
                left[right[j]] = i

            if left[i] != -1 and nums[left[i]] > nums[i]:
                bad += 1
            if right[i] != -1 and nums[i] > nums[right[i]]:
                bad += 1

            if left[i] != -1:
                heapq.heappush(heap, (nums[left[i]] + nums[i], left[i]))
            if right[i] != -1:
                heapq.heappush(heap, (nums[i] + nums[right[i]], i))

            ops += 1

        return ops
