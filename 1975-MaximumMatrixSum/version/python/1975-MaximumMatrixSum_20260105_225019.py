# Last updated: 1/5/2026, 10:50:19 PM
# Python example so simple lol
1class Solution:
2    def maxMatrixSum(self, matrix: List[List[int]]) -> int:
3        """
4            I've solved this with TypeScript, let's see if i can do the same with 
5            Python.
6
7            We need to get:
8
9            1. Absolute sum of all matrix elements
10            2. Absolute smallest / minimum element in matrix
11            3. Total negative elements
12        
13        """
14        absolute_sum_of_matrix = 0
15        total_negative_elements = 0
16        minimum_element = matrix[0][0]
17
18
19        for i in range(len(matrix)):
20            for j in range(len(matrix[i])):
21                CURRENT_ELEMENT = matrix[i][j]
22                absolute_sum_of_matrix += abs(CURRENT_ELEMENT)
23                
24                if(abs(CURRENT_ELEMENT) < abs(minimum_element)):
25                    minimum_element = CURRENT_ELEMENT
26                
27                if(CURRENT_ELEMENT < 0):
28                    total_negative_elements += 1
29        
30
31
32        # check if the negative elements is odd or even
33        IS_ODD = ((total_negative_elements % 2) > 0)
34        max_possible_matrix_sum = absolute_sum_of_matrix - (2 * abs(minimum_element))
35
36        if not IS_ODD:
37            return absolute_sum_of_matrix
38
39        return max_possible_matrix_sum
40
41        
42        