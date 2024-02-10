## 4.
Let $G$ be a counterexample with a minimum number of vertices to be one. Pick a vertex $x\in G$ and let $\{x_{1},x_{2},\dots,x_{l}\}$ be the neighbors of $x$ such that $l\leq d$.

If $l<d$, we can remove $x$ and call the remaining graph $H$. Then, because $G$ has a minimum number of vertices, $H$ is $d\text{-colorable}$. We can then add $x$ back and give it a unique color.

Otherwise,  $l=d$. We can say that $x_{i}$ has color $i$. Let $H_{ij}$ be $H$ with the colors restricted to just $i$ and $j$.

If $x_{i}$ and $x_{j}$ have a path between them in $H_{ij}$, continue to pick different $i$-s and $j$-s until $x_{i}$ and $x_{j}$ have no path between them. We know at least one combination of $i$ and $j$ supports this because there is no subgraph isomorphic to $K_{d+1}$ and $G$ has the minimum number of vertices to be a counterexample. $\color{yellow}prove?$

Then, once an $i$ and $j$ are picked such that no path exists between them in $H_{ij}$, change $x_{i}$ to be the color of $j$, and flip the colors of all other vertices within its connected component.

$x$ can then be added back to the graph and given the color of $i$, making the graph $G$ $d\text{-colorable}$.