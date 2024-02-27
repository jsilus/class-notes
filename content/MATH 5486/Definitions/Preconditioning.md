It is applied in the [[Conjugate Gradient Descent]] method to obtain a better conditioned system

Let $\tilde{A}=C^{-1}A(C^{-1})^{\top}$. Expect $\kappa(\tilde{A})<\kappa(A)$. Consider $\tilde{A}\tilde{x}=\tilde{b}$. Let $\tilde{x}=C^{\top}x$, $\tilde{b}=C^{-1}b$. Then,
$$
\begin{align}
\tilde{A}\tilde{x}&=C^{-1}A(C^{-1})^{\top}C^{\top}x \\
 & =C^{-1}Ax=C^{-1}b=\tilde{b} \\
x & =(C^{\top})^{-1}\tilde{x}
\end{align}
$$