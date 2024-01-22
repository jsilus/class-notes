## Problem 1
#### a.
First, we must find the Lagrange bases
$$
\begin{align*}
L_{2,0}(x)&= \frac{(x-x_{1})(x-x_{2})}{(x_{0}-x_{1})(x_{0}-x_{2})}=\frac{(x-1)(x- \frac{\pi}{2})}{(0-1)(0- \frac{\pi}{2})}=\frac{(x-1)(2x-\pi)}{\pi}\\
L_{2,1}(x)&= \frac{(x-x_{0})(x-x_{2})}{(x_{1}-x_{0})(x_{1}-x_{2})}=\frac{(x-0)(x- \frac{\pi}{2})}{(1-0)(1- \frac{\pi}{2})}=\frac{x(2x-\pi)}{2-\pi}\\
L_{2,2}(x)&= \frac{(x-x_{0})(x-x_{1})}{(x_{2}-x_{0})(x_{2}-x_{1})}=\frac{(x-0)(x-1)}{(\frac{\pi}{2}-0)(\frac{\pi}{2}-1)}=\frac{4x(x-1)}{\pi(\pi-2)}
\end{align*}
$$
These are then combined into the complete interpolating polynomial with the function
$$
\begin{align*}
P_{2}(x)&= \sum\limits_{k=0}^{2}f(x_{k})L_{2,k}(x)\\
P_{2}(x)&= f(0)\frac{(x-1)(2x-\pi)}{\pi}+f(1)\frac{x(2x-\pi)}{2-\pi}+f\left(\frac{\pi}{2}\right)\frac{4x(x-1)}{\pi(\pi-2)}\\
P_{2}(x)&= \frac{(x-1)(2x-\pi)}{\pi}+e\cos1\frac{x(2x-\pi)}{2-\pi}+0\frac{4x(x-1)}{\pi(\pi-2)}\\
P_{2}(x)&= \frac{(x-1)(2x-\pi)}{\pi}+e\cos1\frac{x(2x-\pi)}{2-\pi}
\end{align*}
$$
#### b.
Using this Lagrange interpolating polynomial as an approximation, $f(0.5)$ can be found to be
$$
\begin{align*}
f(0.5)\approx P_{2}(0.5)&= \frac{((0.5)-1)(2(0.5)-\pi)}{\pi}+e\cos1\frac{(0.5)(2(0.5)-\pi)}{2-\pi}\\
&= \frac{\pi-1}{2\pi}+e\cos1\frac{1-\pi}{4-2\pi}\approx1.71846
\end{align*}
$$
When using the actual equation, $f(0.5)$ is found to be
$$
f(0.5)=e^{0.5}\cos0.5\approx1.44689
$$
The absolute error is then
$$
|f(0.5)-P_{3}(0.5)|\approx|1.44689-1.71846|=\boxed{0.27157}
$$
And the relative error is
$$
\approx\frac{0.27157}{|1.44689|}\approx\boxed{0.18769}
$$
#### c.
The error term equals
$$
\frac{f^{(3)}(\xi)}{6}(x-x_{0})(x-x_{1})(x-x_{2})
$$
For some $\xi\in[x_{0},x_{2}]=[0,\frac{\pi}{2}]$

First, we calculate the derivatives of $f$ to be
$$
\begin{align*}
f(x)&= e^{x}\cos x\\
f^{(1)}(x)&= e^{x}\cos x-e^{x}\sin x\\
f^{(2)}(x)&= e^{x}\cos x-e^{x}\sin x-e^{x}\sin x-e^{x}\cos x=-2e^{x}\sin x\\
f^{(3)}(x)&= -2e^{x}\sin x-2e^{x}\cos x=-2e^{x}(\sin x+\cos x)\\
f^{(4)}(x)&= -2e^{x}\sin x-2e^{x}\cos x-2e^{x}\cos x+2e^{x}\sin x=-4e^{x}\cos x
\end{align*}
$$
Then, we want to find the maximum of $f^{(3)}(x)\in[0,\frac{\pi}{2}]$.
We must check the endpoints and all points $x$ such that $f^{(4)}(x)=0$. 

$f^{(4)}(x)=0$ when $\cos x=0$. This occurs at $\frac{\pi}{2}$, and endpoint.
$$
\begin{align*}
f^{(3)}(0)&= -2e^{0}(\sin0+\cos0)=-2\\
f^{(3)}\left(\frac{\pi}{2}\right)&=-2e^{\frac{\pi}{2}}\left(\sin \frac{\pi}{2}+\cos \frac{\pi}{2}\right)=-2e^{\frac{\pi}{2}}
\end{align*}
$$
Because $|-2e^{\frac{\pi}{2}}|>|-2|$, our maximum error occurs at $\xi=\frac{\pi}{2}$.

