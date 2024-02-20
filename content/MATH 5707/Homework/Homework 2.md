Worked with Matthew Lehr (on homework 1 as well, forgot to add last time)
## 4.
Let $G$ be a counterexample with a minimum number of vertices to be one. Pick a vertex $x\in G$ and let $\{x_{1},x_{2},\dots,x_{l}\}$ be the neighbors of $x$ such that $l\leq d$.

If $l<d$, we can remove $x$ and call the remaining graph $H$. Then, because $G$ has a minimum number of vertices, $H$ is $d\text{-colorable}$. We can then add $x$ back and give it a unique color.

Otherwise,  $l=d$. We can say that $x_{i}$ has color $i$. Let $H_{ij}$ be $H$ with the colors restricted to just $i$ and $j$.

If $x_{i}$ and $x_{j}$ have a path between them in $H_{ij}$, continue to pick different $i$-s and $j$-s until $x_{i}$ and $x_{j}$ have no path between them. We know at least one combination of $i$ and $j$ supports this because there is no subgraph isomorphic to $K_{d+1}$ and $G$ has the minimum number of vertices to be a counterexample.

Then, once an $i$ and $j$ are picked such that no path exists between $x_{i}$ and $x_{j}$ in $H_{ij}$, change $x_{i}$ to be the color of $j$, and flip the colors of all other vertices within its connected component.

$x$ can then be added back to the graph and given the color of $i$, making the graph $G$ $d\text{-colorable}$.

## 5.
We proceed by induction.

**Base Case:** $n=1$
When $n=1$, $G=\bar{G}$. Then, $\chi(G)+\chi(\bar{G})=1+1\leq1+1$. 

**Inductive Hypothesis:** The inequality holds for $n=k$.
**Inductive Step:** $n=k+1$
Let $G$ have $k+1$ vertices. Remove some vertex $v$, calling the remaining graph $H$. Because $H$ has $k$ vertices, we know that $\chi(H)+\chi(\bar{H})\leq k+1$ by our inductive hypothesis. 

*Case 1:* $d_{G}(v)<\chi(H)$
If $d_{G}(v)<\chi(H)$, then we can just give $v$ a new color in $G$ and insert it back. Then, $\chi(G)=\chi(H)$ and $\chi(\bar{G})=\chi(\bar{H})+1$, so $\chi(G)+\chi(\bar{G})\leq k+2$.

*Case 2:* $d_{G}(v)\geq \chi(H)$
If $d_{G}(v)\geq \chi(H)$, then we can just give $v$ a new color in $\bar{G}$ and insert it back. Then,  $\chi(\bar{G})=\chi(\bar{H})$ and $\chi(G)=\chi(H)+1$ so $\chi(G)+\chi(\bar{G})\leq k+2$.

In both exhaustive cases, the inductive step is fulfilled. Therefore, the inequality holds for all $n$.
## 6.
Let $S$ be a minimal subtree of $T_{1}$ where $S\cap T_{j}\neq \emptyset,\forall j\in \{ 1,2,\dots k \}$. If $S$ contains only one vertex, then it is a vertex contained in all subtrees of $T$.

Otherwise, assume $S$ has at least two distinct vertices $x$ and $y$. Because of the properties of $S$, we know that there exists at least some $i$ and $j$ such that $S\cap T_{i}=\{ x \}$ and $S\cap T_{j}=\{ y \}$.

By the problem, $T_{i}\cup T_{j}$ have a common vertex and are therefore connected. If the path between $x$ and $y$ is different between $T_{i}\cup T_{j}$ and $S$, a cycle is formed within $T$, causing a contradiction. If the path is the same between these two trees, then $S$ isn't the minimal subtree of $T_{1}$ such that its condition is fulfilled.

By this contradiction, we can see that $S$ must contain only a single vertex.