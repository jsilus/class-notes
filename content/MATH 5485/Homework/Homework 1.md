## Problem 1
By the Extreme Value Theorem, the maximum occurs on either the endpoints of the period or the points where $f'(x)=0$.

First, we must check if $f(x)\in C[0,1]$:

Both $e^x$ and $2x$ are continuous on $[0,1]$, and addition and division of these doesn't change that, so $f(x)\in C[0,1]$.

Then, we check the endpoints:
$$
\text{at }
\begin{cases}
x=0 \\
x=1
\end{cases}
\Rightarrow
\begin{cases}
f(0)=\frac{2-e^{0}+2(0)}{4}=\frac{1}{4}=0.25 \\
f(1)=\frac{2-e^{1}+2(1)}{4}=1-\frac{e}{4}\approx0.3204
\end{cases}
$$

Next, we find when $f'(x)=0$:
$$
\begin{align*}
f'(x)=\frac{2-e^{x}}{4}&= 0\\
2-e^{x}&= 0\\
e^{x}&= 2\\
x&= \ln2\approx0.6931
\end{align*}
$$
At $x=\ln2,f(\ln2)=\frac{2-e^{\ln2}+2\ln2}4=\frac{\ln2}2=\ln(\sqrt2)\approx0.3466$

By these three options, the maximum $x$ for $f(x)$ on $[0,1]$ is $f(\ln2)=\ln(\sqrt2)\approx0.3466$.

## Problem 2
#### a.
First, check that $f(x)\in C^2(-\infty,\infty):$
$$
\begin{align*}
f(x)&= e^{x}\cos x\\
f^{(1)}(x)&= e^{x}(\cos x-\sin x)\\
f^{(2)}(x)&= e^{x}(\cos x-\sin x)-e^{x}(\cos x-\sin x)=-2e^{x}\sin x\\
f^{(3)}(x)&= -2e^{x}(\sin x+\cos x)
\end{align*}
$$
As these are all the sums and products of constants, $e^{x},\sin x,$ and $\cos x$, these functions are continuous.

Then, we calculate the Taylor Polynomial:
$$
\begin{align*}
P_{2}(x)&= f(x_{0})+f^{(1)}(x_{0})(x-x_{0})+\frac{f^{(2)}(x_{0})}{2!}(x-x_{0})^{2}\\
&= e^{0}\cos0+e^{0}(\cos0-\sin0)x-e^{0}\sin(0)x^{2}\\
&= 1+x
\end{align*}
$$
$$
\begin{align*}
R_{2}(x)&= \frac{f^{(3)}(z(x))}{3!}(x-x_{0})^{3}\\
&= -\frac{x^{3}}{3}e^{z(x)}[\sin(z(x))+\cos(z(x))]
\end{align*}
$$
#### b.
$$\begin{align*}
f(1.1)&\approx P_2(1.1)=1+1.1=2.1\\
\text{Error}&= |P_{2}(1.1)-f(1.1)|\approx0.7373
\end{align*}$$
#### c.
The upper bound for the error can be estimated from $R_2(1.1)$.
$z(1.1)$ is unknown, but it lies on $[0,1.1]$
We then must find the maximum of $|R_{2}(1.1)|$ where $z(1.1)\in[0,1.1]$. First, we substitute $1.1$ for $x$:
$$R_{2}(1.1)=-\frac{1.1^3}{3}e^{z(1.1)}[\sin(z(1.1))+\cos(z(1.1))]$$
As we are tracking a different variable $z(1.1)$, we will rewrite this to be:
$$
R_{2}^{*}(z)=-\frac{1.1^3}{3}e^{z}(\sin z+\cos z)
$$
Next, we use the Extreme Value Theorem to determine the maximum value of $|R_{2}^{*}(z)|$.

$R_{2}^{*}(z)$ must be continuous for all $z\in[0,1.1]$ because it contains only the sums and products of constants, $e^{z},\sin z,$ and $\cos z$.

