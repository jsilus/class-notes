Worked with Matthew Lehr
## 3.
Generate a uniformly random sequence of 0-s and 1-s $S$ of finite length $k$ where $k$ is the length of the largest sequence in $F$.

Let $E_{i}$ be the event that a subsequence consisting of the first $i$ numbers of $S$ can be found within $F$. Then, the probability $P(E_{i})=\frac{N_{i}}{2^{i}}$ because there are $N_{i}$ possible matches in $F$ and $2^{i}$ possible subsequences that were randomly generated in $S$.

Because no member of $F$ is a beginning of a different member of $F$, we know that the events $E_{i}$ are mutually exclusive. This means that
$$
P\left( \bigcup_{i}E_{i} \right)\leq 1 
$$

Then, our inequality can be rewritten as
$$
\sum\limits_{ i } \frac{N_{i}}{2^{i}}=\sum\limits_{ i }P(E_{i})=P\left( \bigcup_{i}E_{i} \right) \leq 1  
$$
## 6.
Let $C_{i}=A_{i}\cup B_{i}$. $\forall k$ elements in $C_{i}$, there is a $\frac{1}{2}$ chance that it belongs to either $A_{i}$ or $B_{i}$. Take every element in $C_{i}$ and place it uniformly randomly into either $A'_{i}$ or $B'_{i}$.

Let $E_{i}$ be the event such that $A_{i}=A'_{i}$ and $B_{i}=B'_{i}$. Then, 
$$
P(E_{i})=\frac{1}{2^{k}}
$$
Because $(A_{i}\cap B_{j})\cup(A_{j}\cap B_{i})\neq \emptyset$ for $i\neq j$, we know that the events are mutually exclusive. This means that
$$
P\left( \bigcup_{i}E_{i} \right)\leq 1 
$$

With this, we can say that
$$
P\left( \bigcup _{i=1}^{h}E_{i} \right)=\sum\limits_{ i = 1 }^{h} P(E_{i})=\sum\limits_{ i = 1 }^{h} \frac{1}{2^{k}}=\frac{h}{2^{k}}\leq 1
$$
And thus
$$
h\leq 2^{k}
$$
## 7.
Let $C_{i}=A_{i}\cup B_{i}$. $\forall k+l$ elements in $C_{i}$, there is a $\frac{k}{k+l}$ chance that the element belongs to $A_{i}$ and a $\frac{l}{k+l}$ chance that it belongs to $B_{i}$. Once again, take every element in $C_{i}$ and place it randomly with probability $\frac{k}{k+l}$ into $A'_{i}$ or with probability $\frac{l}{k+l}$ into $B'_{i}$.

Let $E_{i}$ be the event such that $A_{i}=A'_{i}$ and $B_{i}=B'_{i}$. Then, 
$$
P(E_{i})=\left( \frac{k}{k+l} \right)^{k}\left( \frac{l}{k+l} \right)^{l}
$$

Because $(A_{i}\cap B_{j})\cup(A_{j}\cap B_{i})\neq \emptyset$ for $i\neq j$, we know that the events are mutually exclusive. This means that
$$
P\left( \bigcup_{i}E_{i} \right)\leq 1 
$$

With this, we can say that 
$$
P\left( \bigcup_{i=1}^{h}E_{i} \right)=\sum\limits_{ i = 1 }^{h} P(E_{i})=\sum\limits_{ i = 1 }^{h} \left( \frac{k}{k+l} \right)^{k}\left( \frac{l}{k+l} \right)^{l}=h\left( \frac{k}{k+l} \right)^{k}\left( \frac{l}{k+l} \right)^{l}\leq 1
$$
And thus
$$
h\leq \frac{(k+l)^{k+l}}{k^{k}l^{l}}
$$