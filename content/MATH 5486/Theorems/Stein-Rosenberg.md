**Corollary:**
$$
x-x^{(k)}=T^{k}(x-x^{(0)})\Leftrightarrow\lVert x-x^{(k)}\rVert\le\lVert T\rVert^{k}\lVert x-x^{(0)}\rVert
$$
**Theorem:**

$$
\begin{align*}
\lVert x-x^{(k-1)}\rVert&\le \lVert x-x^{(1)}\rVert+\lVert x^{(1)}-x^{(0)}\rVert\\
&\le \lVert T\rVert\lVert x-x^{(0)}\rVert+\lVert x^{(1)}-x^{(0)}\rVert\\
(1-\lVert T\rVert)\lVert x-x^{(0)}\rVert&\le \lVert x^{(1)}-x^{(0)}\rVert\\
\lVert x-x^{(0)}\rVert&\le \frac{1}{1-\lVert T\rVert}\lVert x^{(1)}-x^{(0)}\rVert\\
\text{then, }\lVert x-x^{(k)}\rVert&\le \boxed{\frac{\lVert T\rVert^{k}}{1-\lVert T\rVert}\lVert x^{(1)}-x^{0}\rVert}
\end{align*}
$$


**Stein-Rosenberg Theorem:** If $a_{ij}\le0$ for each $i\ne j$ and $a_{ii}>0,i\in[n]$, then one and only one of the following holds:
1) $0\le\rho(T_{2})<\rho(T_{1})<1$
2) $1<\rho(T_{1})<\rho(T_{2})$
3) $\rho(T_{1})=\rho(T_{2})=0$
4) $\rho(T_{1})=\rho(T_{2})=1$

where $T_{1}$ is from [[Jacobi's Method]] and $T_{2}$ is from [[Gauss-Seidel]].