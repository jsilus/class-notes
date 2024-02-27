Let $v_{1},v_{2},\dots,v_{n}\in \mathbb{R}^{n},\left| v_{i} \right|=1$
**Theorem:** There exists a $\epsilon_{1},\epsilon_{2},\dots,\epsilon_{n}=\pm1$ such that $\left| \epsilon_{1}v_{1}+\cdots+\epsilon_{n}v_{n} \right|\leq \sqrt{ n }$.
*Proof:* Flip a coin for each $\epsilon_{i}$. $X=\left| \epsilon_{1}v_{1}+\cdots+\epsilon_{n}v_{n} \right|$
$$
\begin{align}
E[X^{2}] & =E[(\epsilon_{1}v_{1}+\cdots)\cdot(\epsilon_{1}v_{1}+\cdots)] \\
 & =E\left[ \sum\limits_{ i,j } \epsilon_{i}v_{i}\cdot\epsilon_{j}v_{j} \right] \\
 & =E\left[ \sum\limits_{ i,j }\epsilon_{i}\epsilon_{j}(v_{i}\cdot v_{j})  \right] \\
 & =\sum\limits_{ i,j }(v_{i}\cdot v_{j})E[\epsilon_{i}\epsilon_{j}]  \\
 & =\sum\limits_{ i }\left| v_{i} \right|^{2}=n
\end{align}
$$
