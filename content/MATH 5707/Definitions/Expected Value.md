Random variable $X$ take value $x_{i}$ with probability $p_{i}$, then 
$$
E(X)=\sum\limits_{ i }x_{i}p_{i}
$$

### Expected Time
A computer program crashes at the end of each hour with probability $p$. What is the expected time till program crashes?

$$
\begin{align}
R&=\text{\# hours until program crashes} \\ \\
E[R] & =1\cdot P[R=1]+2\cdot P[R=2]+\cdots \\
 & =(P[R=1]+P[R=2]+\cdots)+(P[R=2]+P[R=3]+\cdots)+\cdots \\
 & =P[R>0]+P[R>1]+P[R>2]+\cdots \\
 \\
\text{note that }P[R>i] & =(1-p)^{i}. \text{ Then,} \\ \\
 & =\sum=(1-p)^{0}+(1-p)^{1}+\cdots \\
 & =\frac{1}{1-(1-p)}=\frac{1}{p}
\end{align}
$$
### Family Planning
Couple wants a baby girl. $P[\text{girl}]=\frac{1}{2}$. They have children until they have a girl. What is the expected \# of boys they will have? $\boxed{1}$

### Coupon Collectors Problem
There are $n$ different coupons. Each time you get a random coupon, uniformly. What is the expected number of coupons you need to buy to collect all $n$ types?

Split our sequence of coupons into segments. Each ends when new kind is obtained. Let $X_{i}=\text{length of }i\text{-th segment}$. $X=\sum\limits_{ i = 0 }^{n-1}X_{i}$. $E[X]=\sum E(X_{i})$. $p_{i}=\frac{n-i}{h}$.
Then, $E(X_{i})=\frac{n}{n-i}$, so $E(X)=\sum\limits_{ i = 0 }^{n-1}\frac{n}{n-i}=n\left( 1+\frac{1}{2}+\cdots+\frac{1}{n} \right)\approx n\log n$.