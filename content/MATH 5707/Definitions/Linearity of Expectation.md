Let $X_{1},X_{2},\dots,X_{n}$ be random variables, $X=c_{1}X_{1}+\cdots+c_{n}X_{n}$. Then, $E[X]=c_{1}E[X_{1}]+\cdots+c_{n}E[X_{n}]$ even if $X_{i}$-s are dependent.

**Indicator variables** are variables such that
$$
\delta_{j}=
\begin{cases}
1 \\
0
\end{cases}
$$

### Example
Let $\sigma$ be a random permutation of $1,\dots,n$. What is the expected number of fixed points of $\sigma$.

$n=1\implies1\text{ fixed point}$
$n=2\implies2\text{ or }0\text{ is }1\text{ average}$
$n=3\implies3,1,1,0,0,\text{ or }1\text{ is }1\text{ average}$

$$
\sum\limits_{ j } E(\delta_{j})=n\cdot \frac{1}{n}=1
$$

### Example
There are $r$ red balls and $b$ black balls in a bin. Take balls uniformly at random without replacement. What is the expected number of black balls you pull out before the first red ball.

$$
\delta_{i}=
\begin{cases}
1 & \text{ if }i\text{th black ball gets pulled before first red} \\
0 & \text{ otherwise}
\end{cases}
$$
$\#=\sum\limits_{ i }\delta_{i}$
$E(\#)=\sum\limits_{ i }E[\delta_{i}]=\frac{b}{r+1}$

### Example
Drop three points randomly on a circle. Take the triangle. Is the center of the circle inside of the triangle or not? What is the probability that it is inside?