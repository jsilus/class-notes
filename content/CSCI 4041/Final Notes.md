## Algorithms
### Sorting
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
Best Case: $\Theta(n)$ already sorted
Worst Case: $\Theta(n^{2})$ reverse sorted
Average Case: $\Theta(n^{2})$
```pseudo
\begin{algorithm}
\caption{Merge Sort}
\begin{algorithmic}
\Function{MERGE-SORT}{$A,p,r$}
	\If{$p\ge r$}
		\Return
	\EndIf
	\State $q=\left\lfloor(p+r)/2\right\rfloor$
	\State\Call{MERGE-SORT}{$A,p,q$}
	\State\Call{MERGE-SORT}{$A,q+1,r$}
	\State\Call{MERGE}{A,p,q,r}
\EndFunction
\end{algorithmic}
\end{algorithm}
```
All Cases: $\Theta(n\lg n)$

```pseudo
\begin{algorithm}
\caption{Merge Helper}
\begin{algorithmic}
\Function{MERGE}{$A,p,q,r$}
	\State $n_{L}=q-p+1$
	\State $n_{R}=r-q$
	\State let $L[0:n_{L}-1]$ and $R[0:n_{R}-1]$ be new arrays
	\For{$i=0$ \To $n_{L}-1$}
		\State $L[i]=A[p+i]$
	\EndFor
	\For{$j=0$ \To $n_{R}-1$}
		\State $R[j]=A[q+j+1]$
	\EndFor
	\State $i=0$
	\State $j=0$
	\State $k=p$
	\While{$i<n_{L}$ and $j<n_{R}$}
		\If{$L[i]\le R[j]$}
			\State $A[k]=L[i]$
			\State $i=i+1$
		\Else
			\State $A[k]=R[j]$
			\State $j=j+1$
		\EndIf
		\State $k=k+1$
	\EndWhile
	\While{$i<n_{L}$}
		\State $A[k]=L[i]$
		\State $i=i+1$
		\State $k=k+1$
	\EndWhile
	\While{$j<n_{R}$}
		\State $A[k]=R[j]$
		\State $j=j+1$
		\State $k=k+1$
	\EndWhile
\EndFunction
\end{algorithmic}
\end{algorithm}
```

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
Best and Average Cases: $\Theta(n\lg n)$
Worst Case: $\Theta(n^{2})$
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
All Cases: $\Theta(n+d)$
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
All Cases: $\Theta(n+k)$

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
All Cases: $\Theta(n^{2})$
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
Average Case: $\Theta(n)$
Worst Case: $\Theta(n^{2})$
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
All Cases: $\Theta(n)$
### Graph Algorithms
#### Search
```pseudo
\begin{algorithm}
\caption{Depth First Search}
\begin{algorithmic}
\Function{DFS}{$G$}
\For{each vertex $u\in G.V$}
	\State $u.color=$WHITE
	\State $u.\pi=$NIL
\EndFor
\State $time=0$
\For{each vertex $u\in G.V$}
	\If{$u.color==$WHITE}
		\State\Call{DFS-VISIT}{$G,u$}
	\EndIf
\EndFor
\EndFunction
\end{algorithmic}
\end{algorithm}
```
All Cases: $\Theta(V+E)$
```pseudo
\begin{algorithm}
\caption{Depth First Search Helper}
\begin{algorithmic}
\Function{DFS-VISIT}{$G,u$}
\State $time=time+1$
\State $u.d=time$
\State $u.color=$GRAY
\For{each vertex $v$ in $G.Adj[u]$}
	\If{$v.color==$WHITE}
		\State $v.\pi=u$
		\State\Call{DFS-VISIT}{$G,v$}
	\EndIf
\EndFor
\State $time=time+1$
\State $u.f=time$
\State $u.color$=BLACK
\EndFunction
\end{algorithmic}
\end{algorithm}
```

```pseudo
\begin{algorithm}
\caption{Breadth First Search}
\begin{algorithmic}
\Function{BFS}{$G, s$}
\For{each vertex $u\in G.V-\{s\}$}
	\State $u.color=$WHITE
	\State $u.d=\infty$
	\State $u.\pi=$NIL
\EndFor
\State $s.color=$WHITE
\State $s.d=0$
\State $Q=\emptyset$
\State\Call{ENQUEUE}{$Q,s$}
\While{$Q\ne\emptyset$}
	\State $u=$\Call{DEQUEUE}{$Q$}
	\For{each vertex $v$ in $G.Adj[u]$}
		\If{$v.color==$WHITE}
			\State $v.color=$GRAY
			\State $v.d=u.d+1$
			\State $v.\pi=u$
			\State\Call{ENQUEUE}{$Q,v$}
		\EndIf
	\EndFor
	\State $u.color=$BLACK
\EndWhile
\EndFunction
\end{algorithmic}
\end{algorithm}
```
All Cases: $\Theta(V+E)$

