## 1.
#### 1.
The book states this because it's possible that the agent could develop it's own strategy that works better than what would have been prioritized. For machine learning, we are consequential. All that matters is that the agent achieves the outcomes that are expected.
#### 2.
The definition of a rational agent is "For each possible percept sequence, a rational agent should select an action that is expected to maximize its performance measure, given the evidence provided by the percept sequence and whatever built-in knowledge the agent has." According to this definition, an agent isn't irrational if information it doesn't know about would have changed its action had it known about it. As long as they are making the best decision given their knowledge, an agent is rational.
#### 3.
The performance measure would be encoded within the agent function. The agent function has the actions a program would take given any input. In this space, we could weight different actions so the function would be different.
## 2.
#### 1.
At each state, we'd need the **state representation** to know the current city as well as the previously visited cities in the order they have been visited.
We can then combine all of these to form a tree as the entire **state space**.
The **initial state** only has a current city with no previous cities.
The **goal states** have all previous cities visited and the current city is the starting city.
The possible **actions** are:
- If there are unvisited cities, visit one of them
- If there are no unvisited cities, visit the starting city
#### 2.
An example of part of the state space is shown below, only expanding the subtree where we start at A.
```mermaid
flowchart
root(( ))
root --> A
	A --> AB
		AB --> ABC
			ABC --> ABCD
				ABCD --> ABCDA
		AB --> ABD
			ABD --> ABDC
				ABDC --> ABDCA
	A --> AC
		AC --> ACB
			ACB --> ACBD
				ACBD --> ACBDA
		AC --> ACD
			ACD --> ACDB
				ACDB --> ACDBA
	A --> AD
		AD --> ADB
			ADB --> ADBC
				ADBC --> ADBCA
		AD --> ADC
			ADC --> ADCB
				ADCB --> ADCBA
root --> B
root --> C
root --> D

subgraph Step 0
A
B
C
D
end

subgraph Step 1
AB
AC
AD
end

subgraph Step 2
ABC
ABD
ACB
ACD
ADB
ADC
end

subgraph Step 3
ABCD
ABDC
ACBD
ACDB
ADBC
ADCB
end

subgraph Step 4
ABCDA
ABDCA
ACBDA
ACDBA
ADBCA
ADCBA
end
```

#### 3.
From the example above (+ missing subtrees):
- In step 0, there are 4 states
- In step 1, there are 12 states
- In step 2, there are 24 states
- In step 3, there are 24 states
- In step 4, there are 24 states

This can be generalized as:
$$
\begin{array}{c|c}
\text{Step \#} & \text{\# of states} \\
\hline
0 & N \\
1 & N(N-1) \\
2 & N(N-1)(N-2) \\
\vdots & \vdots \\
(N-2) & N(N-1)(N-2)\cdots(3)(2) \\
(N-1) & N(N-1)(N-2)\cdots(3)(2)(1) \\
N & N(N-1)(N-2)\cdots(3)(2)(1)
\end{array}
$$

Notice how the patter continues until step $N$, where the number of states in that step is equal to the number of states in step $(N-1)$. Also notice that if there is only one city, we don't need it to travel anywhere. From this, we can generalize a formula.
$$
S=
\begin{cases}
\sum\limits_{i=0}^{N-1}\prod\limits_{j=0}^{i}(N-j)+\prod\limits_{j=0}^{N-1}(N-j) & N\gt1 \\
1 & N=1
\end{cases}
$$

## 3.
#### 1.
If you are trying to limit memory use, you would use Depth First Search or its variants, Depth Limited Search or Iterative Deepening. This is because unlike the other uninformed searches, these don't need to store a frontier of visited nodes. This drastically reduces the number of nodes in memory, as all three have a linear space complexity.
#### 2.
If you have an idea of how many links need to be visited, a Depth Limited Search would be the most ideal. This is because we will get the benefits of Depth First Search without the potential consequence of running down a really long chain. We can put a cap on how far the algorithm will search.
#### 3.
If we want a minimum length solution, we have three options. If all costs are equal, Iterative Deepening would be our best search method for reducing memory use. If they are not equal, we will take a huge memory hit, but Dijkstra's Algorithm or Uniform Cost Search will be the best search method that computes the optimal cost.
## 4.
#### 1.
Yes. The reason we need to keep track of which nodes have been visited is in order to make sure we don't loop around into explored territory. If the graph is acyclic, it will work as normal.
#### 2.
It doesn't take any time to keep track of the nodes that have been explored, so this wouldn't change from the standard time.
#### 3.
Yes. If there are cycles and we are not keeping track of nodes, we could easily get stuck in a loop if the values of the loop are relatively small compared to the rest of the graph.
## 5.
#### 1.
Tree-like searches require less memory because they don't need to keep track of which nodes have been visited.
#### 2.
Not necessarily. It could get stuck in an infinite chain. If this were to happen, it won't terminate regardless of if there is a solution or not.
#### 3.
It still could work correctly, it just might take longer if there are many cycles, as it is likely that we will go down them many times.
## 6
https://colab.research.google.com/drive/1YSg936dO7X90sxVYAmVByhSoItFl-jpC
