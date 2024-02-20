Suppose $A$ is [[Positive Definite]] and symmetric. Assume $\{ v^{(1)},v^{(2)},\dots,v^{(n)} \}$ satisfies $\left\langle v^{(i)},Av^{(j)} \right\rangle=0$ for $i\neq j$. We call $\{ v^{(1)},v^{(2)},\dots,v^{(n)} \}$ is an **A-orthogonal** system

Assume $\{ u^{(1)},u^{(2)},\dots,u^{(n)} \}$ satisfies $\left\langle u^{(i)},Au^{(j)} \right\rangle=\delta_{ij}$ for $1\leq i,j\leq n$ and 
$$
\delta_{ij}=
\begin{cases}
1  & i=j\\
0 & i\neq j
\end{cases}
$$
Then, we call this an **A-orthonormal** system.

**Theorem:** Let $\{ u^{(1)},u^{(2)},\dots,u^{(n)} \}$ be an A-orthonormal system. Define
$$
\begin{align}
x^{(i)}&=x^{(i-1)}+\left\langle b-Ax^{(i-1)},u^{(i)} \right\rangle u^{(i)} \\
 & 1\leq i\leq n \\
\text{where }x^{(0)}&\in \mathbb{R}^{n}\text{ is arbitrary}
\end{align}
$$
Then, $Ax^{(n)}=b$
