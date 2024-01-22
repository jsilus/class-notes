[[Stable Sorts]]

```pseudo
\begin{algorithm}
\caption{Radix Sort}
\begin{algorithmic}
\Function{RADIX-SORT}{$A,d$}
	\For{$i=1$ \To $d$}
		\State use a stable sort to sort $A$ on digit $d$
	\EndFor
\EndFunction
\end{algorithmic}
\end{algorithm}
```