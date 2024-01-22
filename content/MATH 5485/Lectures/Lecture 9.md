More [[Fixed-Point Theorem]]
Introduced [[Newton's Method]]

## Example
The equation $f(x)=x^{3}+4x^{2}-10=0$ has a unique root in $[1,2]$.

Find a $g(p)$ such that $f(x)=0\Rightarrow g(p)=p$
$$
g(x)=
\begin{cases}
x^{3}+4x^{2}-10+x \\
\left(\frac{10}{x}-4x\right)^{\frac{1}{2}} \\
\frac{1}{2}(10-x^{3})^{\frac{1}{2}} \\
\left(\frac{10}{4+x}\right)^{\frac{1}{2}} \\
x-\frac{x^{3}+4x^{2}-10}{3x^{2}+8x}
\end{cases}
=x
$$
### 1st check
$g_{1}\in C[1,2]$
### 2nd check
$g_{1}(x)\in [1,2]$
### 3rd check
$|g_{1}'(x)|<1$

>[!warning] Remember
>All of these are sufficient conditions, not necessary conditions

In this case, the best option for g(x) is
$$
g(x)=x- \frac{x^{3}+4x^{2}-10}{3x^{2}+8x}=x-\frac{f(x)}{f'(x)}
$$
This is [[Newton's Method]]