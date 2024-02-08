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