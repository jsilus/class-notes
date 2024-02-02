Solving $Ax=b$, system of linear equations of the form
$$
\begin{cases}
a_{11}x_{1}+a_{12}x_{2}+\cdots+a_{1n}x_{n}=b_{1} \\
a_{21}x_{1}+a_{22}x_{2}+\cdots+a_{2n}x_{n}=b_{2} \\
\quad\vdots\qquad\qquad\qquad\,\,\vdots \\
a_{n1}x_{1}+a_{n2}x_{2}+\cdots+a_{nn}x_{n}=b_{n}
\end{cases}
$$
Where
$$
\begin{align*}
x_{1},\dots,x_{n}\text{ are unknowns}\\
a_{ij},\forall1\le i,j\le n\text{ are coefficients}\\
b_{i},\forall1\le i\le n
\end{align*}
$$

This is equivalent to
$$
 
\begin{bmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\ 
a_{21} & a_{22} & \cdots & a_{2n} \\ 
\vdots & \vdots & \ddots & \vdots \\ 
a_{n1} & a_{n2} & \cdots & a_{nn}
\end{bmatrix}
\begin{bmatrix}
x_{1} \\ x_{2} \\ \vdots \\ x_{n} 
\end{bmatrix}
=
\begin{bmatrix}
b_{1} \\ b_{2} \\ \vdots \\ b_{n} 
\end{bmatrix}
$$

## Matrix Properties
[[Positive Definite]]
## Theorems
- [[Theorem 1]]
- [[Theorem 2]]



## Iterative Method
Start the initial point $x^{(0)}\in\mathbb{R}^{n}$
Generate $\{x^{(k)}\}_{k=0}^{\infty}$ that converges to $x$ such that $Ax=b$
[[Jacobi's Method]], [[Gauss-Seidel]]