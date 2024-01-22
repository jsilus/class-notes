Smaller things in left subtrees
Larger things in right subtrees
## Walk Orders
| Pre Order | In Order | Post Order |
| --------- | -------- | ---------- |
| Root      | Left     | Left       |
| Left      | Root     | Right      |
| Right     | Right    | Root       |
### In Order Tree Walk
```pseudo
\begin{algorithm}
\caption{In Order Tree Walk}
\begin{algorithmic} 
\Function{IN-ORDER-WALK}{$x$}
	\If{$x\ne$NIL}
		\State\Call{IN-ORDER-WALK}{$x.left$}
		\State print $x.key$
		\State\Call{IN-ORDER-WALK}{$x.right$}
	\EndIf
\EndFunction
\end{algorithmic}
\end{algorithm}
```


**Timing:** $\Theta(n)$

## Search
```pseudo
\begin{algorithm}
\caption{Search in a binary search tree}
\begin{algorithmic}
\Function{TREE-SEARCH}{$x,k$}
	\If{$x==$NIL or $k==x.key$}
		\Return $x$
	\Elif{$k<x.key$}
		\Return \Call{TREE-SEARCH}{$x.left, k$}
	\EndIf
	\Return \Call{TREE-SEARCH}{$x.right, k$}
\EndFunction
\end{algorithmic}
\end{algorithm}
```


# Red-Black Tree
Each node gets a color
Guarantee that the $h=\Theta(\lg n)$
