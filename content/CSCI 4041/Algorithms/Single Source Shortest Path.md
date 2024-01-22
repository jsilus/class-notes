## Common Functions
```pseudo
\begin{algorithm}
\caption{Relax}
\begin{algorithmic}
\Function{RELAX}{$u,v,w$}
\If{$v.d>u.d+w(u,v)$}
	\State $v.d=u.d+w(u,v)$
	\State $v.\pi=u$
\EndIf
\EndFunction
\end{algorithmic}
\end{algorithm}
```

```pseudo
\begin{algorithm}
\caption{Initialize Single Source}
\begin{algorithmic}
\Function{INITIALIZE-SINGLE-SOURCE}{$G,s$}
\For{each vertex $v\in G.V$}
	\State $v.d=\infty$
	\State $v.\pi=$NIL
\EndFor
\State $s.d=0$
\EndFunction
\end{algorithmic}
\end{algorithm}
```

## Specific Algorithms
- [[Bellman Ford]]
- [[Dijkstra's Algorithm]]
