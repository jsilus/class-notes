Graphs where the vertices are colored such that no vertex with a color is connected to a vertex of the same color.
Number of colors needed for a graph is **chromatic number** $\chi(G)$ or $\gamma(G)$.
The **clique number** $\omega(G)$ represents the maximum number of vertices in a graph $G$ that are in a group such that any two vertices are adjacent for all vertices.

$\chi(G)=2\quad\rightarrow$ **bipartite** 
$1\le\chi(G)\le n$
$\chi(G)\ge\omega(G)$

$$
\sum\limits_{color}\text{\# vertices this color}\le\text{\# of colors}\cdot\alpha(G)
$$

$$
\begin{align*}
\delta(H)&= \text{minimum degree of vertex in }H\\
k&= \text{maximum }H\text{-subgraph of }G
\end{align*}
$$

**Theorem:** $\chi(G)\le k+1$
*Proof:* $G$ has a vertex of degree $\le k$ which we call $x_{n}$. $H_{n-1}=G\setminus\{x_{n}\}$. $H_{n-1}$ also has a vertex of degree $\le k$. Call this $x_{n+1}$. e.t.c. Get $x_{1},\dots,x_{n}$. Color one by one.
#### 4-color Theorem
**Theorem:** Any planar graph is 4-colorable.

Very hard to prove

**Theorem:** Any planar graph can be properly colored in with 6 colors.
*Proof:* Any planar graph has a vertex of degree $\le 5$. Assume this is false. Then, some [[Planar Graphs|planar graph]] has all degree $\ge 6$. But, then $m\ge\frac{6n}{2}\quad\rightarrow$ contradiction.

Induction: remove such vertex. Color the rest. Add it back.

**Theorem:** Any planar graph can be properly colored in with 5 colors.
*Proof:* Assume false, $G$ is a minimal counterexample.
$G$ has a vertex $x$ of degree 5. Color $H=G\setminus\{x\}$ with 5 colors. $x_{i}$ has color $i$ for all $x_{i},i$. Number the vertices around $x$ clockwise as $x_{1},\dots,x_{5}$.

Let $H(i,j)$ be a subgraph of $H$ vertices of colors $i,j$. Pick $H(1,3)$. If there are multiple connected components, flip the colors in one of them. This graph is still colored properly. $x$ now has the color that has been freed. If there is one connected component, pick $H(2,4)$. Flip if possible. If not, $x_{1}$ connected to $x_{3}$ and $x_{2}$ connected to $x_{4}$ means this graph cannot be planar. This is a contradiction.