
$$
x_{i}^{(k)}=x_{i}^{(k-1)}+\frac{\omega}{a_{ii}}\left( b_{i}-\sum a_{ij}x_{j}^{(k)}-\sum a_{ij}x_{j}^{(k-1)} \right)-\frac{\omega}{a_{ij}}a_{ii}x_{i}^{(k-1)}
$$
$$
\begin{align}
x^{(k)} & =(1-\omega)x^{(k-1)}+\omega D^{-1}(b-Lx^{(k)}-Ux^{(k-1)}) \\
Dx^{(k)} & =(1-\omega)Dx^{(k-1)}+\omega b-Lx^{(k)}-\omega Ux^{(k-1)} \\
(D+\omega L)x^{(k)} & =\omega b+((1-\omega)D-\omega U)x^{(k-1)} \\
x^{(k)} & =(D+\omega L)^{-1}((1-\omega)D-\omega U)x^{(k-1)}+\omega(D+\omega L)^{-1}b \\
T_{\omega} & =(D+\omega L)^{-1}((1-\omega)D-\omega U) \\
T_{GS} & =-(D+L)^{-1}U \\
T_{J} & =-D^{-1}(L+U)
\end{align}
$$