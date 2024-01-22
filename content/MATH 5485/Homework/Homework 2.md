## Problem 1
#### a.
$$
\begin{align*}
a_{1}&= \frac{1}{2}\\
b_{1}&= 1\\
p_{1}&= \frac{\frac{1}{2}+1}{2}=\frac{3}{4}\\\\
f(a_{1})&= \sqrt{\frac{1}{2}}-\cos \frac{1}{2}\approx-0.170\\
f(b_{1})&= \sqrt{1}-\cos1\approx0.460\\
f(p_{1})&= \sqrt{\frac{3}{4}}-\cos \frac{3}{4}\approx0.134
\end{align*}
$$
Because $f(p_{1})$ and $f(b_{1})$ share the same size,
$$
\begin{align*}
a_{2}&= a_{1}=\frac{1}{2}\\
b_{2}&= p_{1}=\frac{3}{4}\\
p_{2}&= \frac{\frac{1}{2}+\frac{3}{4}}{2}=\frac{5}{8}\\\\
f(a_{2})&= f(a_{1})\approx-0.170\\
f(b_{2})&= f(p_{1})\approx0.134\\
f(p_{2})&= \sqrt{\frac{5}{8}}-\cos \frac{5}{8}\approx-0.020
\end{align*}
$$
Because $f(p_{2})$ and $f(a_{2})$ share the same size,
$$
\begin{align*}
a_{3}&= p_{2}=\frac{5}{8}\\
b_{3}&= b_{2}=\frac{3}{4}\\
p_{3}&= \frac{\frac{5}{8}+\frac{3}{4}}{2}=\boxed{\frac{11}{16}}
\end{align*}
$$
#### b.
The error given by the bisection method can be approximated by
$$
|p_{n}-p|\le \frac{b-a}{2^{n}}\text{ for }n\ge1
$$
Then, in order to achieve accuracy within $10^{-4}$, we must do enough iterations $n$ such that
$$
\begin{align*}
|p_{n}-p|\le\frac{b-a}{2^{n}}=\frac{1}{2^{n+1}}&\le 10^{-4}\\
10^{4}&\le 2^{n+1}\\
\log_{2}(10^{4})-1&\le n\\
12&< n
\end{align*}
$$
$$
\text{We must do at least }\boxed{\text{13 iterations}}
$$
## Problem 2
#### a.  
First, we must check that this has any fixed points.
- First, $g(x)\in C[1,2]$ because both $1$ and $e^{-x}$ are.
- Second, $g(x)\in [1,2]$ for $x\in[1,2]$ because $\forall x,0<e^{-x}\le1$.

Next, we must check that there is only one fixed point.
If we pick a $k=e^{-1}\lt1$, then $|g'(x)|=e^{-x}\le e^{-1}\lt1$ for all $x$, so there is only one fixed point.

By these three conditions, $g(x)$ converges.
#### b.
##### Method 1
$$
\begin{align*}
\text{error}=|x_{n}-x|&\le k^{n}\max\{x_{0}-a,b-x_{0}\}\\
&=(e^{-1})^{n}\max\{\frac{3}{2}-1,2- \frac{3}{2}\}\\
&= e^{-n}\cdot \frac{1}{2}\le10^{-5}
\end{align*}
$$
From this,
$$
n\ge-\ln(10^{-5}\cdot2)\approx10.819
$$
So $\boxed{11\text{ iterations}}$ are needed
##### Method 2
$$
\text{error}=|x_{n}-x|\le \frac{k^{n}}{1-k}|x_{1}-x_{0}|
$$
where
$$
\begin{align*}
x_{0}&= \frac{3}{2}\\
x_{1}&= 1+e^{-x_{0}}=1+e^{-\frac{3}{2}}\approx1.22313
\end{align*}
$$
So
$$
\begin{align*}
\text{error}&\le \frac{(e^{-1})^{n}}{1-e^{-1}}\left|1+e^{-\frac{3}{2}}- \frac{3}{2}\right|\le10^{-5}\\
&\approx e^{-n}\le2.283096\cdot10^{-5}
\end{align*}
$$
Or
$$
n\ge-\ln(2.283096\cdot10^{-5})\approx10.687
$$
By this method, we still need $\boxed{11\text{ iterations}}$
## Problem 3
$$
\text{Find }p_{3}\text{ for }f(x)=x^{2}-4x+4-\ln x\text{ on }[1,2]
$$
#### (i) Newton's Method

