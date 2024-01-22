
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