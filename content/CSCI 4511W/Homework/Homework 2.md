## 1.
#### 1.
$g$ records the traveled distance from the start to the current node.
$h$ records the estimated distance from the current node to the destination.
#### 2.
As $w\leadsto1$, the algorithm becomes closer to Dijkstra's, prioritizing the shortest path greedily. As $w\leadsto0$, the algorithm becomes entirely dependent on estimation of distance, making it struggle more in unknown environments.
#### 3.
A heuristic is admissible if it never overestimates the distance in function $h$. This is guaranteed to happen if $w=1$ so the heuristic is ignored. Otherwise, high values for $w$ will generally be admissible as long as $h(x)$ isn't too large at any vertex.
## 2.
#### 1.
The algorithm won't necessarily find the optimal solution. With imperfect information, we could remove a high cost node from the search queue that could contain an exceptionally low cost edge later on which leads to the optimal solution. A higher value of $N$ will make this less likely, however.
#### 2.
Yes. If the heuristic is perfect, we could have $N=1$ and greedily move towards the end. This would be optimal because the cost to the path is exact.
## 3.
#### 1.
You need to keep both frontiers so that the intersection between these frontiers at any point along them can be found as a solution.
#### 2.
If a solution is possible, it can be significantly faster to search from both sides because the radii of the frontiers will be smaller than it would need to be to make it entirely across. If a solution is not possible, it could take longer. Additionally, it takes a lot more memory to have so many frontier nodes in memory.
#### 3.
If we know the graph is connected and not directional, bidirectional search could be useful. Either condition could cause the search to fail, making it take a lot of extra time and memory.
## 4.
No. This means that no other algorithm is guaranteed to expand fewer nodes than A* in their worst case versions. Algorithms could still beat it in the best case.
## 5.
#### 1.
The fitness function is used to rank potential solutions for a genetic algorithm based on some condition. This is used to pick the best ones.
#### 2.
Every genetic algorithm needs some form of fitness function in order to rank the individuals of the population. This can be very rudimentary and not exist in an effective way, but there needs to be some way to convert the individuals to a score.
#### 3.
Varying the crossover point can increase the diversity within the population. This increases the complexity of the genetic algorithm, but it can make the program more robust to different starting conditions.