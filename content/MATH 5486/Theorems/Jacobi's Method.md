Method of matrix convergence
$$
\begin{align*}
(E_{i})\quad a_{i2}x_{1}+a_{i2}x_{2}+\cdots+a_{in}x_{n}&= b\\
a_{ii}x_{i}+\sum\limits_{j\ne i}a_{ij}x_{j}&= bi\\
a_{ii}x_{i}&= b_{i}-\sum\limits_{j\ne i}a_{ij}x_{j}\\
(\text{assume }a_{ii}\ne0)\quad x_{i}&= \frac{1}{a_{ii}}\left(b_{i}-\sum\limits_{j\ne i}a_{ij}x_{j}\right)\\
(\text{Jacobi's Method})\quad x_{i}^{(k)}&= \frac{1}{a_{ii}}\left(b_{i}-\sum\limits_{j\ne i}a_{ij}x_{j}^{(k)}\right)
\end{align*}
$$

$$
\begin{align*}
x^{(k)}&= -D^{-1}(L+u)x^{(k-1)}+D^{-1}b\\
\text{where }&D\text{ is a diagonal matrix}
\end{align*}
$$
In general, $Ax=b\Leftrightarrow x=Tx+c$ for some $T,c$
Then, $x^{(k)}=Tx^{(k-1)}+c$