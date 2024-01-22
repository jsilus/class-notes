Binary trees

>[!tip] Max Heap Property
>$\text{parent node}\ge\text{child nodes}$

>[!tip] Min Heap Property
>$\text{parent node}\le\text{child nodes}$


In an array representation, nodes can be represented with the indices of
$$
\begin{align*}
\forall\text{node}&:i\\
\text{parent}&: \frac{i}{2}\\
\text{L child}&:2i\\
\text{R child}&:2i+1
\end{align*}
$$
This gives the advantage of representing binary trees as arrays rather than defining a new object.

## How can we fix a broken heap?
If the subtrees below the node that violates the max heap property are max heaps, then
- swap the lower parent node with the larger of the two children.
- Repeat until the heap is good

```pseudo
\begin{algorithm}
\caption{Fix a broken heap}
\begin{algorithmic}
\Function{MAX-HEAPIFY}{$A,i$}
	\State $l=2\times i$
	\State $r=2\times i+1$
	\If{$l\le A.heapsize$ and $A[l]>A[i]$}
		\State $largest = i$
	\Else
		\State $largest = i$
	\EndIf
	\If{$r\le A.heapsize$ and $A[r]>A[largest]$}
		\State $largest=r$
	\EndIf
	\If{$largest \ne i$}
		\State exchange $A[i]$ with $A[largest]$
		\State\Call{MAX-HEAPIFY}{$A,largest$}
	\EndIf
\EndFunction
\end{algorithmic}
\end{algorithm}
```

## How can we build a max heap from an entirely unsorted array?

```pseudo
\begin{algorithm}
\caption{Create a max heap}
\begin{algorithmic}
\Function{BUILD-MAX-HEAP}{$A,n$}
	\State $A.heapsize = n$
	\For{$i=\lfloor \frac{n}{2}\rfloor$ \Downto $1$}
		\State\Call{MAX-HEAPIFY}{$A,i$}
	\EndFor
\EndFunction
\end{algorithmic}
\end{algorithm}
```

### Timing
For each node, the cost of MAX-HEAPIFY is $O(h)$ where $h$ is the height of the node. We need to add up the costs across all of the nodes.

1. What is height of heap? $\lfloor\lg n\rfloor$
2. How many nodes of height $h$? $\left\lceil\frac{n}{2^{h+1}}\right\rceil$

Then, the timing of BUILD-MAX-HEAP can be found through the summation
$$
\sum\limits_{h=0}^{\lfloor\lg n\rfloor}ch\left\lceil\frac{n}{2^{h+1}}\right\rceil\le\sum\limits_{h=0}^{\lfloor\lg n\rfloor}cn\frac{1}{2^{h}}h= cn\sum\limits_{h=0}^{\lfloor\lg n\rfloor}\frac{h}{2^{h}}\lt cn\sum\limits_{h=0}^{\infty} \frac{h}{2^{h}}\le cn \frac{\frac{1}{2}}{(1- \frac{1}{2})^{2}}=O(n)
$$

## Create a Sorted Array
Use [[Heap Sort]] to turn a heap into a sorted array