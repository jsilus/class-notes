For any $x,y\in \mathbb{R}^{n}$, the **inner product** of $x$ and $y$ is defined by 
$$
\left\langle x,y \right\rangle =x^{\top}y=\vec{x}\cdot\vec{y}=\sum_{ i = 1 }^{n} x_{i}y_{i}
$$
## Properties
1) $\left\langle x,y \right\rangle=\left\langle y,x \right\rangle$
2) $\left\langle \alpha x,y \right\rangle=\left\langle x,\alpha y \right\rangle=\alpha \left\langle x,y \right\rangle$
3) $\left\langle x+y,z \right\rangle=\left\langle x,z \right\rangle+\left\langle y,z \right\rangle$
4) $\left\langle x,Ay \right\rangle=\left\langle A^{\top}x,y \right\rangle$

**Lemma:** If $A$ is symmetric and positive definite, then the problem of solving $Ax=b$ is equivalent to the problem of minimizing the quadratic form
$$
g(x)=\left\langle x,Ax \right\rangle -2\left\langle x,b \right\rangle =x^{\top}Ax-2b^{\top}x\in \mathbb{R}
$$
*Proof:* For fixed $x,v\in \mathbb{R}^{n}$ and $t\in \mathbb{R}$
$$
g(x+tv)=g(x)+2t\left\langle Ax-b,v \right\rangle +t^{2}\left\langle v,Av \right\rangle
$$
This is then minimized at
$$
\tilde{t}=\frac{\left\langle v,b-Ax \right\rangle }{\left\langle v,Av \right\rangle }
$$
and the **steepest descent** (slow in practice for linear systems) is at
$$
\begin{align}
x^{(k)}&=x^{(k-1)}+t_{k}v^{(k)} \\
t_{k} & =\frac{\left\langle v^{(k)},b-Ax^{(k-1)} \right\rangle }{\left\langle v^{(k)},Av^{(k)} \right\rangle }=\frac{\left\langle v^{(k)},r^{(k-1)} \right\rangle }{\left\langle v^{(k)},Av^{(k)} \right\rangle } \\
\text{where }r^{(k-1)} & =b-Ax^{(k-1)}
\end{align}
$$
and the **searching direction** is
$$
-\nabla g(x^{(k-1)})=v^{(k)}
$$
