
```pseudo
\begin{algorithm}
\caption{Quick Sort}
\begin{algorithmic}
\Function{QUICKSORT}{$A,p,r$}
	\If{$p<r$}
		\State $q=$\Call{PARTITION}{$A,p,r$}
		\State\Call{QUICKSORT}{$A,p,q-1$}
		\State\Call{QUICKSORT}{$A,q+1,r$}
	\EndIf
\EndFunction
\end{algorithmic}
\end{algorithm}
```

```pseudo
\begin{algorithm}
\caption{Quicksort Helper}
\begin{algorithmic}
\Function{PARTITION}{$A,p,r$}
	\State $x=A[r]$
	\State $i=p-1$
	\For{$j=p$ \To $r-1$}
		\If{$A[j]\le x$}
			\State $i=i+1$
			\State exchange $A[i]$ with $A[j]$
		\EndIf
	\EndFor
	\State exchange $A[i+1]$ with $A[r]$
	\Return $i+1$
\EndFunction
\end{algorithmic}
\end{algorithm}
```

### Recurrence
$T(n)=\text{cost to divide}+\text{cost to solve subprocesses}+\text{cost to combine}$

where
$$
\begin{align*}
\text{cost to divide}&= \Theta(n)\\
\text{cost to solve subprocesses}&= T(n_{1})+T(n_{2})\\
\text{cost to combine}&= 0
\end{align*}
$$

```sh
randomized_quicksort(A, p, r)
	x = random number in [p, r]
	swap A[x] with A[r]
	
	q = partition(A, p, r)
	randomized_quicksort(A, p, q - 1)
	randomized_quicksort(A, q + 1, r)
```