First, we check the endpoints:
$$
\text{at }
\begin{cases}
z=0 \\
z=1.1
\end{cases}
\Rightarrow
\begin{cases}
|R_{2}^{*}(0)|=|\frac{1.1^3}{3}e^{0}(\sin0+\cos0)|\\
|R_{2}^{*}(1.1)|=|\frac{1.1^3}{3}e^{1.1}(\sin1.1+\cos1.1)|
\end{cases}
\Rightarrow
\begin{cases}
|R_{2}^{*}(0)|=\frac{1.1^3}{3}\\
|R_{2}^{*}(1.1)|\approx1.7924
\end{cases}
$$
Then, we check whenever $R_{2}^{*'}(z)=0$
$$
\begin{align*}
\frac{d}{dz}[e^{z}(\sin z+\cos z)]&= e^z(\sin z+\cos z)+e^z(\cos z - \sin z)\\
&= 2e^{z}\cos z
\end{align*}
$$
, so
$$
\begin{align*}
R_{2}^{*'}(z)=-\frac{2(1.1)^{3}}{3}e^{z}\cos z&= 0\\
e^{z}\cos z&= 0\\
\cos z&= 0\\
z&= \frac{\pi}{2}+\pi n,\forall n\in\mathbb I
\end{align*}
$$
But $z\in[0,1.1]$, so $R_{2}^{*'}(z)\ne0$ on $[0,1.1]$.
Therefore, the maximum error for $P_{2}(1.1)$ is approximately $1.7924$, when $z=1.1$

## Problem 3
$$
\frac{\frac{13}{14}-\frac{6}{7}}{2\pi-5.1}
$$
First, we must round the initial values to the first three digits, so
$$
\begin{align*}
\frac{13}{14}&\approx 0.929\times10^0\\
\frac{6}{7}&\approx 0.857\times10^0\\
\pi&\approx 0.314\times10^1\\
5.1&= 0.510\times10^1
\end{align*}
$$
The top of the fraction can be calculated and rounded to be
$$
0.929\times10^0-0.857\times10^0=0.072\times10^0
$$
$2\pi$ must be calculated before it can be rounded. This is
$$
2*(0.314\times10^1)=0.628\times10^1
$$
Then, the denominator can be calculated to be
$$
0.628\times10^{1}-0.510\times10^{1}=0.118\times10^{1}
$$
The entire value can then be calculated to be
$$
\frac{0.072\times10^{0}}{0.118\times10^{1}}\approx0.061
$$
The errors can be calculated to be
$$
\begin{align*}
\text{absolute error}&\approx\left\lvert\frac{\frac{13}{14}-\frac{6}{7}}{2\pi-5.1}-0.061\right\rvert\approx0.6303\times10^{-3}\\
\text{relative error}&\approx\frac{\left\lvert\frac{\frac{13}{14}-\frac{6}{7}}{2\pi-5.1}-0.061\right\rvert}{\left\lvert\frac{\frac{13}{14}-\frac{6}{7}}{2\pi-5.1}\right\rvert}\approx0.1044\times10^{-1}
\end{align*}
$$
## Problem 4
$$
\begin{align*}
r&=(-1)^s2^{c-1023}(1+m)\\
\text{where}\\
c&=\sum^{10}_{k=0}c_k2^k\\
m&=\sum^{51}_{k=0}m_k\frac1{2^{52-k}}
\end{align*}
$$
#### a.
$$
\begin{align*}
s&= 1\\
c&= \sum\limits_{k=0}^{10}c_{k}2^{k}=\sum\limits_{k=0}^{9}2^{k}=1023\\
m&= \sum\limits_{k=0}^{51}m_{k}\frac{1}{2^{52-k}}=\frac{1}{2^{52-51}}=\frac{1}{2}\\
\text{so, }\\
r&= (-1)^{1}2^{1023-1023}\left(1+ \frac{1}{2}\right)=- \frac{3}{2}
\end{align*}
$$
#### b.
$$
\begin{align*}
s&= 0\\
c&= \sum\limits_{k=0}^{10}c_{k}2^{k}=2^{0}+2^{3}+2^{10}=1033\\
m&= \sum\limits_{k=0}^{51}m_{k}\frac{1}{2^{52-k}}=\frac{1}{2^{52-44}}+\frac{1}{2^{52-43}}+\sum\limits_{k=47}^{51}\frac{1}{2^{52-k}}\approx0.9746\\
\text{so, }\\
r&= (-1)^{0}2^{1033-1023}(1+m)=2^{10}\left(1+\frac{1}{2^{8}}+\frac{1}{2^{9}}+\sum\limits_{k=47}^{51}\frac{1}{2^{52-k}}\right)=2022
\end{align*}
$$
