
$$
\begin{align*}
M&= N_{1}(h)+K_{1}h+K_{2}h^{2}+K_{3}h^{3}+\cdots\\
\text{where }\\
M&= f'(x_{0})\\
N_{1}(h)&= \frac{f(x_{0}+h)-f(x_{0}-h)}{2h}\\
K_{2}h^{2}&= \frac{h^{2}}{6}f^{(3)}(\xi)
\end{align*}
$$
## How to do?
$$
\begin{align*}
M-N_{1}(h)&= K_{1}h+K_{2}h^{2}+K_{3}h^{3}+\cdots\\
M-N_{1}\left(\frac{h}{2}\right)&= K_{1} \frac{h}{2}+K_{2}\left(\frac{h}{2}\right)^{2}+K_{3}\left(\frac{h}{3}\right)^{3}+\cdots\\
M-2N_{1}\left(\frac{h}{2}\right)+N_{1}(h)&= K_{1}h+K_{2} \frac{h^{2}}{2}+K_{3} \frac{h^{3}}{4}+\cdots\\
M&= \left[2N_{1}\left(\frac{h}{2}\right)-N_{1}(h)\right]+(- \frac{K_{2}}{2}h^{2})+(- \frac{3K_{3}}{4}h^{3})+\cdots
\end{align*}
$$

## Example
$$
f(x)=\ln(x),\text{ }f'(1.8)\approx\text{ }?
$$
By forward-difference formula:
$$
\begin{align*}
&f'(1.8)\approx \frac{f(1.8+h)-f(1.8)}{h}\\
&\Rightarrow
\begin{cases}
h=0.1, & f'(1.8)\approx0.5406722\Rightarrow N_{1}(0.1)\\
h=0.05, & f'(1.8)\approx0.5479795\Rightarrow N_{1}\left(\frac{0.1}{2}\right)
\end{cases}\\
N_{2}(h)&= 2N_{1}\left(\frac{h}{2}\right)-N_{1}(h)\\
N_{2}(0.1)&= 2N_{1}(0.05)-N_{1}(0.1)\approx\text{more accurate}
\end{align*}
$$


$$
\begin{align}
L&=\phi(h)+a_{2}h^{2}+a_{4}h^{4}+\cdots \\
L&=f'(x) \\
\phi(h)&= \frac{1}{2h}\left[ f(x+h)-f(x-h) \right] \\
L&=\phi\left( \frac{h}{2} \right)+\frac{1}{4}a_{2}h^{2}+\frac{1}{16}a_{4}h^{4}+\cdots \\
L&=\frac{1}{3}\left( 4\phi\left( \frac{h}{2} \right) -\phi(h)\right)-\frac{3}{4}a_{4}h^{4}-\frac{3}{16}a_{6}h^{6}-\cdots \\
L&=\psi(h)+b_{4}h^{4}+b_{6}h^{6}+\cdots \\
L&= \psi\left( \frac{h}{2} \right)+\left( \frac{1}{2} \right)^{4}b_{4}h^{4}+\left( \frac{1}{2} \right)^{6}b_{6}h^{6}+\cdots \\
\end{align} 
$$
# M-Step Richardson Extrapolation Algorithm
1) 
Select $h$ (e.g. $h=1$) and compute $M+1$ numbers.
Compute $D(n,0)=\phi\left( \frac{h}{2^{n}} \right)$ where $0\leq n\leq M+1$ and $\phi(h)=\frac{1}{2h}\left[ f(x+h)-f(x-h) \right]$.
2) 
Compute additional quantities by $D(n,k)=\frac{4^{k}}{4^{k}-1}D(n,k-1)-\frac{1}{4^{k}-1}D(n-1,k-1)$ where $k=1,\dots,M,n=k,k+1,\dots,M$.

**Theorem:** The quantities $D(n,k)$ defined in the RE algorithm obey an equation of the form
$$
D(n,k)=L+\sum\limits_{ j = k }^{\infty} A_{jk}\left( \frac{h}{2^{n}} \right) ^{2j}
$$