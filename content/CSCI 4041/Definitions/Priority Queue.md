A queue organized by keys rather than the value of elements

May be helpful to use a [[Heaps|max heap]].

```python
EXTRACT-MAX(A)
	max = A[1]
	A[1] = A[A.heapsize]
	A.heapsize = A.heapsize - 1
	MAX-HEAPIFY(A, 1)
	return max
```

```python
INCREASE-KEY(A, x, k)
	x.key = k
	while i > 1 and A[parent(i)].key < A[i].key
		swap A[i] and A[parent(i)]
		i = parent(i)
```

```python
INSERT-KEY(A, x, k)
	A.heapsize = A.heapsize + 1
	A[A.heapsize] = x
	A[A.heapsize].key = -infinity
	INCREASE-KEY(A, A[A.heapsize], k)
```

```pseudo
\begin{algorithm}
\caption{Priority Queue Algorithms}
\begin{algorithmic}
\Function{EXTRACT-MAX}{$A$}
	\State $max=A[1]$
	\State $A[1]=A[A.heapsize]$
	\State $A.heapsize=A.heapsize-1$
	\State\Call{MAX-HEAPIFY}{$A,1$}
	\Return $max$
\EndFunction

\Function{INCREASE-KEY}{$A,x,k$}
\State $x.key=k$
\While{$i>1$ and $A[parent(i)].key<A[i].key$}
	\State exchange $A[i]$ and $A[parent(i)]$
	\State $i=$\Call{PARENT}{$i$}
\EndWhile
\EndFunction

\Function{INSERT-KEY}{$A,x,k$}
	\State $A.heapsize=A.heapsize+1$
	\State $A[A.heapsize]=x$
	\State $A[A.heapsize].key=-\infty$
	\State\Call{INCREASE-KEY}{$A,A[A.heapsize],k$}
\EndFunction
\end{algorithmic}
\end{algorithm}
```
