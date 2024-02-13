## Ramsey Number
The **Ramsey number** $R(s,t)$ is the smallest value of $n$ s.t. any [[Colored Graphs|coloring]] of edges of $K_{n}$ in red and green has either $K_{s}$ subgraph with red edges or $K_t$ subgraphs with green edges.
(for other uses, consider the red edges as no edges)

$$
\begin{align}
R(2,t) & =t=R(t,2) \\
R(3,3) & =6 \\
R(3,4) & =9 \\
R(4,4) & =18 \\
43\le R(5,5) & \le49 \\
798\le R(10,10) & \le 23556
\end{align}
$$
**Theorem:** $R(s,t)$ is finite for any $s,t$. If $s,t>2$, then $$R(s,t)\le{s+t-2\choose s-1}$$
*Proof:* We claim
$$
R(s,t)\le R(s-1,t)+R(s,t-1)
$$
Now,
$$
{s+t-3\choose s-2}+{s+t-3\choose s-1}={s+t-2\choose s-1}
$$

## Example
There are 6 people. Any two either know each other or don't.

**Claim:** There are either 3 people who know each other or 3 people who do not know each other.


**Problem:** Five distinct numbers in a row $a_{1},a_{2},a_{3},a_{4},a_{5}$.
*Prove:* Either there is an increasing or decreasing subsequence of length 3.

**Erdös Theorem:** Let $a_{1},\dots,a_{mn+1}$ be a sequence of distinct numbers. Then, either $\exists$ an increasing subsequence of length $n+1$ or $\exists$ a decreasing subsequence of length $m+1$.
*Proof:* Write above each number the length of longest increasing subsequence starting with this number.

**Theorem:** $R(s,s)\geq2^{s/2}$.
*Proof:* Color edges randomly. Each particular coloring gets probability $\frac{1}{2^{n\choose2}}$. Pick subgraph $K_{s}$