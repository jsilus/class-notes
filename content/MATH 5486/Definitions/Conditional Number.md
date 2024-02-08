For a nonsingular matrix $A$, $\kappa(A)=\lVert A \rVert\lVert A^{-1} \rVert$ is called the **conditional number** of $A$.
$\kappa(A)\geq 1$
$A$ is said to be **well-conditioned** if $\kappa(A)$ is close to 1.
$A$ is said to be **ill-conditioned** if $\kappa(A)$ is *significantly* larger than 1.

## Example
$$
A=
\begin{bmatrix}
1 & 2 \\
1.0001 & 2
\end{bmatrix}\qquad
A^{-1}=
\begin{bmatrix}
-10000 & 10000 \\
5000.5 & -5000
\end{bmatrix}
$$
$$
\begin{align}
\lVert A \rVert _{\infty}&=3.0001 \\
\lVert A^{-1} \rVert _{\infty}&=20000 \\
\kappa(A)&=(3.0001)(20000)
\end{align}
$$