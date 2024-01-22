## Example Problem
Maximize $g(x)=(x-1)^2-\ln x$ over $[1,2]$.

Use [[Extreme Value Theorem]].

First, check: $g(x)\in C[1,2]$

Check endpoints:
	$g(1)=(1-1)^2-\ln1=0$
	$g(2)=(2-1)^2-\ln2\approx0.30685$

Check $g'(x)=0$
	$g'(x)=2x-2-\frac1x=0$
	$g'(x)=\frac{2x^2-2x-1}x=0$
	So, $2x^2-2x-1=0$ and $x\ne0$
	$x_1=\frac{1-\sqrt3}2,x_2=\frac{1+\sqrt3}2$
	Only $x_2\in[1,2]$
	$g(x_2)=-(-\frac12+\frac12\sqrt3)^2+\ln(\frac12+\frac12\sqrt3)\approx0.17790$

Therefore, by the Extreme Value Theorem, $g(2)\approx0.30685$ is the maximum

## New Content
[[Taylor's Theorem]]

## Example Problem
Second-degree Taylor Polynomial for $f(x)=\cos x$ about $x_0=0$
$n=2$

First, check $f(x)=\cos x\in C^2(-\infty,\infty)$
	$f(x)=\cos x$
	$f^{(1)}=-\sin x$
	$f^{(2)}=-\cos x$
	$f^{(3)}=\sin x$

Next, calculate the polynomial with
	$f(x)=P_2(x)+R_2(x)$
	$P_2(x)=f(x_0)+f^{(2)}(x_0)(x-x_0)+\frac{f^{(2)}(x_0)}{2!}(x-x_0)^2$
		      $=\cos0+(-\sin0)(x-0)\frac{-\cos0}{2!}(x-0)^2$
		      $=1-\frac12x^2$
	$R_2(x)=\frac1{3!}f^{(3)}(z(x))(x-x_0)^3=\frac16\sin(z(x))x^3$
### Use it to approximate $f(0.01)$?
$f(x)=\cos x$
$f(0.01)=\cos(0.01)$
$f(0.01)\approx P_2(0.01)=1-\frac12(0.01)^2=0.99950000$

$|f(0.01)-P_2(0.01)|\approx4*10^{-10}$
### Estimate the error?
Use $|R_2(x)|$

$|R_2(x)|=|\frac16\sin(z(x))x^3|\le|\frac16x^3|\le|\frac16(0.01)^3|\approx0.1\bar6*10^{-6}$

or

$|R_2(x)|=|\frac16\sin(z(x))x^3|\le|\frac16\sin(0.01)(0.01)^3|\approx0.1\bar6*10^{-8}$