#### Minimum Spanning Trees

```pseudo
\begin{algorithm}
\caption{Kruskal's Algorithm}
\begin{algorithmic}
\Function{MST-KRUGAL}{$G,w$}
	\State $A=\emptyset$
	\For{each vertex $v\in G.V$}
		\State \Call{MAKE-SET}{$v$}
	\EndFor
	\State create a single list of edges in $G.E$
	\State sort the list of edges into monotonically decreasing order by weight $w$
	\For{each edge $(u,v)$ taken from the sorted list in order}
		\If{\Call{FIND-SET}{$u$}$\ne$\Call{FIND-SET}{$v$}}
			\State $A=A\cup\{(u,v)\}$
			\State \Call{UNION}{$u,v$}
		\EndIf
	\EndFor
\Return $A$
\EndFunction
\end{algorithmic}
\end{algorithm}
```
Complexity: $O(E\lg E)$

```pseudo
\begin{algorithm}
\caption{Prim's Algorithm}
\begin{algorithmic}
\Function{MST-PRIM}{$G,w,r$}
	\For{each vertex $u\in G.V$}
		\State $u.key=\infty$
		\State $u.\pi=$NIL
	\EndFor
	\State $r.key=0$
	\State $Q=\emptyset$
	\For{each vertex $u\in G.V$}
		\State \Call{INSERT}{$Q,u$}
	\EndFor
	\While{$Q\ne\emptyset$}
		\State $u=$\Call{EXTRACT-MIN}{$Q$}
		\For{each vertex $v$ in $G.Adj[u]$}
			\If{$v\in Q$ and $w(u,v)<v.key$}
				\State $v.\pi=u$
				\State $v.key=w(u,v)$
				\State\Call{DECREASE-KEY}{$Q,v,w(u,v)$}
			\EndIf
		\EndFor
	\EndWhile
\EndFunction
\end{algorithmic}
\end{algorithm}
```
Complexity: $O(E\lg V)$
#### Single Source Shortest Path
```pseudo
\begin{algorithm}
\caption{Relax}
\begin{algorithmic}
\Function{RELAX}{$u,v,w$}
\If{$v.d>u.d+w(u,v)$}
	\State $v.d=u.d+w(u,v)$
	\State $v.\pi=u$
\EndIf
\EndFunction
\end{algorithmic}
\end{algorithm}
```
Complexity: $O(1)$
```pseudo
\begin{algorithm}
\caption{Initialize Single Source}
\begin{algorithmic}
\Function{INITIALIZE-SINGLE-SOURCE}{$G,s$}
\For{each vertex $v\in G.V$}
	\State $v.d=\infty$
	\State $v.\pi=$NIL
\EndFor
\State $s.d=0$
\EndFunction
\end{algorithmic}
\end{algorithm}
```
Complexity: $O(V)$
```pseudo
\begin{algorithm}
\caption{Bellman-Ford}
\begin{algorithmic}
\Function{BELLMAN-FORD}{$G,w,s$}
\State \Call{INITIALIZE-SINGLE-SOURCE}{$G,s$}
\For{$i=1$ \To $|V|-1$}
	\For{each edge $(u,v)\in G.E$}
		\State \Call{RELAX}{$u,v,w$}
	\EndFor
\EndFor
\For{each edge $(u,v)\in G.E$}
	\If{$v.d>u.d+w(u,v)$}
		\Return FALSE
	\EndIf
\EndFor
\Return TRUE
\EndFunction
\end{algorithmic}
\end{algorithm}
```
Complexity: $O(V+E)$
```pseudo
\begin{algorithm}
\caption{Dijkstra's Algorithm}
\begin{algorithmic}
\Function{DIJKSTRA}{$G,w,s$}
\State \Call{INITIALIZE-SINGLE-SOURCE}{$G, s$}
\State $S=\emptyset$
\State $Q=\emptyset$
\For{each vertex $u\in G.V$}
	\State\Call{INSERT}{$Q,u$}
\EndFor
\While{$Q\ne\emptyset$}
	\State $u=$\Call{EXTRACT-MIN}{$Q$}
	\State $S=S\cup\{u\}$
	\For{each vertex $v$ in $G.Adj[u]$}
		\State\Call{RELAX}{$u,v,w$}
		\If{the call of RELAX decreased $v.d$}
			\State\Call{DECREASE-KEY}{$Q,v,v.d$}
		\EndIf
	\EndFor
\EndWhile
\EndFunction
\end{algorithmic}
\end{algorithm}
```
Complexity: $O(V+E)$
```pseudo
\begin{algorithm}
\caption{Extend Shortest Paths}
\begin{algorithmic}
\Function{EXTEND-SHORTEST-PATHS}{$L^{(r-1)},W,L^{(r)},n$}
\For{$i=1$ \To $n$}
	\For{$j=1$ \To $n$}
		\For{$k=1$ \To $n$}
			\State $l^{(r)}_{i,j}=\min\{l_{i,j}^{(r)},l_{i,k}^{(r-1)}+w_{k,j}\}$
		\EndFor
	\EndFor
\EndFor
\EndFunction
\end{algorithmic}
\end{algorithm}
```
Complexity: $O(V^{3})$
```pseudo
\begin{algorithm}
\caption{Slow All Pairs Shortest Path}
\begin{algorithmic}
\Function{SLOW-APSP}{$W,L^{(0)},n$}
\State let $L=(l_{i,j})$ and $M=(m_{i,j})$ be new $n\times n$ matrices
\State $L=L^{(0)}$
\For{$r=1$ \To $n-1$}
	\State $M=\infty$
	\State \Call{EXTEND-SHORTEST-PATHS}{$L,W,M,n$}
	\State $L=M$
\EndFor
\Return $L$
\EndFunction
\end{algorithmic}
\end{algorithm}
```
Complexity: $O(V^{4})$
```pseudo
\begin{algorithm}
\caption{Faster All Pairs Shortest Path}
\begin{algorithmic}
\Function{FASTER-APSP}{$W,n$}
\State let $L$ and $M$ be new $n\times n$ matrices
\State $L=W$
\State $r=1$
\While{$r<n-1$}
	\State $M=\infty$
	\State \Call{EXTEND-SHORTEST-PATHS}{$L,L,M,n$}
	\State $r=2r$
	\State $L=M$
\EndWhile
\Return $L$
\EndFunction
\end{algorithmic}
\end{algorithm}
```
Complexity: $O(V^{3}\lg V)$
```pseudo
\begin{algorithm}
\caption{Floyd-Warshall}
\begin{algorithmic}
\Function{FLOYD-WARSHALL}{W, n}
	\State $D^{(0)}=W$
	\For{$k=1$ \To $n$}
		\State let $D^{(k)}$ be a new $n\times n$ matrix
		\For{$i=1$ \To $n$}
			\For{$j=1$ \To $n$}
				\State $d^{(k)}_{i,j}=\min\{d^{(k-1)}_{i,j},d^{(k-1)}_{i,k}+d^{(k-1)}_{k,j}\}$
			\EndFor
		\EndFor
	\EndFor
\Return $D^{(n)}$
\EndFunction
\end{algorithmic}
\end{algorithm}
```
Complexity: $O(V^{3})$
## Data Structures
### Heaps

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
Complexity: $O(h)$
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
Complexity: $O(h\times n)$

