If $A\in\mathbb{R}^{n\times n}$, the **matrix norm** $\lVert\,\cdot\,\rVert:\mathbb{R}^{n\times n}\rightarrow\mathbb{R}_{+}$ satisfies the following.

1) $\lVert A\rVert>0,\forall A\ne0$
2) $\lVert A\rVert=0\text{ iff }A\text{ is a zero matrix}$
3) $\lVert\alpha A\rVert=|\alpha|\lVert A\rVert$
4) $\lVert A+B\rVert\le\lVert A\rVert+\lVert B\rVert,\forall A,B\in\mathbb{R}^{n\times n}$
5) $\lVert AB\rVert\le\lVert A\rVert\,\lVert B\rVert$ (\* different from definition of [[Vector Norm]])

## Types of Matrix Norms
1) Matrix norm induced by vector norm
$$
\begin{align*}
\text{For a given vector norm }\lVert\,\cdot\,\rVert\\
\lVert A\rVert=\max_{\lVert x\rVert\le1}\lVert Ax\rVert=\max_{0\ne v\in\mathbb{R}^{n}}\frac{\lVert Av\rVert}{\lVert v\rVert}\\
v\in\mathbb{R}^{n},\left\lVert\frac{v}{\lVert v\rVert}\right\rVert=\frac{1}{\lVert v\rVert}\lVert v\rVert=1
\end{align*}
$$
**Theorem:**
$$
\lVert A\rVert=\max_{v\ne0}\frac{\lVert Av\rVert}{\lVert v\rVert}\text{ is a matrix norm}
$$

$$
\lVert A\rVert_{\infty}=\max_{v\ne0}\frac{\lVert Av\rVert_{\infty}}{\lVert v\rVert_{\infty}}=\max_{1\le i\le n}\sum\limits_{j=1}^{n}|a_{ij}|
$$


