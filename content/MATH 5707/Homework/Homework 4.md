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
