
## Solving Computational Problems
### 1. Use an algorithm, data structure, etc. to solve problem
- Common algorithms
	- Sorting
		- [[Insertion Sort]]
		- [[Merge Sort]]
		- [[Quick Sort]]
		- [[Radix Sort]]
		- [[Counting Sort]]
	- [[Selection Sort]]
		- Find a k$^{th}$ order statistic in linear time
	- [[Graph Algorithms]]
		- Search
			- [[Depth First Search|DFS]]
			- [[Breadth First Search|BFS]]
		- Minimum Spanning Trees
			- [[Kruskal]]
			- [[Prim]]
		- Shortest Path
			- [[Single Source Shortest Path]]
				- [[Bellman Ford|Bellman-Ford]]
				- [[Dijkstra's Algorithm|Dijkstra]]
			- All Pairs
				- [[All Pairs Shortest Path|APSP]]
				- [[All Pairs Shortest Path|Faster APSP]]
				- [[Floyd-Warshall]]
- Common Data Structures
	- [[Heaps]]
		- [[Priority Queue]]
		- Understand:
			- Build
			- Insert elements
			- Change priority
			- Remove elements
	- [[Binary Search Tree]]
		- Understand:
			- Successors, predecessors
			- Deletion
			- Application
	- [[Disjoint Sets]]
		- Union by rank
		- Path compression
		- [[Kruskal]]
		- Unordered data
	- Graph Representations
		- Adjacency Lists
		- Adjacency Matrices
### 2. Use a common problem solving approach
- [[CSCI 4041/Lectures/Lecture 2|Divide and Conquer]]
	- $T(n)=\text{cost to divide}+\text{cost to solve subproblems}+\text{cost to combine}$
- Greedy Approach
	- Make locally optimal choice
	- Reduce problem to subproblem by removing elements that conflict with the greedy choice
	- Repeat
	- Prove Greedy Choice Property
		- Show $\exists$ some optimal solution containing the greedy choice
	- Prove Optimal Substructure
		- Optimal solution contains optimal solutions to subproblems
- Dynamic Programming
	- Overlapping subproblems
	- SRTBOT
		- Subproblem
		- Recursively relate subproblems
		- Topological order of subproblems
		- Base cases
		- Original problem
		- Time

## Outside of this Class
### 1. Keep an eye on what you allow into your brain space
### 2. Routinely engage in a low stress way
### 3. When you think you've run out of options/ideas, you haven't
