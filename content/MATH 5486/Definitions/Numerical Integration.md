If you find $g(x)\approx f(x)$, then $\int_{a}^{b}f(x)\,dx\approx\int _{a}^{b}g(x) \, dx$.

Given $f(x_{0}),f(x_{1}),f(x_{2}),\dots,f(x_{n})$
By the Lagrange interpolation,
$$
\begin{align}
p(x)&=\sum\limits_{ i = 0 }^{n} f(x_{i})l_{i}(x) \\
l_{i}(x)&=\prod\limits_{ j = 0,j\neq i }^{n} \frac{x-x_{j}}{x_{i}-x_{j}}
\end{align}
$$
With this,
$$
\int _{a}^{b}f(x) \, dx \approx \int _{a}^{b}f(x_{i})l_{i}(x) \, dx =\sum\limits_{ i = 0 }^{n} f(x_{i})\int _{a}^{b}l_{i}(x) \, dx=\sum\limits_{ i = 0 }^{n} A_{i}f(x_{i})\text{ where }A_{i}=\int _{a}^{b}l_{i}(x) \, dx  
$$
This can be simplified as
$$
\int _{a}^{b}f(x) \, dx \approx \sum\limits_{ i = 0 }^{n} A_{i}f(x_{i})\text{ where }A_{i}=\int _{a}^{b}l_{i}(x) \, dx  
$$
This is called the **Newton-Cotes Formula**.