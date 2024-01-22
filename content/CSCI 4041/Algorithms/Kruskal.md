
```pseudo
\begin{algorithm}
\caption{Kruskal's Algorithm}
\begin{algorithmic}
\Function{MST-KRUGAL}{$G,w$}
	\State $A=\emptyset$
	\For{each vertex $v\in G.V$}
		\State \Call{MAKE-SET}{$v$}
	\EndFor
	\State create a single list of edges in $G.E$
	\State sort the list of edges into monotonically decreasing order by weight $w$
	\For{each edge $(u,v)$ taken from the sorted list in order}
		\If{\Call{FIND-SET}{$u$}$\ne$\Call{FIND-SET}{$v$}}
			\State $A=A\cup\{(u,v)\}$
			\State \Call{UNION}{$u,v$}
		\EndIf
	\EndFor
\Return $A$
\EndFunction
\end{algorithmic}
\end{algorithm}
```

