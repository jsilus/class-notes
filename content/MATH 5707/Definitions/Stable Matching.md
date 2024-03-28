A **stable matching** in $G$ is a set $M$ of edges that forms a matching.

**Lemma:** Call a cycle $aAbB\dots zZ$ *preference-oriented* if $A:b>a,b:B>\mathbf{A}..,Z:a>z,a:A>Z$.

**Lemma:** Let $M,M'$ be two stable matchings. Components formed in union $M\cup M'$ are preference-oriented cycles.

**Theorem:** For any set of preferences in a bipartite graph $V_{1}\cup V_{2}$, $\exists U_{1}\subseteq V_{1},U_{2}\subseteq V_{2}$ such that every stable match is a complete match between $U_{1}$ and $U_{2}$.

**Corollary:** $M,M'$ are stable matched. Suppose $aB\in M,aB\notin M'$. Then in $M'$ both $a,B$ have mates. Also in $M'$ one of $a,B$ is more happy, the other less happy.

A stable matching $M$ is $V_{1}$-optimal if for any stable match $M'$ and any $a\in V_{1}$ if $aB\in M'$. Then $aA\in M$ for some $A$ and either $A=B$ or $A:A>B$.

**Theorem:** $\exists V_{1}$-optimal stable matching.

**Theorem:** If there exists an [[Injective|injection]] $X\to Y$ and there exists an injection $Y\to X$, then there exists a bijection between $X$ and $Y$.
## Algorithm
Each boy proposes to his top choice (who did not reject him yet)
Each girl refuses all but her best proposals
Repeat

**Theorem:** For any assignment of preferences, there is a stable matching.
*Proof:* Produced by this algorithm.
## Example
Bipartite graph $G$ with $V_{1}=\{ a,b, \dots \}$ boys and $V_{2}=\{ A,B, \dots \}$ girls. Each boy(girl) has order of preferences for girls(boys).

If $aB$ is an edge not in $M$, then either $aA\in M$ for $a:A>B$ or $bB\in M$ for some $B:b>a$.