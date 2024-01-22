## Problem 1
#### a.
$$
\begin{align*}
\int_{-1}^{1}x\sin x\,dx&\approx 0.\bar{5}\cdot0.7745966692\sin(0.7745966692)\\
&+ 0.\bar{8}\cdot0\sin(0)+0.\bar{5}\cdot-0.7745966692\sin(-0.7745966692)\\
&= 0.601971665363
\end{align*}
$$
#### b.
$$
\begin{align*}
\int_{0}^{\frac{\pi}{4}}x^{2}\sin x\,dx&= \int_{-1}^{1}\left(\frac{\pi}{8}t+ \frac{\pi}{8}\right)^{2}\sin\left(\frac{\pi}{8}t+ \frac{\pi}{8}\right)\frac{\pi}{8}\,dt\\
&\approx 0.\bar{5}\left(\frac{\pi}{8}\cdot0.7745966692+ \frac{\pi}{8}\right)^{2}\sin\left(\frac{\pi}{8}\cdot0.7745966692+ \frac{\pi}{8}\right)\cdot\frac{\pi}{8}\\
&+ 0.\bar{8}\left(\frac{\pi}{8}\cdot0+ \frac{\pi}{8}\right)^{2}\sin\left(\frac{\pi}{8}\cdot0+ \frac{\pi}{8}\right)\cdot \frac{\pi}{8}\\
&+ 0.\bar{5}\left(\frac{\pi}{8}\cdot-0.7745966692+ \frac{\pi}{8}\right)^{2}\sin\left(\frac{\pi}{8}\cdot-0.7745966692+ \frac{\pi}{8}\right)\cdot \frac{\pi}{8}\\
&= 0.0887538536193
\end{align*}
$$
## Problem 2
To do this, we solve the normal equations
$$
a_{0}=\frac{\sum\limits_{i=1}^{m}x_{i}^{2}\sum\limits_{i=1}^{m}y_{i}-\sum\limits_{i=1}^{m}x_{i}y_{i}\sum\limits_{i=1}^{m}x_{i}}{m\left(\sum\limits_{i=1}^{m}x_{i}^{2}\right)-\left(\sum\limits_{i=1}^{m}x_{i}\right)^{2}}=\frac{14.17\cdot14.58-22.808\cdot8.9}{6\cdot14.17-79.21}\approx0.620895
$$
and
$$
a_{1}=\frac{m\sum\limits_{i=1}^{m}x_{i}y_{i}-\sum\limits_{i=1}^{m}x_{i}\sum\limits_{i=1}^{m}y_{i}}{m\left(\sum\limits_{i=1}^{m}x_{i}^{2}\right)-\left(\sum\limits_{i=1}^{m}x_{i}\right)^{2}}=\frac{6\cdot22.808-8.9\cdot14.58}{6\cdot14.17-79.21}\approx1.21962
$$
Then, the error can be calculated with
$$
E=\sum\limits_{i=1}^{m}[y_{i}-(a_{1}x_{i}+a_{0})]^{2}\approx0.0000271945
$$
## Problem 3
To solve for this, we must solve the following system of equations for $a_{0},a_{1},a_{2}$:
$$
\begin{align*}
a_{0}\int_{0}^{2}1\,dx+a_{1}\int_{0}^{2}x\,dx+a_{2}\int_{0}^{2}x^{2}\,dx&= \int_{0}^{2}e^{x}\,dx\\
a_{0}\int_{0}^{2}x\,dx+a_{1}\int_{0}^{2}x^{2}\,dx+a_{2}\int_{0}^{2}x^{3}\,dx&= \int_{0}^{2}xe^{x}\,dx\\
a_{0}\int_{0}^{2}x^{2}\,dx+a_{1}\int_{0}^{2}x^{3}\,dx+a_{2}\int_{0}^{2}x^{4}\,dx&= \int_{0}^{2}x^{2}e^{x}\,dx
\end{align*}
$$
We can solve the integrals
$$
\begin{align*}
\int_{0}^{2}1\,dx&= (2)-(0)=2\\
\int_{0}^{2}x\,dx&= \frac{1}{2}(2)^{2}- \frac{1}{2}(0)^{2}=2\\
\int_{0}^{2}x^{2}\,dx&= \frac{1}{3}(2)^{3}- \frac{1}{3}(0)^{3}= \frac{8}{3}\\
\int_{0}^{2}x^{3}\,dx&= \frac{1}{4}(2)^{4}- \frac{1}{4}(0)^{4}=4\\
\int_{0}^{2}x^{4}\,dx&= \frac{1}{5}(2)^{5}- \frac{1}{5}(0)^{5}= \frac{32}{5}\\
\int_{0}^{2}e^{x}\,dx&= e^{2}-e^{0}=e^{2}-1\approx6.38906\\
\int_{0}^{2}xe^{x}\,dx&= (2-1)e^{2}-(0-1)e^{0}=e^{2}+1\approx8.38906\\
\int_{0}^{2}x^{2}e^{x}\,dx&= \left((2)^{2}-2(2)+2\right)e^{2}-\left((0)^{2}-2(0)+2\right)e^{0}=2e^{2}-2\approx12.7781
\end{align*}
$$
And substitute them into the system of equations to get
$$
\begin{cases}
2a_{0}+2a_{1}+ \frac{8}{3}a_{2}=e^{2}-1 \\
2a_{0}+ \frac{8}{3}a_{1}+4a_{2}=e^{2}+1 \\
\frac{8}{3}a_0+4a_{1}+ \frac{32}{5}a_{2}=2e^{2}-2
\end{cases}
\xrightarrow{}
\begin{bmatrix}
2 & 2 & \frac{8}{3} & e^{2}-1 \\ 
2 & \frac{8}{3} & 4 & e^{2}+1 \\ 
\frac{8}{3} & 4 & \frac{32}{5} & 2e^{2}-2
\end{bmatrix}
\xrightarrow{RREF}
\begin{bmatrix}
1 & 0 & 0 & \frac{12e^{2}-72}{4}-3 \\ 
0 & 1 & 0 & 3- \frac{15(2e^{2}-14)}{4} \\ 
0 & 0 & 1 & \frac{15(2e^{2}-14)}{8}
\end{bmatrix}
$$
Or
$$
\begin{cases}
a_{0}= \frac{12e^{2}-72}{4}-3 & \approx1.16717 \\
a_{1}= 3- \frac{15(2e^{2}-14)}{4} & \approx0.0820793 \\
a_{2}= \frac{15(2e^{2}-14)}{8} & \approx1.45896
\end{cases}
$$
Using these three coefficients, we can complete our least squares polynomial approximation to be
$$
P_{2}(x)=1.16717+0.0820793x+1.45896x^{2}
$$