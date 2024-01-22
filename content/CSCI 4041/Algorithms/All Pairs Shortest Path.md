
```pseudo
\begin{algorithm}
\caption{Extend Shortest Paths}
\begin{algorithmic}
\Function{EXTEND-SHORTEST-PATHS}{$L^{(r-1)},W,L^{(r)},n$}
\For{$i=1$ \To $n$}
	\For{$j=1$ \To $n$}
		\For{$k=1$ \To $n$}
			\State $l^{(r)}_{i,j}=\min\{l_{i,j}^{(r)},l_{i,k}^{(r-1)}+w_{k,j}\}$
		\EndFor
	\EndFor
\EndFor
\EndFunction
\end{algorithmic}
\end{algorithm}
```

```pseudo
\begin{algorithm}
\caption{Slow All Pairs Shortest Path}
\begin{algorithmic}
\Function{SLOW-APSP}{$W,L^{(0)},n$}
\State let $L=(l_{i,j})$ and $M=(m_{i,j})$ be new $n\times n$ matrices
\State $L=L^{(0)}$
\For{$r=1$ \To $n-1$}
	\State $M=\infty$
	\State \Call{EXTEND-SHORTEST-PATHS}{$L,W,M,n$}
	\State $L=M$
\EndFor
\Return $L$
\EndFunction
\end{algorithmic}
\end{algorithm}
```
### Timing: $O(n^4)$ 

```pseudo
\begin{algorithm}
\caption{Faster All Pairs Shortest Path}
\begin{algorithmic}
\Function{FASTER-APSP}{$W,n$}
\State let $L$ and $M$ be new $n\times n$ matrices
\State $L=W$
\State $r=1$
\While{$r<n-1$}
	\State $M=\infty$
	\State \Call{EXTEND-SHORTEST-PATHS}{$L,L,M,n$}
	\State $r=2r$
	\State $L=M$
\EndWhile
\Return $L$
\EndFunction
\end{algorithmic}
\end{algorithm}
```
### Timing: $O(n^{3}\lg n)$

For an $O(n^{3})$ version, see [[Floyd-Warshall]]