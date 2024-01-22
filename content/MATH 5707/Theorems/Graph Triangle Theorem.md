
**Theorem:** Every graph of size $n$ and $>\left\lfloor\frac{n^{2}}{4}\right\rfloor$ edges contains a triangle.

*Proof:* Assume $G$ is $\triangle$-free and $|E|>\left\lfloor\frac{n^{2}}{4}\right\rfloor$. Pick edge $xy\in G$. No vertex is adjacent to both $x,y$. $d(x)+d(y)\le n$ ([[Degree]]). Do this for each edge. We can then sum these up to get a total of $\sum\limits_{x}d(x)^{2}\le n|E|$.

$$
\begin{align*}
\sum\limits_{x}d(x)^{2}&\le n|E|\\
\boxed{\frac{(2|E|)^{2}}{n}}\le\sum\limits_{x}d(x)^{2}&\le n|E|\\
4|E|^{2}&\le n^{2}|E|\\
|E|&\le \frac{n^{2}}{4}
\end{align*}
$$
This is a contradiction, so this must contain a triangle. The boxed stuff is assumed.