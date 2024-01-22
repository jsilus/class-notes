Discussing more [[Binary Float Format]] and [[Error]]
Defined [[Algorithms]], [[Stability]], and [[Rate of Convergence]]
## Example: float arithmetic
Mathematical Formula: $x^2-y^2=(x+y)(x-y)$
1. $fl([fl(x)]^2)-fl([fl(y)]^2)$
2. $(fl[fl(x)+fl(y)])(fl[fl(x)-fl(y)])$
where $fl$ is the chopping/rounding

## Example: Chopping
Use 4-digit chopping on the following calculation:
$18\pi-3.120128$

#### Step 0:
- $18=0.1800\times10^2$
- $\pi\approx0.3141\times10^1$
- $3.120128\approx0.3120\times10^1$

#### Step 1:
$18\pi\approx(0.1800\times10^2)(0.3141\times10^1)\approx0.5653\times10^2$
#### Step 2:
$0.5653\times10^2-0.3120\times10^1\approx0.5341\times10^2$

## Example: Stability
$P_n=\frac{10}3P_{n-1}-P_{n-2}$
$\Rightarrow P_{n}=C_{1}(\frac{1}{3})^{n}+C_{2}(3)^{n}$
$$
\Rightarrow
\begin{cases}
P_{0}=1 \\
P_{1}=\frac{1}{3}
\end{cases}
\Rightarrow
\begin{cases}
1=C_{1}(\frac{1}{3})^{0}+C_{2}(3)^{0} \\
\frac{1}{3}=C_{1}(\frac{1}{3})^{1}+C_{2}(3)^{1}
\end{cases}
\Rightarrow
\begin{cases}
C_{1}=1 \\
C_{2}=0
\end{cases}
$$
$\Rightarrow P_{n}=1(\frac{1}{3})^{n}$
$$
\Rightarrow
\begin{cases}
P_{0}^{*}=1.0000 \\
P_{1}^{*}=0.3333
\end{cases}
\Rightarrow
\begin{cases}
1.0000=C_{1}(\frac{1}{3})^{0}+C_{2}(3)^{0} \\
0.3333=C_{1}(\frac{1}{3})^{1}+C_{2}(3)^{1}
\end{cases}
\Rightarrow
\begin{cases}
C_{1}^{*}=1.0000 \\
C_{2}^{*}=-0.12500
\end{cases}
$$
$=>P_{n}^{*}=1.0000(\frac{1}{3})^{n}-0.12500\times10^{-5}(3)^{n}$

# End of Chapter 1