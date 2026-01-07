# Last updated: 1/8/2026, 12:14:00 AM
class Solution:
    def maxMatrixSum(self, matrix: List[List[int]]) -> int:
        """
            I've solved this with TypeScript, let's see if i can do the same with 
            Python.

            We need to get:

            1. Absolute sum of all matrix elements
            2. Absolute smallest / minimum element in matrix
            3. Total negative elements
        
        """
        absolute_sum_of_matrix = 0
        total_negative_elements = 0
        minimum_element = matrix[0][0]


        for i in range(len(matrix)):
            for j in range(len(matrix[i])):
                CURRENT_ELEMENT = matrix[i][j]
                absolute_sum_of_matrix += abs(CURRENT_ELEMENT)
                
                if(abs(CURRENT_ELEMENT) < abs(minimum_element)):
                    minimum_element = CURRENT_ELEMENT
                
                if(CURRENT_ELEMENT < 0):
                    total_negative_elements += 1
        


        # check if the negative elements is odd or even
        IS_ODD = ((total_negative_elements % 2) > 0)
        max_possible_matrix_sum = absolute_sum_of_matrix - (2 * abs(minimum_element))

        if not IS_ODD:
            return absolute_sum_of_matrix

        return max_possible_matrix_sum

        
        