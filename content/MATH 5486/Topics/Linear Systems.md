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

**Lemma:** If $\rho(T)<1$, then $(I-T)^{-1}$ exists. ([[Spectral Radius]])

## Iterative Method
Start the initial point $x^{(0)}\in\mathbb{R}^{n}$
Generate $\{x^{(k)}\}_{k=0}^{\infty}$ that converges to $x$ such that $Ax=b$

## Jacobi's Method
$$
\begin{align*}
(E_{i})\quad a_{i2}x_{1}+a_{i2}x_{2}+\cdots+a_{in}x_{n}&= b\\
a_{ii}x_{i}+\sum\limits_{j\ne i}a_{ij}x_{j}&= bi\\
a_{ii}x_{i}&= b_{i}-\sum\limits_{j\ne i}a_{ij}x_{j}\\
(\text{assume }a_{ii}\ne0)\quad x_{i}&= \frac{1}{a_{ii}}\left(b_{i}-\sum\limits_{j\ne i}a_{ij}x_{j}\right)\\
(\text{Jacobi's Method})\quad x_{i}^{(k)}&= \frac{1}{a_{ii}}\left(b_{i}-\sum\limits_{j\ne i}a_{ij}x_{j}^{(k)}\right)
\end{align*}
$$

$$
\begin{align*}
x^{(k)}&= -D^{-1}(L+u)x^{(k-1)}+D^{-1}b\\
\text{where }&D\text{ is a diagonal matrix}
\end{align*}
$$
In general, $Ax=b\Leftrightarrow x=Tx+c$ for some $T,c$
Then, $x^{(k)}=Tx^{(k-1)}+c$

## Gauss-Seidel Method
$$
\begin{align*}
(E_{i})\qquad a_{ii}x_{i}&= b_{i}-\sum\limits_{j\ne i}a_{ij}x_{j}\\
&= b_{i}-\sum\limits_{j=1}^{i-1}a_{ij}x_{j}-\sum\limits_{j=i+1}^{n}a_{ij}x_{j}\\
a_{ii}x_{i}^{(k)}&= b_{i}-\sum\limits_{j=1}^{i-1}a_{ij}x_{j}^{(k)}-\sum\limits_{j=i+1}^{n}a_{ij}x_{j}^{(k)}\\
Dx^{(k)}&= b-Lx^{(k)}-Ux^{(k-1)}\\
(D+L)x^{(k)}&= b-Ux^{(k-1)}\\
(\text{GS})\qquad x^{(k)}&= -(D+L)^{-1}Ux^{(k-1)}+(D+L)^{-1}b
\end{align*}
$$
