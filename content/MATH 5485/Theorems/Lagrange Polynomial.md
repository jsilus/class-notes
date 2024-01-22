
$$
P_{n,k}(x)=\frac{(x-x_{0})(x-x_{1})\cdots(x-x_{n})}{(x_{k}-x_{0})(x_{k}-x_{1})\cdots(x_{k}-x_{n})}
$$

### Additional Theorem
Suppose $x_{0},x_{1},\dots,x_{n}$ are distinct points in $[a,b]$ and $f\in C^{n+1}[a,b]$
Then, $\forall x\in[a,b]$, a number $\xi(x)$ between $\min\{x_{0},x_{1},\dots,x_{n}\}$ and $\max\{x_{0},x_{1},\dots,x_{n}\}$ can be found such that
>[!warning] complete/verify

$$
\begin{align*}
f(x)&= P_{n}(x)+\frac{f^{(n+1)}(\xi(x))}{(n+1)!}(x-x_{0})\cdots(x-x_{n})\\
&\text{where }P(x)\text{ is the Lagrange Polynomial}
\end{align*}
$$

#### Remark
How [[Taylor's Theorem]] compares to the Lagrange polynomial
$$
\begin{align*}
f(x)&= T_{n}(x)+\frac{f^{(n+1)}(\xi(x))}{(n+1)!}(x-x_{0})^{n+1}\\
&\text{where }T(x)\text{ is the Taylor's Polynomial}
\end{align*}
$$
Taylor's Theorem tends to be more useful for local approximations, while the Lagrange Polynomial tends to help with global approximations.

## Proof
#### Case 1:
If $x=x_{k}$ for $k=0,\dots,n$, then $f(x_{k})=P(x_{k})$.
#### Case 2:
If $x\ne x_{k}$, define a $g(t),t\in[a,b]$ by
$$
g(t)=f(t)-P(t)-[f(x)-P(x)]\frac{(t-x_{0})(t-x_{1})\cdots(t-x_{n})}{(x-x_{0})(x-x_{1})\cdots(x-x_{n})}
$$
We know that
$$
\begin{cases}
f\in C^{n+1} \\
P\in C^{\infty} \\
\frac{(t-x_{0})(t-x_{1})\cdots(t-x_{n})}{(x-x_{0})(x-x_{1})\cdots(x-x_{n})}\in C^{\infty}
\end{cases}
$$
so $g\in C^{n+1}[a,b]$.
Then,
$$
g(x_{k})=f(x_{k})-P(x_{k})-[f(x)-P(x)]\frac{(x_{k}-x_{0})(x_{k}-x_{1})\cdots(x_{k}-x_{n})}{(x-x_{0})(x-x_{1})\cdots(x-x_{n})}
$$
where one of $(x-x_{0})(x-x_{1})\cdots(x-x_{n})=0$, so

$$
g(x_{k})=f(x_{k})-P(x_{k})-0=0\text{ for }k=0,1\dots,n
$$
and
$$
g(x)=f(x)-P(x)-[f(x)-P(x)]\cdot1=0\text{ for }t=x
$$
$$
g(x_{0})=g(x_{1})=\cdots=g(x_{n})=g(x)=0
$$
Because there are $n+2$ x-intercepts, by [[Rolle's Theorem]], we know that there exists some $\xi_{k}\in[x_{k+1},x_{k+2}]$ such that $g'(\xi_{k})=0$ within each of these $n+1$ intervals.

We can repeat Rolle's Theorem to calculate $\xi_{k}'$ such that $g''(\xi_{k}')=0$ for $n$ intervals between the $\xi_{k},\xi_{k+1}$. We can repeat this procedure $n+1$ times.

We then get $g^{(n)}(t)$ with two x intercepts $\xi^{(n)}_{1}$ and $\xi^{(n)}_{2}$, and after a final Rolle's Theorem use we find $g^{(n+1)}(\xi_{1}^{(n+1)})=\boxed{g^{(n+1)}(\xi)}=0$

Then, by expanding $g$, we get
$$
\begin{align*}
g^{(n+1)}(\xi)&= f^{(n+1)}(\xi(x))-P^{(n+1)}(\xi(x))-[f(x)-P(x)]\frac{d^{n+1}}{dt^{n+1}}\left[\prod\limits_{i=0}^{n}\frac{t-x_{i}}{x-x_{i}}\right]\Biggr\rvert_{t=\xi}\\
0&= f^{(n+1)}(\xi(x))-0-[f(x)-P(x)]\frac{(n+1)!}{\prod\limits_{i=0}^{n}(x-x_{i})}\\
\Rightarrow f(x)&= P(x)+\frac{f^{(n+1)}(\xi(x))}{(n+1)!}\prod\limits_{i=0}^{n}(x-x_{i})
\end{align*}
$$
## Example
Use second order Lagrange Polynomial for $f(x)=\frac{1}{x}$ on $[2,4]$ using nodes
$$
\begin{cases}
x_{0}=2 \\
x_{1}=2.75 \\
x_{2}=4
\end{cases}
$$
Determine the error term and maximum error

### Proof
$n=2$
$$
\begin{align*}
f^{(1)}(x)=-x^{-2}\\
f^{(2)}(x)=2x^{-3}\\
f^{(3)}(x)=-6x^{-4}
\end{align*}
$$

Error term = $\frac{f^{(3)}(\xi(x))}{3!}(x-x_{0})(x-x_{1})(x-x_{2})=\frac{-6\xi(x)^{-4}}{6}(x-2)(x-2.75)(x-4)$ for $\xi(x)\in[2,4]$.