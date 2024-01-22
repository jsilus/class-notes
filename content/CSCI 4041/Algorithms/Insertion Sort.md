
```pseudo
\begin{algorithm}
\caption{Insertion Sort}
\begin{algorithmic}
\Function{INSERTION-SORT}{$A,n$}
\For{$i=2$ \To $n$}
	\State $key=A[i]$
	\State $j=i-1$
	\While{$j>0$ and $A[j]>key$}
		\State $A[j+1]=A[j]$
		\State $j=j-1$
	\EndWhile
	\State $A[j+1]=key$
\EndFor
\EndFunction
\end{algorithmic}
\end{algorithm}
```
## Verification
Using [[Loop Invariant]]
### Goal
At the start of each iteration of the for loop $A[1:i - 1]$ is sorted.
Need to show this holds $\forall i \in [2,n+1]$.
### Base Case
At the start of the first iteration, $i=2$ and $A[1,1]$ contains just one element, $A[1]$, so it is sorted.
### Inductive Step
Assume condition holds when $i=k\ge2$.
Prove that after the $k$th iteration, $A[1:k]$ is sorted.
### Termination
When $i=n+1$, the loop terminates.
The loop invariant confirms that $A[1:n]$ is sorted.

## Timing
### Best case: Already sorted
$T(n)=c_1n+c_2(n-1)+c_3(n-1)+c_4(n-1)+c_7(n-1)$.
This simplifies to $\Theta(n)$, or linear time.
### Worst case: Reverse sorted
$t_i=i$, so $\sum_{i=2}^nt_i=-1+\sum_{i=1}^ni=\frac{n^2}2+\frac n2-1$
When fully calculated out, this timing simplifies to $\Theta(n^2)$.

### Average case
$t_i=\frac i2$, so when fully calculated out this timing is still $\Theta(n^2)$