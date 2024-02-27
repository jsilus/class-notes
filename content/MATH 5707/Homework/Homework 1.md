## Problem 6
For graphs, we know the handshake theorem of $\sum\limits_{i=1}^{n}d_{i}=2|E|$.
#### First Direction
For trees, we know that $|E|=n-1$.
If $d_{1},\dots,d_{n}$ is a degree sequence of a tree, then by the handshake theorem, $d_{1}+\cdots+d_{n}=2|E|=2(n-1)$.
#### Second Direction
We proceed by induction.

**Base Case:**
If $n=2$, then $d_{1}+d_{2}=2(2-1)=2$. Because $d_{1}$ and $d_{2}$ are positive, they must be $d_{1}=1$ and $d_{2}=1$. This is a tree.

**Inductive Step:**
Let us assume that $d_{1}+\cdots+d_{k}=2(k-1)$ implies that $d_{1},\dots,d_{k}$ for some $k\ge2$ is a degree sequence of a tree. This tree will have at least one leaf because it is acyclic.

Now, let us add a vertex $d_{k+1}$. By our inductive hypothesis, $d_{1}+\cdots+d_{k}+d_{k+1}=2((k+1)-1)=2k$. By the handshake theorem, this means that 1 edge was added by adding $d_{k+1}$.

This edge could still form a tree if $d_{k+1}$ is attached to a leaf on the old tree formed by $d_{1},\dots,d_{k}$. This would mean that $d_{k+1}=1$ and some other vertex will have its degree increased from 1 to 2. Then, $d_{1},\dots,d_{k},d_{k+1}$ forms a tree.

#### Conclusion
Because each side implies the other, a sequence of positive integers $d_{1},\dots,d_{n}$ is a degree sequence of a tree if and only if $d_{1}+\cdots+d_{n}=2(n-1)$.
## Problem 7
We can encode our degree sequence as a Prüfer Code and then count how many different variations exist, as all would form a valid tree. First, we know that the length of the code is $n-2$. Then, we know that each vertex $i$ shows up $d_{i}-1$ times in the sequence. This corresponds to the multinomial coefficient, so the number of trees is:
$$
{{n-2}\choose{d_{1}-1,d_{2}-1,\dots,d_{n}-1}}=\frac{(n-2)!}{(d_{1}-1)!(d_{2}-1)!\cdots(d_{n}-1)!}
$$

We can prove this via induction.
**Base Case:**
If $n=2$, then $d_{1}+d_{2}=2(2-1)=2$. Because $d_{1}$ and $d_{2}$ are positive, they must be $d_{1}=1$ and $d_{2}=1$. This makes our equation:
$$
\frac{(2-2)!}{(1-1)!(1-1)!}=\frac{0!}{0!0!}=1
$$
This makes sense, as the only tree with two vertices is where each is connected to the other.

**Inductive Step:**
Let us assume that the equation holds for $n=k$ for some $k\ge2$. We show that it will hold for $n=k+1$. Then, by our equation the number of trees for $k+1$ integers in the degree sequence should be

$$
\frac{(k-1)!}{(d_{1}-1)!(d_{2}-1)!\cdots(d_{k}-1)!(d_{k+1}-1)!}=
$$
## Problem 8
Let $T'$ be a spanning tree which is not the minimum spanning tree and is calculated by our new algorithm. Let $T$ be the minimum spanning tree calculated by our original greedy algorithm which is most similar to $T'$. Let $S$ be the subtree of our modified algorithm at the first step such that our greedy algorithm picks an edge that isn't connected to $S$.

Then, because $T$ is a tree, there is exactly one edge connecting $S$ and $T\setminus S$ or $S$ and $T'\setminus S$. Let us call these edges $e$ and $e'$, respectively. Note that $e\ne e'$ because this is the first edge picked where the algorithms differ.

Because $T$ is a minimum spanning tree, $e$ is the smallest edge connecting $S$ and $S\setminus T$. But, because $e'$ is connected to $S$, it is smaller than or equal to the length of $e$. If $e.\text{length}\ne e'.\text{length}$, this causes a contradiction because our algorithm wasn't followed in picking either $e$ or $e'$. If $e.\text{length}=e'.\text{length}$, this means that $T'$ is also a minimum spanning tree, which contradicts our assumption that it isn't.