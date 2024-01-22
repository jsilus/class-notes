Sets that do not have any overlap

## Representations of Sets
### Linked List
- MAKE-SET: fast
- FIND-SET: fast
- UNION: slow

### Disjoint Set Forest - Trees (not necessarily binary)

```pseudo
\begin{algorithm}
\caption{Find Set}
\begin{algorithmic}
\Function{FIND-SET}{$x$}
	\If{$x \ne x.p$}
		\State $x.p=$\Call{FIND-SET}{$x.p$}
	\EndIf
	\Return $x.p$
\EndFunction
\end{algorithmic}
\end{algorithm}
```

