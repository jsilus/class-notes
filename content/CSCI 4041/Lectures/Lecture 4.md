More recursive [[Timing]]
## Exercise
```
// A, B are square matrices of size nxn
// Output C
// Simple approach
matrix_multiply(A, B, C, n)
	for i = 1 to n
		for j = 1 to n
			C[i][j] = 0
			for k = 1 to n
				C[i][j] = C[i][j] + A[i][k] * A[k][j]
```
#### Runtime: $\Theta(n^{3})$

```
matrix_multiply_recursive(A, B, C, n)
	if (n == 1)
		c_11 = c_11 + a_11 * b_11
		return
	
	Partition A, B, C into 4 quadrants each
		A => A_11, A_12, A_21, A_22
		B => B_11, B_12, B_21, B_22
		C => C_11, C_12, C_21, C_22
	
	matrix_multiply_recursive(A_11, B_11, C_11, n / 2)
	matrix_multiply_recursive(A_12, B_21, C_11, n / 2)
	
	matrix_multiply_recursive(A_11, B_12, C_12, n / 2)
	matrix_multiply_recursive(A_12, B_22, C_12, n / 2)
	
	matrix_multiply_recursive(A_21, B_11, C_21, n / 2)
	matrix_multiply_recursive(A_22, B_21, C_21, n / 2)
	
	matrix_multiply_recursive(A_21, B_12, C_22, n / 2)
	matrix_multiply_recursive(A_22, B_22, C_22, n / 2)
```
#### Runtime: $\Theta(n^{3})$
$$
T(n)=\text{cost to divide}+\text{cost of subprocess}+\text{cost to combine}
$$
where
$$
\begin{align*}
\text{cost to divide}&= \Theta(1)\\
\text{cost of subprocess}&= 8T\left(\frac{n}{2}\right)\\
\text{cost to combine}&= \Theta(1)
\end{align*}
$$
so
$$
T(n)=\Theta(1)+8T\left(\frac{n}{2}\right)
$$
##### What is the leaf cost?
1. How many leaves?  $8^{\lg n}$
2. Cost per leaf?  $\Theta(1)$
##### Cost of all other levels?
1. How many levels?  $\lg n$
2. Cost per level?  $8^{l}\text{ for each level }0\le l\le \lg n$

>[!tip] Helpful Formula
>$$a^{\log_{b}(c)}=c^{\log_{b}(a)}$$

Then,
$$
8^{\lg n}=n^{\lg8}=n^{3}
$$
This is **only** the leaves, but the other levels are mostly insignificant.

>[!check out]
>Strassen's algorithm for a faster recursive one

Did more timing of [[Merge Sort]]