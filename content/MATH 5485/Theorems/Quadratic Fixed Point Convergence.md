## How to ensure quadratic [[Order of Convergence|convergence]]
### Conditions
Standard
$$
\begin{cases}
g\in C[a,b] \\
g(x)\subseteq[a,b] \\
g'\in C(a,b)\text{ and }|g'(x)|\le k<1
\end{cases}
$$

and

$$
\begin{cases}
g'(p)=0 \\
g''\text{ is continuous on an open interval I containing }p \\
|g''(x)|<M
\end{cases}
$$

>[!tip] If $g'(p)\ne0$, check for [[Linear Fixed Point Convergence]]

### Theorem

Then, $\exists\delta>0$ such that for $p_{0}\in[p-\delta,p+\delta]$, the $\{p_{n}=g(p_{n-1})\}$ converges at least quadratically to $p$.
Moreover, for sufficiently large $n$, $|p_{n+1}-p|<\frac{M}{2}|p_{n}-p|^{2}$

### Proof
Taylor expansion about $p$
$$
\begin{align*}
g(x)&= g(p)+g'(p)(x-p)+\frac{g''(\xi)}{2}(x-p)^{2}\text{, where }\xi\text{ between }x,p\\
&=p+\frac{g''(\xi)}{2}(x-p)^{2}\\\\
&\stackrel{x=p_{n}}{\Rightarrow} g(p_{n})=p+\frac{g''(\xi_{n})}{2}(p_{n}-p)^{2}\text{, where }\xi_{n}\text{ between }p_{n},p\\
&\Rightarrow\left|\frac{p_{n+1}-p}{(p_{n}-p)^{2}}\right|=\left|\frac{g''(\xi_{n})}{2}\right|\\\\
&\Rightarrow\lim\limits_{n\rightarrow\infty}\left|\frac{g''(\xi_{n})}{2}\right|\stackrel{g''\text{ is continuous}}{=}\left|\frac{g''(\lim\limits_{n\rightarrow\infty}\xi_{n})}{2}\right|=\frac{|g''(p)|}{2}<\frac{M}{2}\\
&\Rightarrow \text{quadratic convergence}
\end{align*}
$$
