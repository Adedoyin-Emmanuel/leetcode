class Solution:
    def concatenatedBinary(self, n: int) -> int:
        MOD = 10**9 + 7
        res = 0
        length = 0 
        
        for i in range(1, n + 1):
            if (i & (i - 1)) == 0:
                length += 1
            
            res = ((res << length) + i) % MOD
        
        return res