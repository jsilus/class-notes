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

Let $G$ be a graph and $f:E\rightarrow\mathbb{R}_{\ge0}$ is a weight fn.
Problem: Find a connected subgraph $T$ of $G$ s.t. $\sum\limits_{e\in T}f(e)$ is minimal.
From **CSCI 4041:** [[Kruskal]], [[Prim]].