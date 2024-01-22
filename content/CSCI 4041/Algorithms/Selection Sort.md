
```pseudo
\begin{algorithm}
\caption{Selection Sort}
\begin{algorithmic}
\Function{SELECTION-SORT}{$A,n$}
	\For{$i=1$ \To $n-1$}
		\State $smallest=i$
		\For{$j=i+1$ \To $n$}
			\If{$A[j]<A[smallest]$}
				\State $smallest=j$
			\EndIf
		\EndFor
		\State exchange $A[i]$ with $A[smallest]$
	\EndFor
\EndFunction
\end{algorithmic}
\end{algorithm}
```

Designed and verified in [[Assignment 1]]
## Verification
### Using a [[Loop Invariant]]:
At the start of each iteration $i$, $A[1:i]$ is sorted and $\forall x\in A[1:i-1],\forall y\in A[i:],x\le y$.

### Initialization
At $i=1$, $A[1:1]$, the subarray is only one element, so it is sorted. $A[1:0]$ contains no elements, so the second condition is fulfilled.

### Maintenance
**Assume:** $A[1:k]$ is sorted and $\forall x\in A[1:k-1],\forall y\in A[k:],x\le y$.

The inner loop then finds the smallest value in $A[k:]$ to swap with $A[k]$. Because All elements in $A[1:k-1]$ are sorted and smaller than all elements in $A[k:]$, $A[1:k]$ is sorted. Because $A[k]$ is now the smallest value in $A[k:]$, $A[1:k+1]$ is sorted and $\forall x\in A[1:k],\forall y\in A[k+1:],x\le y$

### Termination
According to our **maintenance**, at the end of iteration $n-1$, $A[1:n]$ is entirely sorted. Therefore, we terminate at $n-1$ with a sorted loop.

By this loop invariant, the selection sort algorithm is correct.

# Selection in Linear Time
## Randomized Selection
```pseudo
\begin{algorithm}
\caption{Selection in Expected Linear Time}
\begin{algorithmic}
\Function{RANDOMIZED-SELECT}{$A,p,r,i$}
	\If{$p==r$}
		\Return $A[p]$
	\EndIf
	\State $q=$\Call{RANDOMIZED-PARTITION}{$A,p,r$}
	\State $k=q-p+1$
	\If{$i==k$}
		\Return $A[q]$
	\Elif{$i<k$}
		\State\Call{RANDOMIZED-SELECT}{$A,p,q-1,i$}
	\Else
		\State\Call{RANDOMIZED-SELECT}{$A,q+1,r,i$}
	\EndIf
\EndFunction
\end{algorithmic}
\end{algorithm}
```

### Recurrence
$$
T(n)=T\left(\frac{3n}{4}\right)+\Theta(n)=\Theta(n)
$$

>[!tip] Practice
>Prove this with the [[Master Theorem]]

## Non Randomized Selection

```pseudo
\begin{algorithm}
\caption{Selection in Worst Case Linear Time}
\begin{algorithmic}
\Function{SELECT}{$A,p,r,i$}
	\State// eliminate up to 4 smallest elements
	\While{$(r-p+1)\mod5\ne0$}
		\For{$j=p+1$ \To $r$}
			\If{$A[p]>A[j]$}
				\State exchange $A[p]$ with $A[j]$
			\EndIf
		\EndFor
		\If{$i==1$}
			\Return $A[p]$
		\Endif
		\State $p=p+1$
		\State $i=i-1$
	\EndWhile
	\State// sort groups of 5 elements at a time
	\State $g=(r-p+1)/5$
	\For{$j=p$ \To $p+g-1$}
		\State sort $\langle A[j],A[j+g],A[j+2g],A[j+3g],A[j+4g]\rangle$ in place
	\EndFor
	\State// the median of each group now lies within the center fifth
	\State// find median
	\State $x=$\Call{SELECT}{$A,p+2g,p+3g-1,\lfloor g/2\rfloor$}
	\State// partition around median
	\State $q=$\Call{PARTITION-AROUND}{$A,p,r,x$}
	\State// lines 5-11 of RANDOMIZED-SELECT
	\State $k=q-p+1$
	\If{$i==k$}
		\Return $A[q]$
	\Elif{$i<k$}
		\Return \Call{SELECT}{$A,p,q-1,i$}
	\Else
		\Return \Call{SELECT}{$A,q+1,r,i-k$}
	\EndIf
\EndFunction
\end{algorithmic}
\end{algorithm}
```

## Timing
$$
\begin{align*}
T(n)&= \Theta(n)+T\left(\frac{n}{5}\right)+T\left(\frac{7n}{10}\right)\\
&\le \Theta(n)+ \frac{cn}{5}+ \frac{7cn}{10}\\
&\le \Theta(n) + \frac{9cn}{10}\\
&\le \Theta(n) + cn - \frac{cn}{10}\\
&\le en+cn- \frac{cn}{10}\le dn\\
&\le cn\text{ as long as }c\text{ is chosen to dominate }e\\
&= \Theta(n)
\end{align*}
$$