$$
p_{n+1}=p_{n}-\frac{f(p_{n})}{f'(p_{n})}=p_{n}-\frac{p_{n}^{2}-4p_{n}+4-\ln p_{n}}{2p_{n}-4-\frac{1}{p_{n}}}
$$
We will start with $p_{0}=1.5$.

Then,
$$
\begin{align*}
p_{1}&=p_{0}-\frac{p_{0}^{2}-4p_{0}+4-\ln p_{0}}{2p_{0}-4-\frac{1}{p_{0}}}=1.5-\frac{1.5^{2}-4(1.5)+4-\ln1.5}{2(1.5)-4-\frac{1}{1.5}}\approx1.40672\\
p_{2}&=p_{1}-\frac{p_{1}^{2}-4p_{1}+4-\ln p_{1}}{2p_{1}-4-\frac{1}{p_{1}}}\approx1.40672-\frac{1.40672^{2}-4(1.40672)+4-\ln1.40672}{2(1.40672)-4-\frac{1}{1.40672}}\approx1.41237\\
p_{3}&=p_{2}-\frac{p_{2}^{2}-4p_{2}+4-\ln p_{2}}{2p_{2}-4-\frac{1}{p_{2}}}\approx1.41237-\frac{1.41237^{2}-4(1.41237)+4-\ln1.41237}{2(1.41237)-4-\frac{1}{1.41237}}\approx\boxed{1.41239}
\end{align*}
$$
#### (ii) Secant Method
$$
p_{n+1}=p_{n}-\frac{f(p_{n})[p_{n-1}-p_{n}]}{f(p_{n-1})-f(p_{n})}=p_{n}-\frac{(p_{n}^{2}-4p_{n}+4-\ln p_{n})(p_{n-1}-p_{n})}{p_{n-1}^{2}-4p_{n-1}-\ln p_{n-1}-p_{n}^{2}+4p_{n}+\ln p_{n}}
$$
We will use the endpoints to calculate $p_{1}$.

Then,
$$
\begin{align*}\\
p_{0}&= 1\\
p_{1}&= 2\\
p_{2}&= 2-\frac{(2^{2}-4(2)+4-\ln2)(1-2)}{1^{2}-4(1)-\ln1-2^{2}+4(2)+\ln2}\approx1.59062\\
p_{3}&\approx 1.59062-\frac{(1.59062^{2}-4(1.59062)+4-\ln1.59062)(2-1.59062)}{2^{2}-4(2)-\ln2-1.59062^{2}+4(1.59062)+\ln1.59062}\approx\boxed{1.28454}
\end{align*}
$$
#### (iii) Method of False Position
This uses the same formula as the secant method, only we check which of the past elements are most useful for the next calculation.

Start with:
$$
\begin{align*}
p_{0}&= 1\\
p_{1}&= 2\\
\end{align*}
$$
Because $f(p_{0})\cdot f(p_{1})<0$, we are good to use this method.

Then,
$$
p_{2}= 2-\frac{(2^{2}-4(2)+4-\ln2)(1-2)}{1^{2}-4(1)-\ln1-2^{2}+4(2)+\ln2}\approx1.59062
$$
Because $f(p_{0})\cdot f(p_{2})<0$, we continue without $p_{1}$.

$$
p_{3}\approx1.59062-\frac{(1.59062^{2}-4(1.59062)+4-\ln1.59062)(1-1.59062)}{1^{2}-4(1)-\ln1-1.59062^{2}+4(1.59062)+\ln1.59062}\approx\boxed{1.45554}
$$
