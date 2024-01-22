A [[Graphs|graph]] is connected if you can get from any vertex to any other by [[Graph Walks|walking]] along edges.


**Theorem:** Vertices of a connected graph $G$ can always be enumerated $v_{1},v_{2},\dots,v_{n}$ so that $G\text{.induced}$ $\phi$ vertices $v_{1},v_{2},\dots,v_{i}$ is connected for any $i$.

*Proof:* Pick any $v_{1}$. Assume we already picked $v_{1},v_{2},\dots,v_{i}$ which work. Pick $v_{i+1}$ so it still works. Take $G\setminus\{v_{1},v_{2},\dots,v_{i}\}\ni v$. There is a path in $G$ from $v$ to $v_{1}$. Then, $v$ can be used as $v_{i+1}$.
