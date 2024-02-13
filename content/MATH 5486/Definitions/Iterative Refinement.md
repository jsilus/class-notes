If $x^{(0)}$ is an approximated solution $x$ to $Ax=b$, then 
$$
\begin{align}
x&=x^{(0)}+x-x^{(0)} \\
 & = x^{(0)}+A^{-1}b-x^{(0)} \\
 & =x^{(0)}+A^{-1}(b-Ax^{(0)}) \\
 & =x^{(0)}+e^{(0)} \\ \\
\text{where }e^{(0)} & =A^{-1}(b-Ax^{(0)}) \\
 & =A^{-1}r^{(0)} \\ \\
\text{where }r^{(0)} & =b-Ax^{(0)}\text{ is the residual vector for }x^{(0)}
\end{align}
$$
Find $e^{(0)}$ by $Ae^{(0)}=r^{(0)}$

### Iterative Refinement Method
$$
\begin{align}
\text{Step 1: }&
\begin{cases}
r^{(0)} & =b-Ax^{(0)} \\
Ae^{(0)} & =r^{(0)} \\
x^{(1)} & =x^{(0)}+e^{(0)}
\end{cases} \\ \\
\text{Step 2: }&
\begin{cases}
r^{(1)} & =b-Ax^{(1)} \\
Ae^{(1)} & =r^{(1)} \\
x^{(2)} & =x^{(1)}+e^{(1)}
\end{cases} \\
&\qquad\vdots \\&
\text{Step }k
\end{align}
$$
**Conclusion:** improvement is significant for an [[Conditional Number|ill-conditioned]] matrix $A$.

**Theorem:** $\lVert r^{(0)} \rVert\approx10^{-t}\lVert A \rVert\lVert x^{(0)} \rVert$ for $t$ digits of accuracy.
$\lVert e^{(0)} \rVert=\lVert A^{-1}r^{(0)} \rVert\leq \lVert A^{-1} \rVert\lVert r^{(0)} \rVert\approx 10^{-t}\kappa(A)\lVert x^{(0)} \rVert$ if $\kappa(A)<10^{t}$, then $\lVert e^{(0)} \rVert\lesssim \lVert x^{(0)} \rVert$.

In practice, $(A+\delta A)x=b+\delta b$ 
**Theorem:** Suppose $A$ is nonsingular and $\lVert \delta A \rVert< \frac{1}{\lVert A^{-1} \rVert}$. The solution $\tilde{x}$ to $(A+\delta A)\tilde{x}=b+\delta b$ approximates $x$ to $Ax=b$ with error estimate:
$$
\frac{\lVert x-\tilde{x} \rVert }{x}\leq \frac{\kappa(A)\lVert A \rVert }{\lVert A \rVert -\kappa(A)\lVert \delta A \rVert }\left( \frac{\lVert \delta b \rVert }{\lVert b \rVert }+\frac{\lVert \delta A \rVert }{\lVert A \rVert } \right)
$$
