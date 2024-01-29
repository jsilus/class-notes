If $A\in\mathbb{R}^{n\times n}$, $M_{ij}$ is the $(n-1)\times(n-1)$ **submatrix** of $A$ with the removal of the $i\text{-th}$ row and $j\text{-th}$ column. Then, $A_{ij}=(-1)^{i+j}M_{ij}$ is the **cofactor** of $A$.

$|A|=\det(A)=\sum\limits_{j=1}^{n}a_{ij}A_{ij}=\sum\limits_{i=1}^{n}a_{ij}A_{ij}$

## Properties
1) If any column/row of $A$ is a zero vector, then $\det(A)=0$.
2) If any two columns/rows are the same, then $\det(A)=0$.
3) If $\tilde{A}$ is the matrix whose two columns/rows of $A$ are switched, $\det(\tilde{A})=-\det(A)$.
4) If $\tilde{A}:(\lambda E_{i})\leftarrow(E_{i})$ , then $\det(\tilde{A})=\lambda\det(A)$.
5) If $\tilde{A}:(E_{i}+\lambda E_{j})\leftarrow(E_{i})$, then $\det(\tilde{A})=\det(A)$.
6) If $B\in\mathbb{R}^{n\times n}$, then $\det(AB)=\det(A)\det(B)$.
7) $\det(A^{T})=\det(A)$.
8) If $A^{-1}$ exists, then $\det(A^{-1})=\frac{1}{\det(A)}$.
9) If $A$ is upper/lower triangular, then $\det(A)=\prod\limits_{i=1}^{n}a_{ii}$.
