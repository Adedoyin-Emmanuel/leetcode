class Solution:
    def getHappyString(self, n: int, k: int) -> str:
        strings_stack = []
        index_in_sorted_list = 0
        strings_stack.append("")  # Start with an empty string

        while strings_stack:
            current_string = strings_stack.pop()

            # If we have built a string of length n, count it
            if len(current_string) == n:
                index_in_sorted_list += 1
                # If we reach the k-th happy string, return it
                if index_in_sorted_list == k:
                    return current_string
                continue

            # Expand the current string by adding 'a', 'b', or 'c'
            # Ensuring lexicographic order by pushing in reverse
            for current_char in reversed(["a", "b", "c"]):
                # Avoid consecutive identical characters
                if (
                    len(current_string) == 0
                    or current_string[-1] != current_char
                ):
                    strings_stack.append(current_string + current_char)
        return ""