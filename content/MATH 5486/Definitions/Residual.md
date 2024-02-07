
Suppose $\tilde{x}\in\mathbb{R}^{n}$ is an approximation of the solution to $Ax=b$. Then, the **residual** vector of $\tilde{x}$ with respect to $Ax=b$ is defined as
$$
r=b-A\tilde{x}
$$

## Example ([[Gauss-Seidel]])
At step $(k)$, $E_{i}$ ($i\text{-th}$ equation)
Define $\vec{x}_{i}^{(k)}=(x_{1}^{(k)},x_{2}^{(k)},\dots,x_{i-1}^{(k)},x_{i+1}^{(k-1)},\dots,x_{n}^{(k-1)})^{T}$
Then, $r_{mi}^{(k)}=b_{m}-\left(\sum\limits_{j=1}^{i-1}a_{mj}x_{j}^{(k)}+\sum\limits_{j=i+1}^{n}a_{mj}x_{j}^{(k-1)}+a_{mi}x_{i}^{(k-1)}\right)$
So $\vec{r}_{i}^{(k)}=(r_{1i}^{(k)},r_{2i}^{(k)},\dots,r_{mi}^{(k)},\dots,r_{ni}^{(k)})^{T}$

When $m=i$, $r_{ii}^{(k)}=b_{i}-\left(\sum\limits_{j=1}^{i-1}a_{ij}x_{j}^{(k)}+\sum\limits_{j=i+1}^{n}a_{ij}x_{j}^{(k-1)}+a_{ii}x_{i}^{(k-1)}\right)$
Then, $a_{ii}x_{i}^{(k)}=r_{ii}^{(k)}+a_{ii}x_{i}^{(k-1)}$
So $x_{i}^{(k)}=x_{i}^{(k-1)}+\frac{1}{a_{ii}}r_{ii}^{(k)}$

This is the basis for the [[Relaxation Method]]

