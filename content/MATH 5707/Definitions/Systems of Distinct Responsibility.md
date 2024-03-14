**Hall's Marriage Theorem:** Set of men and women. Each woman has a list of men she is willing to marry. Can you arrange so that each woman gets a husband?

Let $G$ be a **bipartite** graph with sets $X$ and $Y$ of vertices. A matching is a subset $E$ of edges such that no vertex is incident to more than one edge of $E$. A complete matching from $X$ to $Y$ is a matching that uses every vertex in $X$. For a subset $A\subseteq X$ denote $\Gamma(A)$ the set of vertices in $Y$ adjacent to a vertex in $A$.

**Theroem:** $\exists$ complete match from $X$ to $Y$ iff for any $A\subseteq X$ we have $|\Gamma(A)|\geq|A|$

**Theorem:** Suppose $G$ is bipartite. Every vertex in $X$ has degree $s$, every vertex in $Y$ has degree $t$. If $\left| X \right|\le\left| Y \right|$, $\exists$ perfect matching from $X$ to $Y$.