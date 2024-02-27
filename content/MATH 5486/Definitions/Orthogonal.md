Very related (overlap) with [[A-orthogonality]]


*Definition:* $\{ v^{(1)},\dots,v^{(k)} \}$ is called **orthogonal** if $\left\langle v^{(i)},v^{(j)} \right\rangle=(v^{(i)})^{\top}v^{(j)}=0$ for $i\neq j$. If, in addition, $\lVert v^{(i)} \rVert_{2}=1$ for $i\in \{ 1,\dots,n \}$, then it is called **orthonormal**.

**Theorem:** A orthogonal set is a linearly independent set.

*Definition:* An $n\times n$ matrix $Q$ is said to be orthogonal if its columns form an orthonormal set in $\mathbb{R}^{n}$.
## Properties
**Theorem:** If $Q$ is an orthogonal $n\times n$ matrix, then:
1) $Q$ is invertible with $Q^{-1}=Q^{\top}$. $Q$ is called **unitary**
2) For any $x,y\in \mathbb{R}^{n}$, then $\left\langle Qx,Qy \right\rangle=(Qx)^{\top}Qy=x^{\top}Q^{\top}Qy=x^{\top}y=\left\langle x,y \right\rangle$ 
3) $\lVert Qx \rVert_{2}=\lVert x \rVert_{2}$, $\forall x\in \mathbb{R}^{n}$. $Q$ is called $\color{lightgreen}l_{2}\text{-preserving}$


*Definition:* Two matrices $A$ and $B$ are said to be similar if $\exists$ a nonsingular $S$ such that $A=S^{-1}BS$