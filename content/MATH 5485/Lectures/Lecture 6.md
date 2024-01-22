Continued [[The Bisection Method]], talked more [[Error]], specifically [[Bisection Method Error Theorem]]

## Example
Use Bisection Method to $f(x)=\left(\frac{x}{2}\right)^{2}-\sin x=0$ in $[1.5,2.0]$ to 5 digits

0. 
$$
\begin{align*}
\text{1st check: }&f(x) \text{ is continuous}\\
\text{2nd check: }&f(1.5)=-0.43500<0\\
&f(2.0)=0.090700>0\\
&\Rightarrow\text{by IVT there exists at lease one solution to }f(x)=0 
\end{align*}
$$
1. 
$$
\begin{align*}
p_{1}&=\frac{a_{0}+b_{0}}{2}=1.7500\\
\Rightarrow f(p_{1})&=f(1.7500)\approx-0.21850<0\\
\Rightarrow &\text{ solution exists on }[p_{1},b_{0}]
\end{align*}
$$
2. 
$$
\begin{align*}
a_{1}&= p_{1}=1.7500\\
b_{1}&= b_{0}=2.0000\\
\Rightarrow p_{2}&= \frac{a_{1}+b_{1}}{2}=1.8750\\
\Rightarrow f(p_{2})&= f(1.8750)\approx-0.0752<0\\
\Rightarrow &\text{ solution exists on }[p_{2},b_{0}]
\end{align*}
$$
3. continue until exit condition
4. After 10 iterations
$$
\begin{align*}
p_{10}&= 1.9341\\
f(p_{10})&= 0.0004>0
\end{align*}
$$
$$
\text{relative error}=\frac{|p-p_{10}|}{|p|}\le\frac{|b_{11}-a_{11}|}{|a_{11}|}\approx2.5859\times10^{-4}\le10^{-3}
$$
>[!warning]
>This error equation approximation isn't valid for every example
