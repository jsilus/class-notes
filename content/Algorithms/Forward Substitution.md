
```pseudo
\begin{algorithm}
\caption{Forward Substitution}
\begin{algorithmic}
\Function{FORWARD-SUBSTITUTION}{$A,n$}
	\State let $x$ be an $n$ element output vector
	\For{$k=1$ \To $n$}
		\State $x_{k}=\frac{b_{k}-\sum\limits_{i=1}^{k-1}a_{ki}x_{i}}{a_{kk}}$
	\EndFor
	\Return $x$
\EndFunction
\end{algorithmic}
\end{algorithm}
```

