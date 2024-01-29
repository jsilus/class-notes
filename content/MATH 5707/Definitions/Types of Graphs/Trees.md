A graph without cycles is called a **forest**. A *connected* graph without cycles is called a **tree**.

**Theorem:** The following are equivalent.
1) $G$ is a tree
2) $G$ is a minimal connected graph (i.e. if we remove any edge, it becomes disconnected).
3) $G$ is a maximal acyclic graph (i.e. if we add any edge, it will get a cycle).

**Theorem**: A tree on $n$ vertices always has $n-1$ edges.

**Theorem:**
1) $G$ is acyclic
2) G is connected
3) $|E|=|V|-1$
Any two of these imply the third.
## Spanning Trees
$T$ is a **spanning tree** of graph $G$ if
1) $T$ is a tree
2) $T$ has the same vertices as $G$
3) $T$ is a subgraph of $G$

**Theorem:** Any connected graph has a spanning tree. 
*Proof:* If it is already acyclic, it is a spanning tree. If it is not, we can remove the edges that form cycles without affecting the connectedness. Once no cycles are remaining, there is a spanning tree.

[[Theorem Cayley]] is for the number of possible spanning trees for a set of vertices.
### Minimal Spanning Trees
Let $G$ be a graph and $f:E\rightarrow\mathbb{R}_{\ge0}$ is a weight fn.
Problem: Find a connected subgraph $T$ of $G$ s.t. $\sum\limits_{e\in T}f(e)$ is minimal.
From **CSCI 4041:** [[Kruskal]], [[Prim]].

**Greedy Algorithm:**
1) Look at all unadded edges that can be added which create no cycle
2) Pick the edge of smallest weight
3) Add it

*Proof:* Let $T$ be the output. Assume $T'$ is the lightest tree which has as many common edges with $T$ as possible. Assume edge $e=xy\in T$ is the first edge not in $T'$. Add $e$ to $T'$, creating a cycle in $T'$. This cycle must contain some edge $e'$ such that $T-e+e'$ is a tree. $f(e)\le f(e')$ because during our algorithm we added $e$ and not $e'$. But, because $T'$ is the lightest tree, $f(e)\ge f(e')$. Either $f(e)=f(e')$, or we get a contradiction. If there is no contradiction, repeat with the next edge.