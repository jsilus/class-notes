A method for finding a good $g(x)$ for use in the [[Fixed-Point Theorem]].

With it,
$$
g(x)=x-\frac{f(x)}{f'(x)}
$$
>[!tip] Additional Theorem (not always useful in practice)
>Let $f\in C^{2}[a,b]$. If $p\in(a,b)$ such that $f(p)=0$ and $f'(p)\ne0$, then $\exists\delta>0$ such that Newton's method generates $\{p_{n}\}^{\infty}_{n=1}$ converges to $p$ for any initial approximation $p_{0}\in[p-\delta,p+\delta]$.

## Remark
### 1.
$f'(p_{0})\ne0\cdots f'(p_{n-1})\ne0$
### 2.
The method is most effective when $f'$ is bounded away from zero near $p$

## Heuristic Derivation
Suppose $f\in C^{2}[a,b]$.
Let $p_{0}\in[a,b]$ be approximate to $p$ such that $f'(p_0)\ne0$ and $|p-p_{0}|$ is "small".

Consider the first order [[Taylor's Theorem|Taylor polynomial]] for $f(x)$ about $x=p_{0}$ and evaluate $x=p$.

$$
f(p)=f(p_{0})+f'(p_{0})(p-p_{0})+\frac{(p-p_{0})^{2}}{2}f''(\xi(p))=0
$$
where $\xi(p)$ is between $p$ and $p_{0}$.
$$
\begin{align*}
\Rightarrow 0&\approx f(p_{0})+f'(p_{0})(p-p_{0})\\
-f(p_{0})&\approx f'(p_{0})(p-p_{0})\\
p-p_{0}&\approx -\frac{f(p_{0})}{f'(p_{0})}\\
p&\approx p_{0}-\frac{f(p_{0})}{f'(p_{0})}\\
\Rightarrow p_{1}&= p_{0}-\frac{f(p_{0})}{f'(p_{0})}
\end{align*}
$$
## Derivation from [[Quadratic Fixed Point Convergence]]
Only possible method to get that has a quadratic [[Order of Convergence]].