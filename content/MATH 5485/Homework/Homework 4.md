## Problem 1
It is more accurate to use the midpoint formula when available because its error term has a denominator of 6 rather than the base formula or endpoint formula which each have an error term with a denominator of 3.

For all of these equations, $h=0.1$.

$$
\begin{align*}
f'(1.1)&\approx \frac{1}{h}\left[-\frac{3}{2}f(1.1)+2f(1.2)- \frac{1}{2}f(1.3)\right]=1.3436\\
f'(1.2)&\approx \frac{1}{h}\left[\frac{1}{2}f\left(1.3\right)- \frac{1}{2}f(1.1)\right]=0.8776\\
f'(1.3)&\approx \frac{1}{h}\left[\frac{1}{2}f\left(1.4\right)- \frac{1}{2}f(1.2)\right]=0.36265\\
f'(1.4)&\approx \frac{1}{h}\left[\frac{1}{2}f(1.2)-2f\left(1.3\right)+ \frac{3}{2}f(1.4)\right]=-0.20125
\end{align*}
$$
With these numbers, we can complete the table.

| $x$   | $f(x)$    | $f'(x)$    |
| ----- | --------- | ---------- |
| $1.1$ | $1.52918$ | $1.3436$   |
| $1.2$ | $1.64024$ | $0.8776$   |
| $1.3$ | $1.70470$ | $0.36265$  |
| $1.4$ | $1.71277$ | $-0.20125$ |
## Problem 2
#### a.
$$
\begin{align*}
\int_{0}^{\frac{\pi}{4}}x\sin x \, dx&= \frac{\frac{\pi}{4}-0}{2}\left[0\sin0+ \frac{\pi}{4}\sin \frac{\pi}{4}\right]+\text{error}\\
&= \frac{\pi^{2}\sqrt2}{64}+\text{error}\\
&\approx \boxed{0.21809}+\text{error}
\end{align*}
$$
#### b.
$$
\text{error}= \frac{(\frac{\pi}{4}-0)^{3}}{12}f''(\xi_{*})
$$
First, we calculate $f'''(x)$.
$$
\begin{align*}
f(x)&= x\sin x\\
f'(x)&= \sin x+x\cos x\\
f''(x)&= 2\cos x-x\sin x\\
f'''(x)&= -3\sin x-x\cos x
\end{align*}
$$
Then, we find when $f''(x)$ is maximized on $\left[0,\frac{\pi}{4}\right]$.

First, we check when $f'''(x)=0$. This doesn't occur on $(0,\frac{\pi}{4})$.

Then, we check only the endpoints.
$$
\begin{align*}
f''(0)&= 2\cos0-0\sin0=2\\
f''\left(\frac{\pi}{4}\right)&= 2\cos \frac{\pi}{4}- \frac{\pi}{4}\sin \frac{\pi}{4}=\sqrt2- \frac{\pi\sqrt2}{8}\approx0.8589
\end{align*}
$$
From this we know that $f''(x)$ is maximized on $\left[0,\frac{\pi}{4}\right]$ at $f''(0)=2$.
We can then substitute this into our original equation, getting
$$
\begin{align*}
\text{error}&\le \frac{(\frac{\pi}{4})^{3}}{6}\\
&= \frac{\pi^{3}}{384}\\
&\approx \boxed{0.080746}
\end{align*}
$$
#### c.
###### i.  Simpson's Rule
$$
\begin{align*}
\int_{0}^{\frac{\pi}{4}}x\sin x\,dx&\approx \frac{h}{3}[f(x_{0})+4f(x_{1})+f(x_{2})]\\
&= \frac{\pi}{12}\left[f(0)+4f\left(\frac{\pi}{8}\right)+f\left(\frac{\pi}{4}\right)\right]\\
&\approx \frac{\pi}{12}\left[0+0.601118+ \frac{\sqrt2}{2}\right]\\
&\approx \boxed{0.302765}
\end{align*}
$$
###### ii. Midpoint Rule
$$
\int_{0}^{\frac{\pi}{4}}x\sin x\,dx\approx \frac{\pi}{4}\cdot \frac{\pi}{8}\sin \frac{\pi}{8}\approx\boxed{0.118029}
$$
## Problem 3
$$
\begin{align*}
\int_{0}^{2}x^{2}\ln&(x^{2}+1)\, dx\\
h&= 0.25\\
x_{i}&= 0.25i\\
n&= 8
\end{align*}
$$
#### a.
$$
\begin{align*}
\int_{0}^{2}x^{2}&\ln(x^{2}+1)\, dx\approx \frac{h}{3}\left[f(x_{0})+2\sum\limits_{i=1}^{\frac{n}{2}-1}f\left(x_{2i}\right)+4\sum\limits_{i=1}^{\frac{n}{2}}f(x_{2i-1})+f(x_{n})\right]\\
&= \frac{h}{3}[f(x_{0})+4[f(x_{1})+f(x_{3})+f(x_{5})+f(x_{7})]+2[f(x_{2})+f(x_{4})+f(x_{6})]+f(x_{8})]\\
&\approx \frac{0.25}{3}[0+24.07248+6.801814+6.437752]\\
&\approx \boxed{3.109337}
\end{align*}
$$
#### b.
$$
\begin{align*}
\int_{0}^{2}x^{2}\ln(x^{2}+1)\,dx&\approx 2h\sum\limits_{j=0}^{\frac{n}{2}}f(x_{2j})\\
&= 0.5[f(x_{0})+f(x_{2})+f(x_{4})+f(x_{6})+f(x_{8})]\\
&\approx \boxed{4.919329}
\end{align*}
$$
## Problem 4
To obtain the best possible approximation, we wish to minimize the error term. this can be done by finding an $a,b,c$ such that
$$
\begin{cases}
a+b+c=1 \\
a(h+2h^{3})+b\left(\frac{h}{2}+2\left(\frac{h}{2}\right)^{3}\right)+c\left(\frac{h}{4}+2\left(\frac{h}{4}\right)^{3}\right)\text{ is minimized}
\end{cases}
$$
This occurs when $a=0,b=0,c=1$, as the denominators will be maximized.
Then, the best approximation for $N$ with what is calculated is simply $N\left(\frac{h}{4}\right)$.