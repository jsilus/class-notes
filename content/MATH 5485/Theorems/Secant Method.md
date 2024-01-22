Approximate $f'(x)$ in [[Newton's Method]]. This makes it easier for computers to calculate.

$$
\begin{align*}
f'(p_{n-1})&=\lim_{x\rightarrow p_{n-1}}\frac{f(x)-f(p_{n-1})}{x-p_{n-1}}\\
&\approx \frac{f(p_{n-2})-f(p_{n-1})}{p_{n-2}-p_{n-1}}
\end{align*}
$$
Then,
$$
p_{n}=p_{n-1}-\frac{f(p_{n-1})[p_{n-2}-p_{n-1}]}{f(p_{n-2})-f(p_{n-1})}
$$