## Problem 6
For graphs, we now the handshake theorem of $\sum\limits_{i=1}^{n}d_{i}=2|E|$.

**First Direction**
For trees, we know that $|E|=n-1$.
If $d_{1},\dots,d_{n}$ is a degree sequence of a tree, then by the handshake theorem, $d_{1}+\cdots+d_{n}=2|E|=2(n-1)$.

**Second Direction**
We proceed by induction.

**Base Case:**
If $n=2$, then $d_{1}+d_{2}=2(2-1)=2$. Because $d_{1}$ and $d_{2}$ are positive, they must be $d_{1}=1$ and $d_{2}=1$. This is a tree.

**Inductive Step:**
If $d_{1}+\cdots+d_{k}=2(k-1)$ means that $d_{1},\dots,d_{k}$ is a degree sequence of a tree, then $d_{1},\dots,d_{k}$ can form a tree. If they can form a tree, then that means that this tree is connected and acyclic.

Lets add a new vertex, $d_{k+1}$. In order to still be a tree, we want $d_{k+1}$ to be a leaf by connecting it with a single edge to the rest of the tree.


