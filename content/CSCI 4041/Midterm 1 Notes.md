#### Algorithms
**algorithm:** computational process that takes input and produces output. Steps must be *unambiguous* and *finite* in count.
**algorithms vs functions:** algorithms must be computable
##### Verification
1. How can we ensure **CORRECTNESS**?
	1. Induction
	2. Loop Invariant
2. How can we ensure **EFFICIENCY**?
		1. Platform independent
		3. Number of operations - **asymptotic performance**
		4. NOT literal time
### Master's Theorem
$$
T(n)=aT(n/b)+f(n)\text{ where }a>0\text{ and }b>1\text{ are constants.}
$$
##### Case 1
$$
\text{If there exists a constant }\epsilon>0\text{ such that }f(n)=O(n^{\log_{b}a-\epsilon})\text{, then }T(n)=\Theta(n^{\log_{b}a}).
$$
##### Case 2
$$
\text{If there exists a constant }k\ge0\text{ such that }f(n)=\Theta(n^{\log_{b}a}\lg^{k}n)\text{, then }T(n)=\Theta(n^{\log_{b}a}\lg^{k+1}n).
$$
##### Case 3
$$
\begin{align*}
&\text{If there exists a constant }\epsilon>0\text{ such that }f(n)=\Omega(n^{\log_{b}a+\epsilon}),\\
&\text{and if }af(\frac{n}{b})\le cf(n)\text{ for some constant }c<1\text{, then }T(n)=\Theta(f(n))
\end{align*}
$$
#### Watershed Function
Compare our function with $n^{\log_{b}a}$. If our function grows slower, Case 1 above applies. If our function grows faster, Case 3 applies. Otherwise, use Case 2.
##### If this doesn't work
Use recursion tree or substitution


>[!tip] Helpful Formula
>$$\sum_{i=1}^ni=\frac{n^2}2+\frac n2$$

| Function Type | Big O Notation         |
| ------------- | ---------------------- |
| $a$           | $\Theta(1)$            |
| $\lg^bn$      | $\forall a\gt0,O(n^a)$ |
| $n^a$         | $\Theta(n^a)$          |
| $a^n$         | $\Theta(a^n)$          |
| $n!$          | $\Theta(n!)$           |