Suppose $f\in C^n[a,b]$ and $\exists f^{n+1}\in[a,b]$.

Take a point $x_0\in[a,b]$. For every $x\in[a,b],\exists z(x)\in[x_0,x]$ with

$f(x)\approx P_n(x)$
	or
$f(x)=P_n(x)+R_n(x)$

where $P_n(x)=f(x_0)+f'(x_0)(x-x_0)+\frac{f^{(2)}(x_0)}{2!}(x-x_0)^2+...$
          $R_n(x)=\frac{f^{(n+1)}(z(x))}{(n+1)!}(x-x_0)^{n+1}$

$z(x)$ is an unknown number, we only know its range.

>[!tip] Reminder
>Estimate $f(x)$ with $P_n(x)$, estimate error with $|R_n(x)|$

### Check:
1. Function and relevant derivatives are continuous over relevant period
2. The derivative for one past $n$ exists