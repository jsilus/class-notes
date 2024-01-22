[[Osculating Polynomial]] such that
$$
\begin{cases}
P_{n}(x_{i})=f(x_{i}), & i=0,1,\dots,n \\
P'_{n}(x_{i})=f'(x_{i}), & i=0,1,\dots,n
\end{cases}
$$

## Constructed By
$$
\begin{align*}
H_{2n+1}(x)&= \sum\limits_{j=0}^{n}f(x_{j})H_{n,j}(x)+\sum\limits_{j=0}^{n}f'(x_{j})\hat{H}_{n,j}(x)\\
\text{where}\\
H_{n,j}(x)&= \left[1-2(x-x_{j})L'_{n,j}(x_{j})\right]L_{n,j}^{2}(x)\\
\hat{H}_{n,j}(x)&= (x-x_{j})L_{n,j}^{2}(x)\\
L_{n,j} &\text{ denotes the Lagrange basis}
\end{align*}
$$