This means that our absolute error term is
$$
\boxed{\left|\frac{e^{\frac{\pi}{2}}}{3}(x)(x-1)\left(x- \frac{\pi}{2}\right)\right|}
$$
The maximum of this error can be found by finding the maximum of $x(x-1)(x- \frac{\pi}{2})$.
Once again, we first find when the derivative equals 0
$$
\frac{d}{dx}\left[x(x-1)\left(x- \frac{\pi}{2}\right)\right]=\frac{d}{dx}\left[x^{3}-\left(1+\frac{\pi}{2}\right)x^{2}+\frac{\pi}{2}x\right]=3x^{2}-2\left(1+ \frac{\pi}{2}\right)x+ \frac{\pi}{2}
$$
This equals $0$ at $0.398$ and $1.316$.
$$
\begin{align*}
\left|0(0-1)\left(0- \frac{\pi}{2}\right)\right|&= 0\\
\left|0.398(0.398-1)\left(0.398- \frac{\pi}{2}\right)\right|&\approx 0.28300\\
\left|1.316(1.316-1)\left(1.316- \frac{\pi}{2}\right)\right|&\approx 0.10596\\
\left|\frac{\pi}{2}\left(\frac{\pi}{2}-1\right)\left(\frac{\pi}{2}- \frac{\pi}{2}\right)\right|&= 0
\end{align*}
$$
Because the maximum error occurs at $x=0.398$, we know that the absolute error on $[0,\frac{\pi}{2}]$ is less than or equal to $\frac{e^{\frac{\pi}{2}}}{3}\cdot0.28300\approx\boxed{0.45379}$ 
## Problem 2
| $x$    | $f(x)$   |              |                |                  |
| ------ | -------- | ------------ | -------------- | ---------------- |
| $-1$   | $1.9999$ |              |                |                  |
| $-0.5$ | $1.3333$ | $P_{0,1}(0)$ |                |                  |
| $0.5$  | $0.8888$ | $P_{1,2}(0)$ | $P_{0,1,2}(0)$ |                  |
| $1$    | $0.6666$ | $P_{2,3}(0)$ | $P_{1,2,3}(0)$ | $\boxed{P_{0,1,2,3}(0)\approx1.03698}$ |

where
$$
\begin{align*}
P_{0,1}(0)&= \frac{(0-(-1))P_{1}-(0-(-0.5))P_{0}}{(-0.5)-(-1)}=2\bigl[1.3333(1)-1.9999(0.5)\bigr]=0.6667\\
P_{1,2}(0)&= \frac{(0-(-0.5))P_{2}-(0-(0.5))P_{1}}{(0.5)-(-0.5)}=0.8888(0.5)-1.3333(-0.5)=1.11105\\
P_{2,3}(0)&= \frac{(0-(0.5))P_{3}-(0-(1))P_{2}}{(1)-(0.5)}=2\bigl[0.6666(-0.5)-0.8888(-1)\bigr]=1.111\\\\\\
P_{0,1,2}(0)&= \frac{(0-(-1))P_{1,2}(0)-(0-(0.5))P_{0,1}(0)}{(0.5)-(-1)}=\frac23\bigl[P_{1,2}(0)+0.5P_{0,1}(0)\bigr]=\frac{2}{3}(1.4444)\\
P_{1,2,3}(0)&= \frac{(0-(-0.5))P_{2,3}(0)-(0-(1))P_{1,2}(0)}{(1)-(-0.5)}=\frac23\bigl[0.5P_{2,3}(0)+P_{1,2}(0)\bigr]=\frac{2}{3}(1.66655)\\\\\\
P_{0,1,2,3}(0)&= \frac{(0-(-1))P_{1,2,3}(0)-(0-(1))P_{0,1,2}(0)}{(1)-(-1)}=\frac12\bigl[P_{1,2,3}(0)+P_{0,1,2}(0)\bigr]=\frac13(3.11095)\approx1.037
\end{align*}
$$
## Problem 3
#### a.

