
Start with $x^{(0)}\in \mathbb{R}^{n}$, $r^{(0)}=b-Ax^{(0)}$. Let $v^{(1)}=r^{(0)}$. Assume that $v^{(1)},v^{(2)},\dots,v^{(k-1)}$ and $x^{(1)},x^{(2)},\dots,x^{(k-1)}$ have been captured by
$$
\begin{align}
x^{(k)}&=x^{(k-2)}+t_{k-1}v^{(k-1)} \\
\text{where } & \left\langle v^{(i)},Av^{(j)} \right\rangle =0 \\
\text{and } & \left\langle r^{(i)},r^{(j)} \right\rangle=0\text{ for }i\neq j
\end{align}
$$
If $x^{(k-1)}$ is not the solution. Let $r^{k-1}=b-Ax^{(k-1)}\neq0$ and from **Theorem (\*)**, $\left\langle r^{(k-1)},v^{(i)} \right\rangle=0$ for $i=1,2,\dots,k-1$ we generate $v^{(k)}$ by $v^{(k)}=r^{(k-1)}+S_{k-1}v^{(k-1)}$

**Theorem (\*)**
The residual vector $r^{(k)},k=1,\dots,n$ for a conjugate method satisfies $\left\langle r^{(k)},v^{(j)} \right\rangle=0$ for $j=1,2,\dots,k$.

$$
t_{k}=\frac{\left\langle v^{(k)},r^{(k-1)} \right\rangle }{\left\langle v^{(k)},Av^{(k)} \right\rangle }=\frac{ \lVert r^{(k-1)} \rVert ^{2} }{\left\langle v^{(k)},Av^{(k)} \right\rangle }
$$
$$
r^{(k)}=b-Ax^{(k)}=b-Ax^{(k-1)}+t_{k}Av^{(k)}
$$