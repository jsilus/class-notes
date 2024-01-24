Uses a stack to store nodes.
Explores edges until there are no unexplored edges and then backtracks to find another unexplored edge. Similar to how one would solve a maze.
## Pseudocode
```pseudo
\begin{algorithm}
\caption{Depth First Search}
\begin{algorithmic}
\Function{DFS}{$G$}
\For{each vertex $u\in G.V$}
	\State $u.color=$WHITE
	\State $u.\pi=$NIL
\EndFor
\State $time=0$
\For{each vertex $u\in G.V$}
	\If{$u.color==$WHITE}
		\State\Call{DFS-VISIT}{$G,u$}
	\EndIf
\EndFor
\EndFunction
\end{algorithmic}
\end{algorithm}
```

```pseudo
\begin{algorithm}
\caption{Depth First Search Helper}
\begin{algorithmic}
\Function{DFS-VISIT}{$G,u$}
\State $time=time+1$
\State $u.d=time$
\State $u.color=$GRAY
\For{each vertex $v$ in $G.Adj[u]$}
	\If{$v.color==$WHITE}
		\State $v.\pi=u$
		\State\Call{DFS-VISIT}{$G,v$}
	\EndIf
\EndFor
\State $time=time+1$
\State $u.f=time$
\State $u.color$=BLACK
\EndFunction
\end{algorithmic}
\end{algorithm}
```
