class Solution:
    def minOperations(self, grid, x):
        # Initialize an empty array to store all numbers
        nums_array = []
        result = float("inf")

        # Flatten the grid into nums_array and check if all elements have the same remainder when divided by x
        for row in range(len(grid)):
            for col in range(len(grid[0])):
                # If remainder of any element doesn't match the first element, return -1
                if grid[row][col] % x != grid[0][0] % x:
                    return -1
                nums_array.append(grid[row][col])

        # Sort nums_array in non-decreasing order to easily calculate operations
        nums_array.sort()

        length = len(nums_array)
        prefix_sum = [0] * length
        suffix_sum = [0] * length

        # Calculate the prefix sum up to each index (excluding the current element)
        for index in range(1, length):
            prefix_sum[index] = prefix_sum[index - 1] + nums_array[index - 1]

        # Calculate the suffix sum from each index (excluding the current element)
        for index in range(length - 2, -1, -1):
            suffix_sum[index] = suffix_sum[index + 1] + nums_array[index + 1]

        # Iterate through nums_array to calculate the number of operations for each potential common value
        for index in range(length):
            left_operations = (
                nums_array[index] * index - prefix_sum[index]
            ) // x
            right_operations = (
                suffix_sum[index] - nums_array[index] * (length - index - 1)
            ) // x
            # Update the result with the minimum operations needed
            result = min(result, left_operations + right_operations)

        return result