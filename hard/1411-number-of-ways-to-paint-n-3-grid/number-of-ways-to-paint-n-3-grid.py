class Solution:
    def numOfWays(self, n: int) -> int:
        """
            Okay, this shouldn't take long to solve. 

            I solved this in 3hrs with TypeScript, I should solve this 

            in 5 - 10 mins now that I've understood the logic.

            I'm going to dive straight to the solution 

            First we create a variable to hold the MOD

            We already know what dtA and dtB are, let me recap

            So for a N * 3 grid, there are 2 ways each row of the grid 

            can be painted while respecting the adjacent rule. 
            
            A = A B C (different colors)
            B = A B A (two colors)

            Now, for type A, there are 6 different ways each cells can be painted,
            
            And also for B so the total possible way to paint the grid when n = 1

            is 12. Understood?


        """
        MOD = 10 ** 9 + 7
        dtA = 6
        dtB = 6
        result = 0

        for i in range(2, n + 1):
            newDtA = (2 * dtA + 2 * dtB) % MOD
            newDtB = (2 * dtA + 3 * dtB) % MOD

            dtA = newDtA
            dtB = newDtB

        result = (dtA + dtB) % MOD

        return result


        