
## Goal
If $f$ is a continuous function defined on $[a,b]$ such that $f(a)$ and $f(b)$ are of opposite sign, then, by the [[Intermediate Value Theorem]], a number $p$ exists such that $f(p)=0$.

Find intercept by constantly bisecting the space between points until we find $f(p)=0$.

## Steps of Procedure
1. 
$$
\begin{align*}
\text{Set }a_{1}=a\text{ and }b_{1}=b\\
\text{let }p_{1}\text{ be mid-point of }[a,b]\\
p_{1}=a_{1}+\frac{b_{1}-a_{1}}{2}=\frac{a_{1}+b_{1}}{2}
\end{align*}
$$
$$
\begin{align*}
\Rightarrow f(p_{1})&\Rightarrow
\begin{cases}
\text{Case 1:} & \text{If }f(p_{1})=0\text{, then }p=p_{1}\text{ and we are done} \\
\text{Case 2:} & \text{If }f(p_{1})\ne 0\text{, then }f(p_{1})\text{ has same sign as either }f(a_{1})\text{ or }f(b_{1})
\end{cases}\\
&\Rightarrow
\begin{cases}
\text{Case 2,1:} & \text{If }f(p_{1})\text{ and }f(a_{1})\text{ has same sign, set }a_{2}=p_{1},b_{2}=b_{1}\\
\text{Case 2,2:} & \text{If }f(p_{1})\text{ and }f(b_{1})\text{ has same sign, set }a_{2}=a_{1},b_{2}=p_{1}
\end{cases}
\end{align*}
$$
2. 
$$
p_{2}=\frac{a_{2}+b_{2}}{2}\text{, repeat 1.}
$$
### Stop Condition
$|p-p_{i}|\le\text{tolerance}$
or maximum number of iterations

>[!warning] DO NOT FORGET THIS
## Pseudocode Algorithm
**Input:** $f,a,b,\text{tolerance},\text{maxiter}$
**Output:** $p$ such that $f(p)\approx0$ or $\text{NIL}$

```
find_x_intercept(f, a, b, tolerance, maxiter)
	for i = 1 to maxiter
		p = (a + b) / 2
		if (f(p) == 0 or |(a + b) / 2| < tolerance)
			return p
		if f(p) * f(a) > 0
			a = p
		else
			b = p
	return NIL
```

>[!tip] Tip
>For computer calculation of signs, use the $\text{sgn}$ function in line 6
>$$
>\text{sgn}(x)=
>\begin{cases}
>1, & x>0 \\
>0, & x=0 \\
>-1, & x<0
>\end{cases}
>$$
## Theorem: [[Bisection Method Error Theorem]]
