## What is it?
- A version of [[Depth First Search]]
- Expands the maximum possible depth to search over time
	- This gets the memory efficiency of [[Breadth First Search]]

## General Process
1) Set max depth to 1
2) Do a depth first search with max depth
3) If solution found, end
4) If solution not found, increment max depth and restart from 2
