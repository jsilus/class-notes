A [[Single Source Shortest Path]] algorithm
## Greedy approach
### Optimal substructure
If $u\leadsto k\leadsto v$ is a shortest path from $u$ to $v$ with intermediate vertex $k$, then $u\leadsto k$ and $k\leadsto v$ are also shortest paths.

Suppose not. Then $\exists$ some shorter path $u\leadsto k$ or $k\leadsto v$. Then, $u\leadsto k\leadsto v$ is not the shortest path. Therefore, by this contradiction, they must be the shortest paths.
### Greedy Choice
Take the lightest "safe" edge
## Algorithm
`S` : vertices we have visited
`Q` : [[Priority Queue]] indicating where we should go next

```pseudo
\begin{algorithm}
\caption{Dijkstra's Algorithm}
\begin{algorithmic}
\Function{DIJKSTRA}{$G,w,s$}
\State \Call{INITIALIZE-SINGLE-SOURCE}{$G, s$}
\State $S=\emptyset$
\State $Q=\emptyset$
\For{each vertex $u\in G.V$}
	\State\Call{INSERT}{$Q,u$}
\EndFor
\While{$Q\ne\emptyset$}
	\State $u=$\Call{EXTRACT-MIN}{$Q$}
	\State $S=S\cup\{u\}$
	\For{each vertex $v$ in $G.Adj[u]$}
		\State\Call{RELAX}{$u,v,w$}
		\If{the call of RELAX decreased $v.d$}
			\State\Call{DECREASE-KEY}{$Q,v,v.d$}
		\EndIf
	\EndFor
\EndWhile
\EndFunction
\end{algorithmic}
\end{algorithm}
```
