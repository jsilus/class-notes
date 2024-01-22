Uses [[Heaps]]

```pseudo
\begin{algorithm}
\caption{Heap Sort}
\begin{algorithmic}
\Function{HEAPSORT}{$A,n$}
\State\Call{BUILD-MAX-HEAP}{$A,n$}
\For{$i=n$ \Downto $2$}
	\State exchange $A[1]$ with $A[i]$
	\State $A.heap$-$size=A.heap$-$size-1$
	\State\Call{MAX-HEAPIFY}{$A,1$}
\EndFor
\EndFunction
\end{algorithmic}
\end{algorithm}
```
## Timing
$$
O(n\lg n)
$$

>[!warning]
>Not useful
