## Added the following theorem to [[Newton's Method]]
Let $f\in C^{2}[a,b]$. If $p\in(a,b)$ such that $f(p)=0$ and $f'(p)\ne0$, then $\exists\delta>0$ such that Newton's method generates $\{p_{n}\}^{\infty}_{n=1}$ converges to $p$ for any initial approximation $p_{0}\in[p-\delta,p+\delta]$.

### Proof
##### Step 1: Continuity Check
$$
\begin{align*}
f\in C^{2}[a,b]\Rightarrow &f'\in C^{1}[a,b],&f'(p)\ne0\\
&f''\in C\text{ }[a,b]
\end{align*}
$$
Then, there exists a $\delta_{1}>0$ such that $f'(x)\ne0$ for all $x\in[p-\delta_{1},p+\delta_{1}]\subseteq[a,b]$.

$g(x)$ is well-defined and continuous on $[p-\delta_{1},p+\delta_{1}]$. Also,
$$
g'(x)=1- \frac{f'(x)f'(x)-f(x)f''(x)}{[f'(x)]^{2}}=\frac{f(x)f''(x)}{[f'(x)]^{2}}
$$
Then,
$$
\begin{align*}
g'(x)&\in C[p-\delta_{1},p+\delta_{1}]\\
g(x)&\in C^{1}[p-\delta_{1},p+\delta_{1}]
\end{align*}
$$
##### Step 2: Check $|g'(x)|\le k<1$?
By $f(p)=0\Rightarrow g'(p)=0$ and $g'(x)$ is continuous,

>[!tip] Problem 4b in [[MATH 5485/Homework/Homework 2]] is proving this

there exists a $\delta$ with $0<\delta<\delta_{1}$ for which $|g'(x)|\le k<1$ for all $x\in[p-\delta,p+\delta]$.

##### Step 3: $\text{Range of }g(x)\subseteq[p-\delta,p+\delta]$.
By [[Mean Value Theorem]], $|g(x)-g(p)|=|g'(\xi)||x-p|$.

$$
\begin{align*}
|g(x)-p|=|g(x)-g(p)|&=|g'(\xi)||x-p|\\
&\le k|x-p|\\
&< |x-p|\\
&< \delta
\end{align*}
$$
$$
\Rightarrow|g(x)-p|<\delta\Rightarrow-\delta<g(x)-p<\delta\Rightarrow p-\delta<g(x)<p+\delta
$$
##### Step 4:
By [[Fixed-Point Theorem]], $\{p_{n}\}^{\infty}_{n=1}\rightarrow p$.

>[!warning] Warning
>Not useful in practice. What we should do is pick a $p_{0}$, iterate a few steps, then it will either converge very fast or be divergent.

## Introduced Replacements
- [[Secant Method]]
- [[Method of False Position]]