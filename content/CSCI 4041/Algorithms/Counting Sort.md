
## Special Conditions
Works with non-negative integer input
min-max spread is not overly large relative to n

## Algorithm
```pseudo
\begin{algorithm}
\caption{Counting Sort}
\begin{algorithmic}
\Function{COUNTING-SORT}{$A,n,k$}
\State let $B[1:n]$ and $C[0:k]$ be new arrays

\State// populate $C$ with number of elements equal to $i$
\For{$i=0$ \To $k$}
	\State $C[i]=0$
\EndFor
\For{$j=1$ \To $n$}
	\State $C[A[j]]=C[A[j]]+1$
\EndFor
\State// make $C$ contain the number of elements $\le i$
\For{$i=1$ \To $k$}
	\State $C[i]=C[i]+C[i-1]$
\EndFor
\State// use the count as an index while copying from $A$ to $B$
\State// decrement the count to allow for duplicates
\For{$j=n$ \Downto $1$}
	\State $B[C[A[j]]]=A[j]$
	\State $C[A[j]]=C[A[j]]-1$
\EndFor
\Return $B$
\EndFunction
\end{algorithmic}
\end{algorithm}
```
## Timing
$$
\begin{align*}
\Theta(n)\text{ if }n&\ge k\\
\Theta(k)\text{ if }k&\ge n
\end{align*}
$$
