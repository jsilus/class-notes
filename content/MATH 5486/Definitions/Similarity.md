
$A$ and $B$ are **similar** if $\exists$ **nonsingular** $S$ such that $A=S^{-1}BS$.

**Theorem:** Suppose $A$ and $B$ are similar with $A=S^{-1}BS$ and $\lambda$ is an eigenvalue of $A$ with associated eigenvector $x$. Then $\lambda$ is an eigenvector of $B$ with eigenvector $Sx$.
*Proof:*
$$
\begin{align}
SA & =BS \\
Ax & =\lambda x \\
SAx & =\lambda(Sx) \\
B(Sx) & =\lambda(Sx)
\end{align}
$$

**Corollary:** An $n\times n$ matrix $A$ that has $n$ distinct eigenvalues is similar to a diagonal matrix.
