Suppose $f\in C[a,b]$ and $f(a)f(b)<0$
Then, $\{p_{n}\}_{n=1}^{\infty}$ approximates an exact solution $p$ where $f(p)=0$ with $|p_{n}-p|\le \frac{b-a}{2^{n}}$ when $n\ge1$.

### Proof
##### Lambda: For each $n\ge1$, $b_{n}-a_{n}=\frac{b-a}{2^{n-1}},p\in(a_{n},b_{n})$.
Since $p_{n}=\frac{a_{n}+b_{n}}{2}$,
$$
\begin{align*}
|p_{n}-p|&\le\left|\frac{a_{n}+b_{n}}{2}-a_{n}\right|=\frac{b_{n}-a_{n}}{2}=\frac{b-a}{2^{n+1}}*\frac{1}{2}=\frac{b-a}{2^{n}}\\
\Rightarrow|p_{n}-p|&\le \frac{b-a}{2^{n}}
\end{align*}
$$

### Remarks
How many iterations of bisection are needed to achieve accuracy within $y$?
$$
\begin{align*}
|p_{n}-p|\le \frac{b-a}{2^{n}}&\le y\\
\frac{b-a}{y}&\le 2^{n}\\
n&= \log_{2}\left(\frac{b-a}{y}\right)
\end{align*}
$$
Remember $p= \frac{a+b}{2}=a+ \frac{b-a}{2}$
If calculating with rounding or chopping, one may be better than the other.

