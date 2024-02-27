
$$
\begin{align*}
(E_{i})\qquad a_{ii}x_{i}&= b_{i}-\sum\limits_{j\ne i}a_{ij}x_{j}\\
&= b_{i}-\sum\limits_{j=1}^{i-1}a_{ij}x_{j}-\sum\limits_{j=i+1}^{n}a_{ij}x_{j}\\
a_{ii}x_{i}^{(k)}&= b_{i}-\sum\limits_{j=1}^{i-1}a_{ij}x_{j}^{(k)}-\sum\limits_{j=i+1}^{n}a_{ij}x_{j}^{(k)}\\
Dx^{(k)}&= b-Lx^{(k)}-Ux^{(k-1)}\\
(D+L)x^{(k)}&= b-Ux^{(k-1)}\\
(\text{GS})\qquad x^{(k)}&= -(D+L)^{-1}Ux^{(k-1)}+(D+L)^{-1}b
\end{align*}
$$
