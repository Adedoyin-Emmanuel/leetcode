class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        """
            I've solved this in C# and TypeScript so I will be going straight
            to the solution here.

            Just like before, the idea is to loop through the numbers in the
            array, and then get the number that will complement the target

            and while doing that, save the items we've seen. We need to create a
            map to save seen numbers. 

            Things I had to look up.

            1. How to create a map in Python
            2. How to access element in a map
        """

        seen = dict()

        for i in range(len(nums)):
            current_number = nums[i]
            complement = target - current_number

            # we check if we've the complement in the seen map
            if complement in seen:
                indexOfComplement = seen.get(complement)
                result = []

                result.append(indexOfComplement)
                result.append(i)

                return result
            
            seen[nums[i]] = i

        return []


        