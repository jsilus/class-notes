
[[Single Source Shortest Path]] algorithm
```pseudo
\begin{algorithm}
\caption{Bellman-Ford}
\begin{algorithmic}
\Function{BELLMAN-FORD}{$G,w,s$}
\State \Call{INITIALIZE-SINGLE-SOURCE}{$G,s$}
\For{$i=1$ \To $|V|-1$}
	\For{each edge $(u,v)\in G.E$}
		\State \Call{RELAX}{$u,v,w$}
	\EndFor
\EndFor
\For{each edge $(u,v)\in G.E$}
	\If{$v.d>u.d+w(u,v)$}
		\Return FALSE
	\EndIf
\EndFor
\Return TRUE
\EndFunction
\end{algorithmic}
\end{algorithm}
```
