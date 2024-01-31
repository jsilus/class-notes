The **spectral radius** is defined as
$$
\begin{align*}
\rho(A)&= \max_{1\le i\le n}|\lambda_{i}|\\
\text{where }&\lambda_{1},\dots,\lambda_{n}\text{ are eigenvalues of }A
\end{align*}
$$

**Theorem:** If $A\in\mathbb{R}^{n\times n}$, then
1) $\lVert A\rVert_{2}=\sqrt{\rho(A^{T}A)}$
2) $\rho(A)\le\lVert A\rVert$ any natural [[Matrix Norm|norm]] of $A$


## Theorems
**Lemma:** If $\rho(T)<1$, then $(I-T)^{-1}$ exists and $(I-T)^{-1}=I+T+T^{2}+\cdots=\sum\limits_{k=0}^{\infty}T^{k}$.
*Proof:* $\forall T$, $Tx=\lambda x,\exists\lambda$ that is an eigenvalue of $T$. Then,
$$
(I-T)x=x-Tx=x-\lambda x=(1-\lambda )x
$$
so $1-\lambda$ is an eigenvalue of $I-T$.
Because $\rho(T)<1$, $|\lambda|\le\rho(T)<1\Rightarrow1-\lambda\ne0$.
Then $I-T$ is nonsingular. (i.e. $(I-T)^{-1}$ exists)

We want to show that $\left(\sum\limits_{k=0}^{\infty}T^{k}\right)(I-T)=I$. Let $S_{n}=\sum\limits_{k=0}^{n}T^{k}$.
$$
\begin{align*}
&\quad \lim\limits_{n\rightarrow\infty}S_{n}(I-T)\\
&= \lim\limits_{n\rightarrow\infty}\left[(I+T+\cdots+T^{n})-T(I+T+\cdots+T^{n})\right]\\
&= \lim\limits_{n\rightarrow\infty}\left[I-T^{n+1}\right]\\
&= I
\end{align*}
$$
Since $\rho(T)<1$, then $T^{n+1}\rightarrow0$.

**Theorem:** $x^{(k)}=Tx^{(k-1)}+c$ converges to $x$ such that $x=Tx+c$ iff $\rho(T)<1$
*Proof:* [[Linear Systems#Jacobi's Method|Jacobi]] or [[Linear Systems#Gauss-Seidel Method|GS]].