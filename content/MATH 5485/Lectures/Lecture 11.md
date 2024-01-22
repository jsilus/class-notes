Actually started [[Method of False Position]].

## Error Analysis for Iterative Method
Talked about [[Order of Convergence]]

### Example
$\{p_{n}\}$ and $\{q_{n}\}\rightarrow0$
For our $p$ case,
$$
\begin{align*}
\lim\limits_{n\rightarrow\infty}\frac{|p_{n+1}-0|}{|p_{n}-0|}=\lambda_{p}\\
\approx\frac{|p_{n+1}|}{|p_{n}|}=\lambda_{p}
\end{align*}
$$
so
$$
\begin{align*}
\Rightarrow|p_{n+1}|&= \lambda_{p}|p_{n}|\\
&= \lambda_{p}^{2}|p_{n-1}|\\
&\text{ }\cdots\\
&= \lambda_{p}^{n+1}|p_{0}|
\end{align*}
$$

This shows the linear convergence.

For our $q$ case,
$$
\begin{align*}
\lim\limits_{n\rightarrow\infty}\frac{|q_{n+1}-0|}{|q_{n}-0|^{2}}=\lambda_{q}\\
\approx\frac{|q_{n+1}|}{|q_{n}|^{2}}=\lambda_{q}
\end{align*}
$$
so
$$
\begin{align*}
\Rightarrow|q_{n+1}|&= \lambda_{q}|q_{n}|^{2}\\
&= \lambda_{q}(\lambda_{q}|q_{n-1}|^{2})^{2}\\
&= \lambda_{q}^{3}|q_{n-1}|^{4}\\
&\text{ }\cdots\\
&= \lambda_{q}^{2^{n}-1}|q_{0}|^{2^{n}}
\end{align*}
$$
This shows the quadratic convergence.