Worked with Matthew Lehr
## 4.
First, we show that $R(3,4)\leq9$. Note that by the theorem
$$
R(s,t)\leq R(s-1,t)+R(s,t-1)-1
$$
we can say $R(3,4)\leq R(2,4)+R(3,3)-1=4+6-1=9$

Next, let us show that $R(3,4)>8$. Take the 8 vertex complete graph and number the vertices $v_{1},v_{2},\dots,v_{8}$. Color the edges $\{v_{1},v_{2}\},\{ v_{2},v_{3} \},\dots,\{ v_{8},v_{1} \}$ green, as well as the four edges $\{ v_{1},v_{5} \},\{ v_{2},v_{6} \},\{ v_{3},v_{7} \},$ and $\{ v_{4},v_{8} \}$. Color all other edges red. When colored this way, there is no possible way to color a $K_{3}$ with green edges or $K_{4}$ with red edges. This counterexample shows that $R(3,4)>8$.

Combining both parts, $R(3,4)=9$.
## 6.
Assume that there does not exist an infinite line $A$ made up of points of $S$.
We can build a set $A$ that has no three collinear points vertex by vertex. Start with two arbitrary vertices in $A$. These form a line. Now, repeat the following:
1) Pick any vertex not in $A$
2) If the vertex is collinear with two other vertices in $A$, remove it. Add it otherwise.
3) Repeat until $A$ is infinite.

Suppose you are unable to find an infinite number of points such that you can repeat with this process. Then, by the Pigeonhole Principle, there must be an infinite number of points contained within a single line. This contradicts our assumption that $S$ doesn't have an infinite line. We can call this line $A$ instead.

Therefore, we must be able to form an $A\subset S$ that is a line or doesn't contain three collinear points.
## 7.
Let us call this infinite graph $G_{1}$. Let $x_{1}\in G_{1}$ be an arbitrarily picked vertex. There are infinitely many red edges incident to it or infinitely many green edges incident to it. Let us call this color $c_{1}$.

Let $G_{2}$ be the graph formed by picking any vertices  $x\in G_{1}$ such that the edge $\{x_{1},x\}$ is $c_{1}$. Pick an element $x_{2}\in G_{2}$. Once again, there are infinitely many red edges incident to $x_{2}$ or infinitely many green edges incident to it. This color is $c_{2}$.

Repeat this process to obtain three infinite sequences: $G_{1},G_{2},\dots$, $x_{1},x_{2},\dots$, and $c_{1},c_{2},\dots$.

Note that all of the vertices of $G_{i}$ are contained within $G_{j}$ if $i>j$. Further, note that because of this, the edge $\{x_{i},x_{j}\}$ will be color $c_{j}$ if $i>j$.

Finally, out of all of the colors $c_{1},c_{2},\dots$, infinitely many must be the same. We can call this color $c$. Pick all of the $x_{i}$ such that $c_{i}=c$. These vertices and all of the edges between them form the infinite complete graph $K$ where all of the edges are the same color.