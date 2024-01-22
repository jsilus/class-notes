Motivation: keep using secant
Ensure that the root is always in the middle of the two last successful positions

This is a combination of the [[Secant Method]] and [[The Bisection Method]]

### Step 1:
Start with $p_{0},p_{1}$.
Test: $f(p_{0})\cdot f(p_{1})<0$.
Then, $p_{2}=p_{1}-\frac{f(p_{1})(p_{1}-p_{0})}{f(p_{1})-f(p_{0})}$
### Step 2:
$$
\begin{cases}
p_{1},p_{2}\rightarrow p_{3}?\\
p_{0},p_{2}\rightarrow p_{3}?
\end{cases}
$$

Pick the $p_{n}$ such that $f(p_{n})\cdot f(p_{2})<0$, or $\text{sgn}(f(p_{n}))\cdot\text{sgn}(f(p_{2}))<0$.
Then, 
$$
p_{3}=p_{2}-\frac{f(p_{2})(p_{2}-p_{n})}{f(p_{2})-f(p_{n})}
$$