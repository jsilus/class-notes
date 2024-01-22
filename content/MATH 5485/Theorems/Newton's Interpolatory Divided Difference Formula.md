
[[Lagrange Polynomial]] can be found by
$$
\begin{align*}
P_{n}(x)&= f[x_{0}]+f[x_{0},x_{1}](x-x_{0})+\cdots+f[x_{0},\dots,x_{n}](x-x_{0})\cdots(x-x_{n-1})\\
&= f[x_{0}]+\sum\limits_{k=1}^{n}\left[f[x_{0},\dots,x_{k}]\prod\limits_{m=0}^{k-1}(x-x_{m})\right]
\end{align*}
$$

where

Zero$^\text{th}$ divided difference
$f[x_{i}]=f(x_{i})$
First divided difference
$f[x_{i},x_{i+1}]=\frac{f[x_{i+1}]-f[x_{i}]}{x_{i+1}-x_{i}}$
Second divided difference
$$
f[x_{i},x_{i+1},x_{i+2}]=\frac{f[x_{i+1},x_{i+2}]-f[x_{i},x_{i+1}]}{x_{i+2}-x_{i}}
$$
### Backwards Divided Difference
This can also be iterated backwards from $x_n$ rather than from $x_0$ if our approximation $x$ is closer to $x_n$. If it is closest to the center of the range, use [[Stirling's Formula]].
## Example as a Table

| $x$     | $f(x)$     | $0\text{th}$ | $1\text{st}$                                           | $2\text{nd}$                                                             |
| ------- | ---------- | ------------ | ------------------------------------------------------ | ------------------------------------------------------------------------ |
| $x_{0}$ | $f(x_{0})$ | $f[x_{0}]$   | $f[x_{0},x_{1}]=\frac{f[x_{1}]-f[x_{0}]}{x_{1}-x_{0}}$ | $f[x_{0},x_{1},x_{2}]=\frac{f[x_{1},x_{2}]-f[x_{0},x_{1}]}{x_{2}-x_{0}}$ |
| $x_{1}$ | $f(x_{1})$ | $f[x_{1}]$   | $f[x_{1},x_{2}]=\frac{f[x_{2}]-f[x_{1}]}{x_{2}-x_{1}}$ | $f[x_{1},x_{2},x_{3}]=\frac{f[x_{2},x_{3}]-f[x_{1},x_{2}]}{x_{3}-x_{1}}$ |
| $x_{2}$ | $f(x_{2})$ | $f[x_{2}]$   | $f[x_{2},x_{3}]=\frac{f[x_{3}]-f[x_{2}]}{x_{3}-x_{2}}$ |                                                                          |
| $x_{3}$ | $f(x_{3})$ | $f[x_{3}]$   |                                                        |                                                                          |

### $P_{3}(x)$ passing through $x_{0},x_{1},x_{2},x_{3}$?
Pick one from each column of the table
$$
\begin{align*}
P_{3}(x)&= f[x_{0}]+f[x_{0},x_{1}](x-x_{0})+f[x_{0},x_{1},x_{2}](x-x_{0})(x-x_{1})\\
&+ f[x_{0},x_{1},x_{2},x_{3}](x-x_{0})(x-x_{1})(x-x_{2})
\end{align*}
$$

## Theorem
Suppose that $f\in C^{n}[a,b]$ such that and $x_{0},x_{1},\dots,x_{n}$ are distinct in $[a,b]$, then there exists a number $\xi\in(a,b)$ with $f[x_{0},x_{1},\dots,x_{n}]=\frac{f^{(n)}(\xi)}{n!}$
### Proof
$\boxed{g(x)=f(x)-P_{n}(x)}$

This forms a sin-like graph

Then, by [[Rolle's Theorem]] over many iterations (as seen in [[Lagrange Polynomial]]),
$\exists\xi\in(a,b),g^{(n)}(\xi)=0$

Finally,
$$
0=g^{(n)}(\xi)=f^{(n)}(\xi)-P_{n}^{(n)}(\xi)=f^{(n)}(\xi)-f[x_{0},x_{1},\dots,x_{n}]n!
$$

## Theorem
If $x_{0,}x_{1},\dots,x_{n}$ are equally distributed, then $h=x_{i+1}-x_{i}$ for each $i=0,1,\dots,n-1$.
Then,
$$
x=x_{0}+sh\text{ where }
\begin{cases}
s=1, & x=x_{1} \\
s=3, & x=x_{3} \\
s=\frac{1}{2}, & x=x_{0}+ \frac{1}{2}h=x_{\frac{1}{2}}
\end{cases}
$$
So
$$
P_{n}(x)=f[x_{0}]+\sum\limits_{k=1}^{n}\left[f[x_{0},x_{1},\dots,x_{k}](sh)^{k}\right]
$$