A type of [[All Pairs Shortest Path]]
```pseudo
\begin{algorithm}
\caption{Floyd-Warshall}
\begin{algorithmic}
\Function{FLOYD-WARSHALL}{W, n}
	\State $D^{(0)}=W$
	\For{$k=1$ \To $n$}
		\State let $D^{(k)}$ be a new $n\times n$ matrix
		\For{$i=1$ \To $n$}
			\For{$j=1$ \To $n$}
				\State $d^{(k)}_{i,j}=\min\{d^{(k-1)}_{i,j},d^{(k-1)}_{i,k}+d^{(k-1)}_{k,j}\}$
			\EndFor
		\EndFor
	\EndFor
\Return $D^{(n)}$
\EndFunction
\end{algorithmic}
\end{algorithm}
```
