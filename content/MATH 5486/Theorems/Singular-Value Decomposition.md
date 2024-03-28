An arbitrary $m\times n$ matrix can be decomposed as $A=PDQ^{\top}=USV^{\top}$ where $P\in \mathbb{R}^{m\times m}$ is unitary, $D\in \mathbb{R}^{m\times n}$ is diagonal, and $Q\in \mathbb{R}^{n\times n}$ is unitary.

For any $x\in \mathbb{R}^{n}$, $x^{\top}A^{\top}Ax=\lVert Ax \rVert_{2}^{2}\geq0$, then the eigenvalues of $A^{\top}A$ are nonnegative. Denote them by $\sigma_{1}^{2},\sigma_{2}^{2},\dots,\sigma_{n}^{2}$

We order them by $\sigma_{1}^{2}\geq\sigma_{2}^{2}\geq \cdots\geq\sigma_{r>0}^{2},\sigma_{r+1}^{2}=\cdots=\sigma_{n}^{2}=0$. Let $\{ u_{1},\dots,u_{n} \}$ be an orthonormal set of eigenvectors for $A^{\top}Au_{i}=\sigma_{i}^{2}u_{i}$. Then, $\lVert Au_{i} \rVert_{2}^{2}=u_{i}^{\top}A^{\top}Au_{i}=\sigma_{i}^{2}u_{i}^{\top}u_{i}$

Let $r=\text{rank}(A^{\top}A)\leq \min\{\text{rank}(A^{\top}),\text{rank(A)}\}\leq\min\{m,n\}$. We form $Q\in \mathbb{R}^{n\times n}$ whose rows are $u_{1}^{\top},\dots,u_{n}^{\top}$. Next, define $v_{i}=\sigma_{i}^{-1}Au_{i}$ for $1\leq i\leq n$. So, $\{ u_{1},\dots,u_{n} \}$ is orthonormal. $v_{i}^{\top}v_{j}=\sigma_{i}^{-1}u_{i}^{\top}A^{\top}\sigma_{j}^{-1}Au_{j}=\frac{1}{\sigma_{i}\sigma_{j}}u_{i}^{\top}A^{\top}Au_{j}=\delta_{ij}$

We select additional vectors $v_{i}$ $s$ that $\{ v_{1},\dots,v_{m} \}$ is an orthonormal base for $\mathbb{R}^{m}$. $D$ is a diagonal formed by $\sigma$.