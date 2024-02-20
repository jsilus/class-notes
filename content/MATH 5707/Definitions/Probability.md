
Let $F=\{ (A_{i},B_{i}) \}_{i=1}^{h}$ be a family of pairs of subsets of some set. Call $F$ a $(k-l)$-system if
1) $\lvert A_{i} \rvert=k,\lvert B_{i} \rvert=l,\forall i$
2) $A_{i}\cap B_{i}=\emptyset,\forall i$
3) $A_{i}\cap B_{j}\neq0,\forall i,j$

**Theorem:** If $F=\{ (A_{i},B_{i}) \}_{i=1}^{h}$ is a $(k,l)$-system, then
$$
h\leq {k+l\choose k}
$$
*Proof:* Take $X=\bigcup\limits_{i}A_{i}\cup B_{i}$. Consider random ordering $\pi$ of $x$. Let $X_{i}$ be the event that all elements of $A_{i}$ precede all elements of $B_{i}$.

Family $F$ of sets is intersecting if for $A,B\in F$, $A\neq B$ we have $A\cap B\neq \emptyset$. Suppose $n\geq2k$ and let $F$ be an intersecting family of $k$-subsets of an $n$-set.

**Theorem:** $|F|\leq{n-1\choose k-1}$