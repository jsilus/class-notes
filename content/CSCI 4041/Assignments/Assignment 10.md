## 1.  20.2-5
Part of theorem 20.5 specifies that at the end of the breadth-first search, $\forall v\in V$ that is reachable from source $s$, $v.d=\delta(s,v)$. This equation then shows that the $u.d$ for any given $u$ is independent of adjacency list ordering.

The tree computed by this, however, is dependent on the order that the vertices are added into the priority queue. Consider Figure 20.3. If, in step (a), the $\delta=1$ indices were populated in order $u,r,v$, then vertex $t$ would have $u$ as a predecessor rather than $r$ as it is currently. Regardless, they are equivalent paths distance-wise.
## 2.  20.2-7
What we can do is first execute a breadth-first search on the graph made from the vertices of the wrestlers and the edges are the rivalries between them. We then call all of the vertices $v$ where $v.d$ is even the heels, and all others are faces. With this, we can make pairs between vertices and their predecessors. Since each vertex/predecessor combo does have a rivalry, if they were not from opposite groups, this algorithm would fail. Then, we just check over the rivalries to make sure there aren't any other points of failure, such as two vertices with the same $v.d$ being connected. BFS takes $O(n+r)$, and the check afterwards would take $O(r)$ as we are iterating through each rivalry. Thus, this takes $O(n+r)$.
## 3.  20.3-7
Consider the following directed graph. Note that a path does exist from $u$ to $v$ along $u\leadsto x\leadsto v$.
![[20.3-7.png]]
Consider starting from vertex $x$. If $u$ is examined first relative to $v$, $x$ has already been examined so we don't consider it as a descendent of $u$. Instead we go back to $x$ and proceed to $v$ separately. This will give $x.d = 1, u.d = 2, v.d = 3$, so $u.d < v.d$, however $v$ is not a descendent of $u$.
## 4.  20.3-11
I would use a modified depth-first search that, instead of colors to indicate when a vertex has been traversed, would treat each vertex as complete when each path has been traversed while incoming.

Similarly, with a large supply of pennies, a maze could be escaped by leaving a penny at the entrance to each path before it is taken. If a dead end is found, you backtrack until there is an open path without a penny and take that path.
## 5.  21.2-6
This algorithm fails. Consider the following counterexample:
![[21.2-6.png]]
If we take this situation and partition it into two sets of vertices where $V_{1}=\{u,v\}$ and $V_{2}=\{x\}$, we will then not have a minimum spanning tree because our tree will have a total weight of 3. In this case, the minimum spanning tree would include edges $(u,x)$ and $(x,v)$ and have a total weight of 2.