#### Priority Queue
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
### Binary Search Trees
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
### Disjoint Sets
```pseudo
\begin{algorithm}
\caption{Functions for disjoint sets}
\begin{algorithmic}
\Function{MAKE-SET}{$x$}
	\State $x.p=x$
	\State $x.rank = 0$
\EndFunction

\Function{UNION}{$x,y$}
	\State\Call{LINK}{\Call{FIND-SET}{$x$},\Call{FIND-SET}{$y$}}
\EndFunction

\Function{LINK}{$x,y$}
	\If{$x.rank>y.rank$}
		\State $y.p=x$
	\Else
		\State $x.p=y$
		\If{$x.rank==y.rank$}
			\State $y.rank=y.rank+1$
		\EndIf
	\EndIf
\EndFunction

\Function{FIND-SET}{$x$}
	\If{$x \ne x.p$}
		\State $x.p=$\Call{FIND-SET}{$x.p$}
	\EndIf
	\Return $x.p$
\EndFunction
\end{algorithmic}
\end{algorithm}
```

Union by rank is when you make the root of the tree with a lower rank point to the root of the tree with a higher rank. The rank is an upper bound limit on the height of the node
Path compression is used in find set to make each node point to the root
## Other
- Greedy Approach
	- Make locally optimal choice
	- Reduce problem to subproblem by removing elements that conflict with the greedy choice
	- Repeat
	- Prove Greedy Choice Property
		- Show $\exists$ some optimal solution containing the greedy choice
	- Prove Optimal Substructure
		- Optimal solution contains optimal solutions to subproblems
- Dynamic Programming
	- Overlapping subproblems
	- SRTBOT
		- Subproblem
		- Recursively relate subproblems
		- Topological order of subproblems
		- Base cases
		- Original problem
		- Time