
$$
\text{ If }g\in C[a,b]\text{ and }g(x)\in[a,b]\text{ for all }x\in[a,b]\text{, then }g(x)\text{ has at least one fixed point in }[a,b].
$$

$$
\text{Case I: if }
\begin{cases}
g(a)=a \\
g(b)=b
\end{cases}
\text{ then }g\text{ has fixed-points at the endpoints}
$$
$$
\begin{align*}
\text{Case II: if }
\begin{cases}
g(a)>a \\
g(b)<b
\end{cases}
&\text{ then set }h(x)=g(x)-x\Rightarrow
\begin{cases}
h(a)=g(a)-a>0 \\
h(b)=g(b)-b<0
\end{cases}\\
&\text{and use IVT to find one or more solution(s) to }h(x)
\end{align*}
$$
[[Intermediate Value Theorem|IVT]] referenced
### Condition for exactly one fixed point
If, in addition, $g'(x)$ exists on $(a,b)$ and a positive constant $k<1$ exists with $|g'(x)|\le k$ for all $x\in(a,b)$, then there exists **exactly** one fixed point in $[a,b]$.

#### Proof of exactly one fixed point
Suppose $|g'(x)|\le k\lt 1$ and $p$ and $q$ are both fixed points in $[a,b]$ such that $g(p)=p$ and $g(q)=q$. Then, if $p\ne q$, $\exists \xi\Rightarrow g'(\xi)=\frac{g(p)-g(q)}{p-q}$ by [[Mean Value Theorem]]
Thus, $|p-q|=|g(p)-g(q)|=|g'(\xi)||p-q|\le k|p-q|\lt|p-q|$
This is a contradiction, so there cannot be two fixed points.

#### Error
If $g$ satisfies all conditions in the fixed-point theorem above, the upper bound for the error involved in using $\{P_{n}\}$ to approximate $P$ are given by 
$$
\begin{cases}
|P_{n}-P|\le k^{n}\max\{P_{0}-a,b-P_{0}\} \\
|P_{n}-P|\le \frac{k^{n}}{1-k}|P_{1}-P_{0}|
\end{cases}
$$

## Convergence
- Generally [[Linear Fixed Point Convergence|linear]]
- Sometimes [[Quadratic Fixed Point Convergence|quadratic]]