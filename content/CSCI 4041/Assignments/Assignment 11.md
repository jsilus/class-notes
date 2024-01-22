## 1.  22.1-3
Keep track of how many changes are made in each pass. If no changes are made, terminate. After the $m\text{th}$ pass, the graph should be maximally relaxed, so the $(m+1)\text{th}$ pass will then make no changes and terminate.
## 2.  22.1-7
```
FIND-NEGATIVE-CYCLE(G, w, s)
	ISS (G, s)
	// do Bellman-Ford
	for i = 1 to |V| - 1
		for each edge (u, v) in G.E
			RELAX(u, v, w)
	// find all vertices that have a path containing a negative cycle
	for each edge (u, v) in G.E
		if v.d > u.d + w(u, v)
			mark vertex v
	// find a cycle
	for each vertex v in marked vertices
		do a DFS from source v, keeping the source as WHITE
		if a cycle is found that leads back to the source
			return it
		else
			remove v from the marked vertices and continue
```
## 3.  22.3-6
![[22.3-6.png]]
In the above chart, Dijkstra's algorithm will relax paths from source $u$ in the order of edges $u\leadsto v,v\leadsto w,w\leadsto z,u\leadsto w$, but the shortest path to $z$ is $u\leadsto w\leadsto z$. Because these edges are relaxed out of order, Professor Newman is incorrect about his simpler proof.
## 4.  22.3-11
![[22.3-11.png]]
Consider the above image. Dijkstra's algorithm will incorrectly evaluate this graph because it is a greedy algorithm and isn't aware of the $v\leadsto w$ edge at the start. This is the issue with negative edge weights in graphs used by Dijkstra's algorithm, not just because they are in a graph at all.

On the other hand, graph $G$ contains a source $s$ such that all edges from $s$ have negative weights but no other edges do. In this scenario, all of the edges leading from the source will be processed first and correctly. After this first round of edges are complete, the graph will simply proceed as normal. Because the negative edge weights are all known from the start, the greedy algorithm cannot fail on this point, so $G$ will be evaluated correctly.
## 5.  23.1-7
For each $l_{i,j}\in L$, we need to find the predecessor $k$ such that $l_{i,k}+w(k,j)=l_{i,j}$. We can do this by iterating through every vertex to check if it has the proper edge weight. There are $n^{2}$ total elements $l_{i,j}\in L$ and there are $n$ total vertices to iterate through for each of these in order to find the right predecessor. This means that the total algorithm would take $O(n^3)$.