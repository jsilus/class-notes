On a vector space, a **norm** (denoted by $\lVert x\rVert$) is a function from $\mathbb{R}^{n}$ to $\mathbb{R}_{+}=\{x\in\mathbb{R}|x\ge0\}$.

1) $\lVert x\rVert>0\text{ if }x\in\mathbb{R}^{n},x\ne0$
2) $\lVert x\rVert=0\text{ iff }x=0$
3) $\lVert\lambda x\rVert=|\lambda|\lVert x\rVert,\forall\lambda$
4) $\lVert x+y\rVert\le\lVert x\rVert+\lVert y\rVert$ (**triangle inequality**)


A **unit ball** $B_{1}=\{\lVert x\rVert\le1|x\in\mathbb{R}^{n}\}$

**Theorem:** $$
\forall x,y\in\mathbb{R}^{n},\lVert x-y\rVert\text{ is defined as the distance of }x\
$$
## Special Norms
$$
\begin{align*}
l_{p}\text{-norm}, p\ge1\\
\lVert x\rVert_{p}=\left(\sum\limits_{i=1}^{n}|x_{i}|^{p}\right)^{\frac{1}{p}}
\end{align*}
$$
$$
\begin{align*}
l_{2}\text{-norm}\\
\lVert x\rVert_{2}=\sqrt{\sum\limits_{i=1}^{n}x_{i}^{2}}
\end{align*}
$$
$$
\begin{align*}
l_{1}\text{-norm}\\
\lVert x\rVert_{1}=\sum\limits_{i=1}^{n}|x_{i}|
\end{align*}
$$
$$
\begin{align*}
l_{\infty}\text{-norm}\\
\lVert x\rVert_{\infty}=\max_{1\le i\le n}|x_{i}|
\end{align*}
$$