With the divided difference notation,
$$
\begin{align*}
a_{2}&= \frac{f(x_{2})-f(x_{0})}{(x_{2}-x_{0})(x_{2}-x_{1})}-\frac{f(x_{1})-f(x_{0})}{(x_{2}-x_{1})(x_{1}-x_{0})}\\
&= \frac{f[x_{2}]-f[x_{0}]}{(x_{2}-x_{0})(x_{2}-x_{1})}-\frac{f[x_{1}]-f[x_{0}]}{(x_{2}-x_{1})(x_{1}-x_{0})}\\
&= \frac{f[x_{0},x_{2}]}{x_{2}-x_{1}}-\frac{f[x_{0},x_{1}]}{x_{2}-x_{1}}\\
&= f[x_{0},x_{1},x_{2}]
\end{align*}
$$
#### b.
| $x$         | $0\text{th}$ | $1\text{st}$                                               | $2\text{nd}$                                                                  |
| ----------- | ------------ | ---------------------------------------------------------- | ----------------------------------------------------------------------------- |
| $x_{0}=0.0$ | $f[x_{0}]=1$ | $f[x_{0},x_{1}]=\frac{f[x_{1}]-f[x_{0}]}{x_{1}-x_{0}}=15$  | $f[x_{0},x_{1},x_{2}]=\frac{f[x_{1},x_{2}]-f[x_{0},x_{1}]}{x_{2}-x_{0}}=12.5$ |
| $x_{1}=0.2$ | $f[x_{1}]=4$ | $f[x_{1},x_{2}]=\frac{f[x_{2}]-f[x_{1}]}{x_{2}-x_{1}}=20$  | $f[x_{1},x_{2},x_{3}]=\frac{f[x_{2},x_{3}]-f[x_{1},x_{2}]}{x_{3}-x_{1}}=-125$ |
| $x_{2}=0.4$ | $f[x_{2}]=8$ | $f[x_{2},x_{3}]=\frac{f[x_{3}]-f[x_{2}]}{x_{3}-x_{2}}=-30$ |                                                                               |
| $x_{3}=0.6$ | $f[x_{3}]=2$ |                                                            |                                                                               |

A final step that doesn't fit within this table is combining the last two parts to get
$$
f[x_{0},x_{1},x_{2},x_{3}]=\frac{f[x_{1},x_{2},x_{3}]-f[x_{0},x_{1},x_{2}]}{x_{3}-x_{0}}=\frac{-125-12.5}{0.6-0.0}=-137.5\cdot\frac{5}{3}
$$

By following the top of this table, we can find a forward facing Lagrange interpolated polynomial of
$$
P_{4}(x)=1+15x+12.5x(x-0.2)-137.5\cdot \frac{5}{3}x(x-0.2)(x-0.4)
$$
#### c.
By following the bottom of the table from part b, we can find a backward facing Lagrange interpolated polynomial of
$$
P_{4}(x)=2-30(x-0.6)-125(x-0.6)(x-0.4)-137.5\cdot \frac{5}{3}(x-0.6)(x-0.4)(x-0.2)
$$
## Problem 4
Let $x_{0}=0.3,x_{1}=0.5,x_{2}=0.7,f(x)=\sin x$

