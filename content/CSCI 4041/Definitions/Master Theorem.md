### Prerequisite
$$
T(n)=aT(n/b)+f(n)\text{ where }a>0\text{ and }b>1\text{ are constants.}
$$

### Case 1
$$
\text{If there exists a constant }\epsilon>0\text{ such that }f(n)=O(n^{\log_{b}a-\epsilon})\text{, then }T(n)=\Theta(n^{\log_{b}a}).
$$
### Case 2
$$
\text{If there exists a constant }k\ge0\text{ such that }f(n)=\Theta(n^{\log_{b}a}\lg^{k}n)\text{, then }T(n)=\Theta(n^{\log_{b}a}\lg^{k+1}n).
$$
### Case 3
$$
\begin{align*}
&\text{If there exists a constant }\epsilon>0\text{ such that }f(n)=\Omega(n^{\log_{b}a+\epsilon}),\\
&\text{and if }af(\frac{n}{b})\le cf(n)\text{ for some constant }c<1\text{, then }T(n)=\Theta(f(n))
\end{align*}
$$

## Watershed Function
Compare our function with $n^{\log_{b}a}$. If our function grows slower, Case 1 above applies. If our function grows faster, Case 3 applies. Otherwise, use Case 2.

## If this doesn't work
Use recursion tree or substitution