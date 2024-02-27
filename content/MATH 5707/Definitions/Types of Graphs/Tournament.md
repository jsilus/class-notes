A **tournament** is a complete oriented graph.

A tournament has property $S_{k}$ if $\forall k$ vertices, there are vertices pointing to them.

**Theorem:** For any $k$ there is a tournament with property $S_{k}$.
*Proof:* Any random tournament would have this property.

**Theorem:** There is a tournament $T$ with $n$ players and at least $n!2^{-n+1}$ [[Hamiltonian Path|Hamiltonian paths]].
*Plan:* Show that $E[\#Hp]=n!2^{-n+1}$.

Flip a coin for each edge of $K_{n}$.

$$
E[\#Hp]=E\left[ \sum\limits_{\sigma} \delta_{\sigma} \right]
$$
For each permutation $\sigma$ of $[n]$ vertices,
$$
\text{let }\delta_{\sigma}=
\begin{cases}
1 & \text{if }\sigma_{1}\to \sigma_{2}\to \dots\to \sigma_{n} \\
0 & \text{otherwise}
\end{cases}
$$
$$
E[\delta_{\sigma}]=P[\delta_{\sigma=1}]=\left( \frac{1}{2} \right)^{n-1}=2^{-n+1}
$$
And there are $n!$ $\sigma$.