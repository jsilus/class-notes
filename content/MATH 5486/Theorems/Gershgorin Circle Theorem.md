**Theorem:** Let $A$ be an $n\times n$ matrix and $R_{i}$ be the circle in the complex plane with center $a_{ii}$ and radius $\sum\limits_{ j \neq i,j=1 }^{n}\left| a_{ij} \right|$. Then,
$$
R_{i}=\left\{  z\in \mathbb{C}\biggr| \left| z-a_{ii} \right|<\sum\limits_{ j \neq  i,j=1 }^{n}\left| a_{ij} \right|    \right\}
$$
The eigenvalues of $A$ are contained within $R=\bigcup\limits_{i=1}^{n}R_{i}$.

*Proof:* Suppose $\lambda$ is an eigenvalue of $A$ with associated eigenvector $x$ such that $\lVert x \rVert_{\infty}=1$.
$$
\begin{align}
Ax & =\lambda x \\
\Rightarrow (Ax)_{i} & =\lambda x_{i} \\
\sum\limits_{ j = 1 }^{n} a_{ij}x_{j} & =\lambda x_{i} \\
\Rightarrow \sum\limits_{ j \neq i }a_{ij}x_{j}+a_{ii}x_{i}  & =\lambda x_{i} \\
\sum\limits_{ j \neq i }a_{ij}x_{j} & =(\lambda-a_{ii})x_{i} \\
\end{align}
$$
Since $\lVert x \rVert_{\infty}=1$, we can find $k\in \{ 1,\dots,n \}$ such that
$$
\begin{align}
(\lambda-a_{kk})x_{k} & =\sum\limits_{ j \neq k }a_{kj}x_{j} \\
\left| \lambda-a_{kk} \right| \left| x_{k} \right|  & =\left| \sum\limits_{ j \neq k }a_{kj}x_{j}  \right|  \leq \left| \sum\limits_{ j \neq k }a_{kj}  \right| 
\end{align}
$$
Recall if $A$ is strictly diagonally dominant, then $T=-D^{-1}(L+U)$, $\rho(T)<1$