First, we must find the Lagrange bases
$$
\begin{align*}
L_{2,0}(x)&= \frac{(x-x_{1})(x-x_{2})}{(x_{0}-x_{1})(x_{0}-x_{2})}=\frac{(x-0.5)(x-0.7)}{(0.3-0.5)(0.3-0.7)}=12.5x^{2}-15x+4.375\\
L_{2,1}(x)&= \frac{(x-x_{0})(x-x_{2})}{(x_{1}-x_{0})(x_{1}-x_{2})}=\frac{(x-0.3)(x-0.7)}{(0.5-0.3)(0.5-0.7)}=-25x^{2}+25x-5.25\\
L_{2,2}(x)&= \frac{(x-x_{0})(x-x_{1})}{(x_{2}-x_{0})(x_{2}-x_{1})}=\frac{(x-0.3)(x-0.5)}{(0.7-0.3)(0.7-0.5)}=12.5x^{2}-10x+1.875
\end{align*}
$$
Then, we find the derivatives evaluated at $x_{j}$ of these to be
$$
\begin{align*}
L'_{2,0}(x_{0})&= 25x_{0}-15=25(0.3)-15=-7.5\\
L'_{2,1}(x_{1})&= -50x_{1}+25=-50(0.5)+25=0\\
L'_{2,2}(x_{2})&= 25x_{2}-10=25(0.7)-10=7.5
\end{align*}
$$
Then, we find the square of the bases
$$
\begin{align*}
L_{2,0}^{2}(x)&= (12.5x^{2}-15x+4.375)^{2}=156.3x^{4}-375x^{3}+334.4x^{2}-131.2x+19.14\\
L_{2,1}^{2}(x)&= (-25x^{2}+25x-5.25)^{2}=625x^{4}-1250x^{3}+887.5x^{2}-262.5x+27.56\\
L_{2,3}^{2}(x)&= (12.5x^{2}-10x+1.875)^{2}=156.3x^{4}-250x^{3}+146.9x^{2}-37.5x+3.516
\end{align*}
$$
Then, we calculate the Hermite interpolating polynomial with
$$
\begin{align*}
H_{5}(x)&= \sum\limits_{j=0}^{2}f(x_{j})H_{2,j}(x)+\sum\limits_{j=0}^{2}f'(x_{j})\hat{H}_{2,j}(x)\\
\text{where}\\
H_{2,j}(x)&= \left[1-2(x-x_{j})L'_{2,j}(x_{j})\right]L_{2,j}^{2}(x)\\
\hat{H}_{2,j}(x)&= (x-x_{j})L_{2,j}^{2}(x)
\end{align*}
$$
$$
\begin{align*}
H_{2,0}(x)&= \left[1-2(x-x_{0})L'_{2,0}(x_{0})\right]L^{2}_{2,0}(x)\\
&= \left[1-2(x-0.3)(-7.5)\right](156.3x^{4}-375x^{3}+334.4x^{2}-131.2x+19.14)\\
&= (15x-3.5)(156.3x^{4}-375x^{3}+334.4x^{2}-131.2x+19.14)\\
&= 2345x^{5}-6172x^{4}+6329x^{3}-3138x^{2}+746.3x-66.99\\\\
H_{2,1}(x)&= \left[1-2(x-x_{1})L'_{2,1}(x_{1})\right]L^{2}_{2,1}(x)\\
&= \left[1-2(x-0.5)(0)\right](625x^{4}-1250x^{3}+887.5x^{2}-262.5x+27.56)\\
&= 625x^{4}-1250x^{3}+887.5x^{2}-262.5x+27.56\\\\
H_{2,2}(x)&= \left[1-2(x-x_{2})L'_{2,2}(x_{2})\right]L^{2}_{2,2}(x)\\
&= \left[1-2(x-0.7)(7.5)\right](156.3x^{4}-250x^{3}+146.9x^{2}-37.5x+3.516)\\
&= (11.5-15x)(156.3x^{4}-250x^{3}+146.9x^{2}-37.5x+3.516)\\
&= -2344x^{5}+5547x^{4}-5078x^{3}+2252x^{2}-484.0x+40.43\\\\
\hat{H}_{2,0}(x)&= (x-x_{0})L^{2}_{2,0}(x)\\
&= (x-0.3)(156.3x^{4}-375x^{3}+334.4x^{2}-131.2x+19.14)\\
&= 156.3x^{5}-421.9x^{4}+446.9x^{3}-231.5x^{2}+58.5x-5.742\\\\
\hat{H}_{2,1}(x)&= (x-x_{1})L^{2}_{2,1}(x)\\
&= (x-0.5)(625x^{4}-1250x^{3}+887.5x^{2}-262.5x+27.56)\\
&= 625x^{5}-1562x^{4}+1513x^{3}-706.2x^{2}+158.8x-13.78\\\\
\hat{H}_{2,2}(x)&= (x-x_{2})L^{2}_{2,2}(x)\\
&= (x-0.7)(156.3x^{4}-250x^{3}+146.9x^{2}-37.5x+3.516)\\
&= 156.3x^{5}-359.41x^{4}+321.9x^{3}-140.33x^{2}+29.766x-2.4612
\end{align*}
$$

Then, we multiply by the respective coefficients
$$
\begin{align*}
f(x_{0})H_{2,0}(x)&= 692.9x^{5}-1824x^{4}+1870x^{3}-927.3x^{2}+220.5x-19.80\\
f(x_{1})H_{2,1}(x)&= 299.6x^{4}-599.2x^{3}+425.5x^{2}-125.8x+13.21\\
f(x_{2})H_{2,2}(x)&= -1510x^{5}+3573x^{4}-3271x^{3}+1451x^{2}-311.8x+26.05\\
f'(x_{0})\hat{H}_{2,0}(x)&= 149.3x^{5}-403.0x^{4}+426.9x^{3}-221.2x^{2}+55.89x-5.485\\
f'(x_{1})\hat{H}_{2,1}(x)&= 548.5x^{5}-1371x^{4}+1328x^{3}-619.8x^{2}+139.4x-12.09\\
f'(x_{2})\hat{H}_{2,2}(x)&= 119.5x^{5}-274.9x^{4}+246.2x^{3}-107.3x^{2}+22.77x-1.882
\end{align*}
$$
Finally, we add all of these to get
$$
H_{5}(x)=0.2x^{5}-0.3x^{4}+0.9x^{3}+0.9x^{2}+0.96x+0.003
$$
Evaluated at $x=0.6$,
$$
\begin{align*}
\sin(0.6)\approx H_{5}(x)&= 0.2(0.6)^{5}-0.3(0.6)^{4}+0.9(0.6)^{3}+0.9(0.6)^{2}+0.96(0.6)+0.003\\
&= 0.2(0.07776)-0.3(0.1296)+0.9(0.216)+0.9(0.36)+0.96(0.6)+0.003\\
&= 0.01555-0.0648+0.1944+0.324+0.576+0.003\\
&= 1.04815
\end{align*}
$$