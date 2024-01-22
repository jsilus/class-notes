## Pseudocode
```pseudo
\begin{algorithm}
\caption{Breadth First Search}
\begin{algorithmic}
\Function{BFS}{$G, s$}
\For{each vertex $u\in G.V-\{s\}$}
	\State $u.color=$WHITE
	\State $u.d=\infty$
	\State $u.\pi=$NIL
\EndFor
\State $s.color=$WHITE
\State $s.d=0$
\State $Q=\emptyset$
\State\Call{ENQUEUE}{$Q,s$}
\While{$Q\ne\emptyset$}
	\State $u=$\Call{DEQUEUE}{$Q$}
	\For{each vertex $v$ in $G.Adj[u]$}
		\If{$v.color==$WHITE}
			\State $v.color=$GRAY
			\State $v.d=u.d+1$
			\State $v.\pi=u$
			\State\Call{ENQUEUE}{$Q,v$}
		\EndIf
	\EndFor
	\State $u.color=$BLACK
\EndWhile
\EndFunction
\end{algorithmic}
\end{algorithm}
```

Searches in a circumference in waves
Searches expanding from a point