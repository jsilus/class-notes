Worked with Matthew Lehr
## 7.
Let us call this infinite graph $G_{1}$. Let $x_{1}\in G_{1}$ be an arbitrarily picked vertex. There are infinitely many red edges incident to it or infinitely many green edges incident to it. Let us call this color $c_{1}$.

Let $G_{2}$ be the graph formed by picking any vertices  $x\in G_{1}$ such that the edge $\{x_{1},x\}$ is $c_{1}$. Pick an element $x_{2}\in G_{2}$. Once again, there are infinitely many red edges incident to $x_{2}$ or infinitely many green edges incident to it. This color is $c_{2}$.

Repeat this process to obtain three infinite sequences: $G_{1},G_{2},\dots$, $x_{1},x_{2},\dots$, and $c_{1},c_{2},\dots$.

Note that all of the vertices of $G_{i}$ are contained within $G_{j}$ if $i>j$. Further, note that because of this, the edge $\{x_{i},x_{j}\}$ will be color $c_{j}$ if $i>j$.

Finally, out of all of the colors $c_{1},c_{2},\dots$, infinitely many must be the same. We can call this color $c$. Pick all of the $x_{i}$ such that $c_{i}=c$. These vertices and all of the edges between them form the infinite complete graph $K$ where all of the edges are the same color.