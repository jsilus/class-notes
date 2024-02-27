Family $F$ of sets is **intersecting** if for any $A,B\in F$ we have $A\cap B\neq \emptyset$. Suppose $n\geq2k$ and $F$-intersecting family of subsets of an $n$-set.

**Theorem:** $\left| F \right|\leq{n-1\choose k-1}$

**Lemma:** $\left| F \right|$ contains at most $k$ sets $A_{s}$.
*Proof:* fix source $A_{s}\in F$. Sets $A_{t}$ that intersect $A_{s}$ come in pairs $\{ A_{s-i},A_{s+k-i} \}$
In each such pair $A_{s-i}\cap A_{s+k-i}\neq0$.

Pick permutation $\sigma$ of $\{ 0,\dots,n-1 \}$ randomly, uniformly. Pick $i\in \{ 0,\dots,n-1 \}$ randomly and uniformly. Let $A=\{ \sigma(i),\dots,\sigma(i+k-1) \}$.
For a given $\sigma$, this lemma tells us that $P_{r}\left[ A\in F \right]\leq \frac{k}{n}$. Then, $P_{r}\left[ A\in F \right]=\frac{\left| F \right|}{n\choose k}$, so $\left| F \right|\leq \frac{k}{n}{n\choose k}={n-1\choose k-1}$
