A graph is **planar** if it *can be* drawn on a plane so that no edges cross.
If it is drawn with crossing edges, it could still have some way of being drawn without any crossing edges.

The regions planar graphs partition the plane into are called **faces**.
## Euler's Formula
**Theorem:** If a connected planar graph has $n$ vertices, $m$ edges, and $f$ faces, then $n-m+f=2$.

*Proof:* Induction on number of faces.
Base Case: [[trees]] $\Leftrightarrow$ $f=1$
$$
\begin{align*}
n&= n\\
m&= n-1\\
f&= 1\\
n-(n-1)+1&= 2
\end{align*}
$$
Inductive Step:
Assume true for $f>1\Rightarrow$ there is a cycle
Pick edge ab of the cycle and remove it.
$$
\begin{align*}
f&\rightarrow f-1\text{ because we merge two faces}\\
n&\rightarrow n\\
m&\rightarrow m-1
\end{align*}
$$
By inductive assumption, $n-(m-1)+(f-1)=2\Leftrightarrow n-m+f=2$.
#### Lemma 1
**Lemma:** A planar graph with $n\ge3$ vertices has at most $m\le3n-6$ edges.

*Proof:* Is there a bridge?
Case 1: There is a bridge
One side has $n_{1}$ vertices and $m_{1}$ edges. The other side has $n_{2}$ vertices and $m_{2}$ edges.
Then, the total number $n=n_{1}+n_{2}$ and $m=m_{1}+m_{2}+1\le3n_{1}-6+3n_{2}-6+1\lt3n-6$.

Case 2: No bridges $\Rightarrow$ each edge belongs to 2 faces
Claim: $2m\ge3f$
$$
\begin{align*}
2m&\ge 3f\\
\frac{2}{3}m&\ge f\\
n-m+f&\le n-m+ \frac{2}{3}m\\
2&\le n- \frac{m}{3}\\
m+6 &\le 3n
\end{align*}
$$
#### Lemma 2
**Lemma:** If smallest cycle in planar graph has length $\ge4$, then $m\le2n-4$. Bipartite graphs must have cycles of at least $4$.
## Specific Disproofs
**Theorem:** $K_{5}$ is not planar.
*Proof:*
$$
\begin{align*}
n&= 5\\
m&= 10\\
10&\le 3\cdot5-6\\
\text{false}&\Rightarrow \text{cannot be planar}
\end{align*}
$$
**Theorem:** $K_{3,3}$ is not planar.
*Proof:*
$K_{3,3}$ is bipartite
$$
\begin{align*}
n&= 6\\
m&= 9\\
9&\le 2\cdot6-4\\
\text{false}&\Rightarrow \text{cannot be planar}
\end{align*}
$$
