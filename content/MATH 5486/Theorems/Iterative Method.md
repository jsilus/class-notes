
$$
x^{(k)}=Tx^{(k-1)}+c, T\in\mathbb{R}^{n\times n},c\in\mathbb{R}^{n}
$$
**Theorem:** For any $x^{(0)}\in\mathbb{R}^{n}$, the sequence $\{x^{(k)}\}_{k\ge0}$ defined by $x^{(k)}=Tx^{(k-1)}+c$ converges if and only if $\rho(T)<1$.
*Proof:* Assume $\rho(T)<1$. 
$$
\begin{align*}
x^{(k)}&= Tx^{(k-1)}+c\\
&= T(Tx^{(k-2)}+c)+c\\
&= T^{2}x^{(k-2)}+(T+I)c\\
&= T^{3}x^{(k-3)}+(T^{2}+T+I)c\\
&\,\,\,\vdots\\
&= T^{k}x^{(0)}+(T^{k}+T^{k-1}+\cdots+T+I)c
\end{align*}
$$
Since $\rho(T)<1$, then $\lim\limits_{k\rightarrow\infty}\sum\limits_{n=0}^{k}T^{n}=(I-T)^{-1}$.
Then, $\lim\limits_{k\rightarrow\infty}x^{(k)}=\lim\limits_{k\rightarrow\infty}(T^{k}x^{(0)}+(T^{k}+\cdots+T+I)c)$
So, $x=(I-T)^{-1}c\Rightarrow c=(I-T)x=x-Tx\Rightarrow x=Tx+c$

*Other direction:*
Let $x$ be the unique solution of $x=Tx+c$ and $z$ is any vector. Define $x^{(0)}=x-z$, then $x^{(k)}=Tx^{(k-1)}+c$
$x-x^{(k)}=(Tx+c)-(Tx^{(k-1)}+c)=Tx-TxT^{(k-1)}=T(x-x^{(k-1)})=\cdots=T^{k}(x-x^{(0)})=T^{k}z$
Since $\lim\limits_{k\rightarrow\infty}T^{k}z=\lim\limits_{k\rightarrow\infty}x-x^{(k)}=0$, then $\rho(T)<0$.

## With Jacobi's Method
$T_{1}=D^{-1}(L+U)$, $c_{1}=D^{-1}b$

## With Gauss-Seidel
$T_{2}=-(D+L)^{-1}U$, $c_{2}=(D+L)^{-1}b$


## Extra
**Theorem:** If $A$ is [[Strictly Diagonal Dominant]], then [[Jacobi's Method]] and [[Gauss-Seidel]] converge to a unique point.

