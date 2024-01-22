### Conditions
$$
\begin{cases}
g\in C[a,b] \\
g(x)\subseteq[a,b] \\
g'\in C(a,b)\text{ and }|g'(x)|\le k<1
\end{cases}
$$
### Theorem
If $g'(p)\ne0$, then for any number $p_{0}\ne p$ in $[a,b]$, the $\{p_{n}=g(p_{n-1})\}$ for $n\ge1$ converges only linearly to the unique fixed point $p\in[a,b]$.

>[!tip] If $g'(p)=0$, check for [[Quadratic Fixed Point Convergence]]

### Proof
$$
\{p_{n}\}\rightarrow p\text{ as }n\rightarrow\infty
$$
$$
\begin{align*}
p_{n+1}-p=g(p_{n})-g(p)&\stackrel{\text{M.V.T.}}{=}g'(\xi_{n})(p_{n}-p)\text{, where }\xi_{n}\text{ between }p_{n},a\\
&\Rightarrow\{\xi_n\}\rightarrow p\text{ as }n\rightarrow\infty\\
&\Rightarrow\lim\limits_{n\rightarrow\infty}g'(\xi_{n})=g'(\lim\limits_{n\rightarrow\infty}\xi_n)=g'(p)\\\\
\lim\limits_{n\rightarrow\infty}\frac{|p_{n+1}-p|}{|p_{n}-p|}&=\lim\limits_{n\rightarrow\infty}\frac{|g'(\xi_{n})(p_{n}-p)|}{|p_{n}-p|}=\lim\limits_{n\rightarrow\infty}|g'(\xi_{n})|=|g'(p)|\ne0\\\\
&\stackrel{|g'(p)|\ne0}{\Rightarrow}\text{linear convergence}
\end{align*}
$$