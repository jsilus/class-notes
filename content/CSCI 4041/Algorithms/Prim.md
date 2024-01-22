
```pseudo
\begin{algorithm}
\caption{Prim's Algorithm}
\begin{algorithmic}
\Function{MST-PRIM}{$G,w,r$}
	\For{each vertex $u\in G.V$}
		\State $u.key=\infty$
		\State $u.\pi=$NIL
	\EndFor
	\State $r.key=0$
	\State $Q=\emptyset$
	\For{each vertex $u\in G.V$}
		\State \Call{INSERT}{$Q,u$}
	\EndFor
	\While{$Q\ne\emptyset$}
		\State $u=$\Call{EXTRACT-MIN}{$Q$}
		\For{each vertex $v$ in $G.Adj[u]$}
			\If{$v\in Q$ and $w(u,v)<v.key$}
				\State $v.\pi=u$
				\State $v.key=w(u,v)$
				\State\Call{DECREASE-KEY}{$Q,v,w(u,v)$}
			\EndIf
		\EndFor
	\EndWhile
\EndFunction
\end{algorithmic}
\end{algorithm}
```
