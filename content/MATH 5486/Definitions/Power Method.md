Assume an $n\times n$ matrix $A$ has $n$ eigenvalues $\lambda_{1},\dots,\lambda_{n}$ with a collection of linearly independent eigenvectors $\{ v^{(1)},\dots,v^{(n)} \}$. Moreover, we assume $\left| \lambda_{1} \right|>\left| \lambda_{2} \right|\geq \cdots\geq \left| \lambda_{n} \right|\geq0$.

Let $x^{(0)}$ be any vector in $\mathbb{R}^{n}$ (or $\mathbb{C}^{n}$). $x^{(0)}=\beta_{1}v^{(1)}+\cdots+\beta_{n}v^{(n)}$. Define $x^{(1)}=Ax^{(0)}$, $x^{(2)}=Ax^{(1)}=A^{2}x^{(0)}$, $\dots$ , $x^{(k)}=Ax^{(k-1)}=A^{k}x^{(0)}$.

Let $u^{(1)}=\beta_{i}u^{(i)},i=1,\dots,n$

Then $x^{(0)}=u^{(1)}+\cdots+u^{(n)}$

$x^{(k)}=A^{k}x^{(0)}=A^{k}u^{(1)}+\cdots+A^{k}u^{(n)}$

$x^{(k)}=\lambda_{1}^{k}u^{(1)}+\cdots+\lambda_{n}^{k}u^{(n)}$



Let $\phi(\,\cdot\,)$ be any linear function on $\mathbb{R}^{n}$ for which $\phi(u^{(1)})\neq0$. Since $\phi(\,\cdot\,)$ is linear,
$$
\begin{align}
\phi(\alpha x+\beta y) & =\alpha \phi(x)+\beta \phi(y) \\
\phi(x^{(k)}) & =\phi(\lambda_{1}^{(k)}(u^{(1)}+\epsilon^{(k)})) \\
 & =\lambda_{1}^{(k)}\left[ \phi(u^{(1)})+\phi(\epsilon^{(k)}) \right] 
\end{align}
$$

Let $$r^{k}=\frac{\phi(x^{(k+1)})}{\phi(x^{(k)})}$$
Then,
$$
\begin{align}
r^{k} & =\frac{\lambda_{1}^{k+1}(\phi(u^{(1)})+\phi(\epsilon^{(k+1)}))}{\lambda_{1}^{k}(\phi(u^{(1)})+\phi(\epsilon^{(k)}))} \\
 & =\lambda_{1}\left( \frac{\phi(u^{(1)})+\phi(\epsilon^{(k+1)})}{\phi(u^{(1)})+\phi(\epsilon^{(k)})} \right) \to \lambda_{1}
\end{align}
$$
Linear convergence
## Aitken Acceleration
For given $\{ r_{k} \}$, we construct $s_{k}$ by$$s_{k}=\frac{r_{k}r_{k+2}-r_{k+1}^{2}}{r_{k+2}-2r_{k+1}+2_{k}}$$
$s_{k}$ converges faster than $\{ r_{k} \}$

**Theorem:** Let $\{ r_{k} \}$ be the sequence that converges to $r$. Let $$s_{k}=\frac{r_{k}r_{k+2}-r_{k+1}^{2}}{r_{k+2}-2r_{k+1}+2_{k}},\qquad k\geq 0$$
Then $\{ s_{k} \}$ converges faster than $\{ r_{k} \}$

## Algorithm
Input: $x^{(0)}$, $A$
$$
\begin{align}
&\operatorname{for}k=1,\dots,M\operatorname{do} \\
&\qquad\quad y^{(k)}\leftarrow Ax^{(k-1)} \\
 & \qquad\quad r^{k}\leftarrow \frac{\phi(y^{(k)})}{\phi(x^{(k-1)})} \\
 & \qquad\quad \lambda^{(k)}\leftarrow \frac{y^{(k)}}{\lVert y^{(k)} \rVert_{\infty} } \\
&\operatorname{done}
\end{align}
$$
### Example Problem
$$
A=\begin{bmatrix}
6 & 5 & -5 \\
2 & 6 & -2 \\
2 & 5 & -1
\end{bmatrix}
,
x^{(0)}=
\begin{pmatrix}
-1 \\
1 \\
1
\end{pmatrix}
$$
Let $\phi(x)=x_{2}$
