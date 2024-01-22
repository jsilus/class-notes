## 1.  14.2-2
```python
MATRIX-CHAIN-MULTIPLY(A, s, i, j)
	if i == j
		return A[i]
	else
		B1 = MATRIX-CHAIN-MULTIPLY(A, s, i, s[i, j])
		B2 = MATRIX-CHAIN-MULTIPLY(A, s, s[i, j] + 1, j)
		return B1 * B2
```
## 2.  14-1
We would start at $s$ and then recursively travel down each connected edge. If we come across $t$, we stop the recursion along that branch. If we come across an edge that's already been traversed, we entirely delete the recursive branch. Once we've navigated all trees, we then find the recursive branch with the maximum weight.

The runtime of this algorithm should be $O(E+V)$ because we will traverse all of the edges and vertices.
## 3.  14-2
We would iterate through the string, at each character taking one of four potential branches:
1. Skip the character
2. Add the character as the first part of the palindrome
	- This is if and only if the middle or last parts of the palindrome haven't been added to yet.
3. Add the character as the middle character in the palindrome
	- This is if and only if the last part of the palindrome hasn't been added to yet.
4. Add the character as the last part of the palindrome
	- This is if and only if the middle character has already been added or it is the same as the last character added, as well as the character matches up with the corresponding character that's already been added.

We would end each branch if the length of the start characters and the length of the end characters is the same. We then iterate through these options and pick the longest one.