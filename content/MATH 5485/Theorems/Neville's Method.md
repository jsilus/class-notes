Let $f$ be a function at $x_{0},x_{1},\dots,x_{n}$ and suppose that $m_{1},m_{2},\dots,m_{k}$ are $k$ distinct integers with $0\le m_{i}\le n$ for each $i$.

Then, The [[Lagrange Polynomial]] $L_{n}(x)$ that agrees with $f(x)$ at $k$ points $x_{m_{1}},x_{m_{2}},\dots,x_{m_{k}}$ is denoted by $P_{m_{1},m_{2}\dots,m_{k}}$.


### Theorem
Let $f$ be defined at $x_{0},x_{1},\dots,x_{k}$ and let $x_{j}$ and $x_{i}$ be two distinct numbers in the set. Then,
$$
P_{k}(x)=\frac{(x-x_{j})P_{0,1,\dots,j-1,j-2,\dots,k}(x)-(x-x_{i})P_{0,1,\dots,i-1,i\dots,k}(x)}{x_{i}-x_{j}}
$$
is the $k$th polynomial that interpolates $f$ at $k+1$ points $x_{0},x_{1},\dots,x_{k}$.

## Q Notation for Lagrange Polynomial
$$
\begin{align*}
P_{i,i+1,i+2,\dots,j-2,j-1,j}&= Q_{j,j-i}\\
P_{j}&= Q_{j,0}
\end{align*}
$$
Much shorter notation