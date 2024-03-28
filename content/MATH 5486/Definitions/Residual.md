
Suppose $\tilde{x}\in\mathbb{R}^{n}$ is an approximation of the solution to $Ax=b$. Then, the **residual** vector of $\tilde{x}$ with respect to $Ax=b$ is defined as
$$
r=b-A\tilde{x}
$$
If $\lVert r \rVert$ is small, then $\lVert x-\tilde{x} \rVert$ is small

**Theorem:** Suppose that $\tilde{x}$ is an approximate solution of $Ax=b$ and $r=b-A\tilde{x}$ is the residual for $\tilde{x}$. If $A^{-1}$ exists, then $\lVert x-\tilde{x} \rVert\leq \lVert A^{-1} \rVert\lVert r \rVert$. If $x\neq 0$ and $b\neq 0$, then
$$
\frac{1}{\lVert A \rVert \lVert A^{-1} \rVert } \frac{\lVert r \rVert }{\lVert b \rVert }\leq\frac{\lVert x-\tilde{x} \rVert}{\lVert x \rVert }\leq \underbrace{ \lVert A \rVert \lVert A^{-1} \rVert \frac{\lVert r \rVert }{\lVert b \rVert } }_{ \text{relative error} }
$$
*Proof:*
$$
\begin{align}
r&=b-A\tilde{x}=Ax-A\tilde{x} \\
&=A(x-\tilde{x}) \\
x-\tilde{x}&=A^{-1}r \\
\lVert x-\tilde{x} \rVert &\leq \lVert A^{-1} \rVert \lVert r \rVert \\
\end{align}
$$
Since $b=Ax$, then $\lVert b \rVert=\lVert Ax \rVert\leq \lVert A \rVert\lVert x \rVert\implies \frac{1}{\lVert x \rVert}\leq \frac{\lVert A \rVert}{\lVert b \rVert}$
Then,
$$
\frac{\lVert x-\tilde{x} \rVert }{\lVert x \rVert }\leq \lVert A \rVert \lVert A^{-1} \rVert \frac{\lVert r \rVert }{\lVert b \rVert }
$$

$$
\begin{align}
\lVert r \rVert \lVert x \rVert &=\lVert A(x-\tilde{x}) \rVert\lVert A^{-1}b \rVert  \\
&\leq(\lVert A \rVert \lVert x-\tilde{x} \rVert )(\lVert A^{-1} \rVert \lVert b \rVert ) \\
&=\lVert A \rVert \lVert A^{-1} \rVert \lVert b \rVert \lVert x-\tilde{x} \rVert  
\end{align}
$$
So
$$
\frac{1}{\lVert A \rVert \lVert A^{-1} \rVert } \frac{\lVert r \rVert }{\lVert b \rVert }\leq \frac{\lVert x-\tilde{x} \rVert }{\lVert x \rVert }  
$$

## Example ([[Gauss-Seidel]])
At step $(k)$, $E_{i}$ ($i\text{-th}$ equation)
Define $\vec{x}_{i}^{(k)}=(x_{1}^{(k)},x_{2}^{(k)},\dots,x_{i-1}^{(k)},x_{i+1}^{(k-1)},\dots,x_{n}^{(k-1)})^{T}$
Then, $r_{mi}^{(k)}=b_{m}-\left(\sum\limits_{j=1}^{i-1}a_{mj}x_{j}^{(k)}+\sum\limits_{j=i+1}^{n}a_{mj}x_{j}^{(k-1)}+a_{mi}x_{i}^{(k-1)}\right)$
So $\vec{r}_{i}^{(k)}=(r_{1i}^{(k)},r_{2i}^{(k)},\dots,r_{mi}^{(k)},\dots,r_{ni}^{(k)})^{T}$

When $m=i$, $r_{ii}^{(k)}=b_{i}-\left(\sum\limits_{j=1}^{i-1}a_{ij}x_{j}^{(k)}+\sum\limits_{j=i+1}^{n}a_{ij}x_{j}^{(k-1)}+a_{ii}x_{i}^{(k-1)}\right)$
Then, $a_{ii}x_{i}^{(k)}=r_{ii}^{(k)}+a_{ii}x_{i}^{(k-1)}$
So $x_{i}^{(k)}=x_{i}^{(k-1)}+\frac{1}{a_{ii}}r_{ii}^{(k)}$

This is the basis for the [[Relaxation Method]]


## Example
$$
\begin{bmatrix}
1 & 2 \\
1.0001 & 2
\end{bmatrix}
\begin{bmatrix}
x_{1} \\
x_{2}
\end{bmatrix}
=
\begin{bmatrix}
3 \\
3.0001
\end{bmatrix}
$$
$$
x=
\begin{pmatrix}
1 \\
1
\end{pmatrix}
\qquad
\tilde{x}=
\begin{pmatrix}
3 \\
-0.0001
\end{pmatrix}
$$
The residual $r=b-A\tilde{x}$
$$
r=
\begin{pmatrix}
3 \\
3.0001
\end{pmatrix}-
\begin{pmatrix}
1 & 2 \\
1.0001 & 2
\end{pmatrix}
\begin{pmatrix}
3 \\
-0.0001
\end{pmatrix}
=
\begin{pmatrix}
0.0002 \\
0
\end{pmatrix}
$$

$$
\begin{align}
\lVert r \rVert _{\infty}&=0.0002 \\
\lVert x-\tilde{x} \rVert _{\infty}&=z \\
x-\tilde{x}&=  
\begin{pmatrix}
-2 \\
1.0001
\end{pmatrix}
\end{align}
$$

*Problem:* Find $x$ such that the norm of the residual is minimized.
**Lemma:** If $x$ is a point such that $A^{\top}(Ax-b)=0$, then $x$ solves the least-square problem.