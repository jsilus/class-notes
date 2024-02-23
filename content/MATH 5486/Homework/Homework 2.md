## 1.
$\lVert x \rVert_{\infty}=1$ means that the maximum absolute value in $x$ is $1$. If we maximize this, we get the vector 
$$
x=
\begin{bmatrix}
\pm1 \\
\pm1 \\
\vdots \\
\pm1
\end{bmatrix}
$$
Then,
$$
Ax=
\begin{bmatrix}
\pm a_{11}\pm a_{12}\pm\cdots\pm a_{1n} \\
\pm a_{21}\pm a_{22}\pm\cdots\pm a_{2n} \\
\vdots \\
\pm a_{n1}\pm a_{n2}\pm\cdots\pm a_{nn}
\end{bmatrix}
$$
So, by the definition of the $l_{\infty}\text{-norm}$ for vectors, $\lVert Ax \rVert_{\infty}$ is the maximum absolute sum of rows of $A$. 
This is equivalent to saying $\lVert A \rVert_{\infty}=\max\limits_{1\leq j\leq n}\sum\limits_{ j = 1 }^{n}\left| a_{ij} \right|$
## 2.
$\lVert x \rVert_{1}=1$ means that the sum of all absolute values in $x=1$. Then, 
$$
Ax=
\begin{bmatrix}
x_{1}a_{11}+x_{2}a_{12}+\cdots+x_{n}a_{1n} \\
x_{1}a_{21}+x_{2}a_{22}+\cdots+x_{n}a_{2n} \\
\vdots \\
x_{1}a_{n1}+x_{2}a_{n2}+\cdots+x_{n}a_{nn}
\end{bmatrix}
=
x_{1}
\begin{bmatrix}
a_{11} \\
a_{21} \\
\vdots \\
a_{n1}
\end{bmatrix}
+
x_{2}
\begin{bmatrix}
a_{12} \\
a_{22} \\
\vdots \\
a_{n2}
\end{bmatrix}
+
\cdots
+
x_{n}
\begin{bmatrix}
a_{1n} \\
a_{2n} \\
\vdots \\
a_{nn}
\end{bmatrix}
$$
where $|x_{1}|+|x_{2}|+\cdots+|x_{n}|=1$. The way to maximize this would be to find the column vector such that the absolute sum of its elements is greater than any other and give it an $x_{i}=1$. Any other combination would be smaller, so we wouldn't be maximizing this vector norm.

This is equivalent to saying $\lVert A \rVert_{1}=\max\limits_{1\leq j\leq n}\sum\limits_{ i = 1 }^{n}\left| a_{ij} \right|$
## 3.
The definition of the characteristic polynomial of a matrix is $p(\lambda)=\det(A-\lambda I)$. By factoring the characteristic polynomial, we find the eigenvalues, so
$$
p(\lambda)=(\lambda_{1}-\lambda)(\lambda_{2}-\lambda)(\lambda_{3}-\lambda)\cdots(\lambda_{n}-\lambda)
$$
$\det(A)=\det(A-\lambda I)$ when $\lambda=0$, so
$$
\det(A)=\lambda_{1}\cdot \lambda_{2}\cdot \lambda_{3}\cdots \lambda_{n}=\prod\limits_{ i = 1 }^{n} \lambda_{i}
$$
## 4.
As shown in 3., $0$ is an eigenvalue of $A$ if and only if $\det(A)=0$, so $A$ is singular.
## 5.
$$
A=D+L+U=
\begin{bmatrix}
a_{11} & 0 & \cdots & 0 \\
0 & a_{22} & \cdots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \cdots & a_{nn}
\end{bmatrix}
+
\begin{bmatrix}
0 & 0 & 0 & \cdots & 0 \\
a_{21} & 0 & 0 & \cdots & 0 \\
a_{31} & a_{32} & 0 & \cdots & 0 \\
\vdots & \vdots & \vdots & \ddots & 0 \\
a_{n1} & a_{n2} & a_{n3} & \cdots & 0
\end{bmatrix}
+
\begin{bmatrix}
0 & a_{12} & a_{13} & \cdots & a_{1n} \\
0 & 0 & a_{23} & \cdots & a_{2n} \\
0 & 0 & 0 & \cdots & a_{3n} \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
0 & 0 & 0 & \cdots & 0
\end{bmatrix}
$$
Because $D$ is a diagonal matrix, we know that
$$
D^{-1}=
\begin{bmatrix}
\frac{1}{a_{11}} & 0 & \cdots & 0 \\
0 & \frac{1}{a_{22}} & \cdots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \cdots & \frac{1}{a_{nn}}
\end{bmatrix}
$$
Now, because $A$ is strictly diagonally dominant, we know that
$$
\forall i,\left| a_{ii} \right|>\sum\limits_{ i \neq j,j=1 }^{n}\left| a_{ij} \right|
$$
This means that our resulting matrix $T=-D^{-1}(L+R)$ has all elements $t_{ij}$ such that $\left| t_{ij} \right|<1$.
Because all of the elements $t_{ij}$ are between $-1$ and $1$, the matrix is convergent, or $\lim\limits_{ k \to \infty }\lVert T^{k} \rVert=0$. By the definition of matrix convergence, $\rho(T)<1$.
## 6.
