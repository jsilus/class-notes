On a vector space, a **norm** (denoted by $\lVert\cdot\rVert$) is a function from $\mathbb{R}^{n}$ to $\mathbb{R}_{+}=\{x\in\mathbb{R}|x\ge0\}$.

1) $\lVert x\rVert>0\text{ if }x\in\mathbb{R}^{n},x\ne0$
2) $\lVert x\rVert=0\text{ iff }x=0$
3) $\lVert\lambda x\rVert=|\lambda|\lVert x\rVert,\forall\lambda$
4) $\lVert x+y\rVert\le\lVert x\rVert+\lVert y\rVert$ (**triangle inequality**)

A **unit ball** $B_{1}=\{\lVert x\rVert\le1|x\in\mathbb{R}^{n}\}$
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

## Theorems
**Theorem (distance):** $\forall x,y\in\mathbb{R}^{n},\lVert x-y\rVert\text{ is defined as the distance of }x\cdot y$

**Theorem (equivalence):** For two norms $p(\cdot)$ $q(\cdot)$, $p(\cdot)$ and $q(\cdot)$ are called equivalent if $\exists c,c>0$ such that $cq(x)\le p(x)\le cq(x),\forall x\in\mathbb{R}^{n}$.

*Example:* $\lVert\cdot\rVert_{1}\,,\,\lVert\cdot\rVert_{\infty}$ are equivalent.
$$
\begin{align*}
\lVert x\rVert_{1}&\le c\lVert x\rVert_{\infty}\\
\sum\limits_{i=1}^{n}|x_{i}|&\le n\max_{1\le i\le n}\sum\limits_{i=1}^{n}|x_{i}|
\end{align*}
$$

**Theorem (convergence):** In $v^{(1)},v^{(2)},\dots$ are a sequence of vectors in $(v,\lVert\cdot\rVert)$.
$\{v^{(k)}\}_{k\ge0}$ converges to $v\in V$ if $\lim\limits_{k\rightarrow\infty}\lVert v^{(k)}-v\rVert=0$.
$\forall\epsilon>0,\exists k(\epsilon)\in\mathbb{N}_{+}\text{ such that }\lVert v^{(k)}-v\rVert<\epsilon,\forall k\ge K$.
($\epsilon$-$\delta$ language)