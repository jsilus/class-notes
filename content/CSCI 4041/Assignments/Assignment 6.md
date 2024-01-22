## 1.  9.1-1
Compare the elements to each other like a tournament bracket, choosing the smallest of two at each comparison. This will decide the smallest number in a maximum $n-1$ comparisons at worst time, because there will be a total of $1+2+\cdots+\frac{n}{4}+\frac{n}{2}=n-1$  comparisons at the worst case of $n$ being a power of $2$. Then, we can repeat the process with all of the nodes that the now-found minimum was compared to, because it is the only node which could have been found to be smaller than the second smallest number. Because the first process took $\lceil\lg n\rceil$ total levels of comparisons, this new list will take $\lceil\lg n\rceil-1$ comparisons at the worst. Adding this up, it takes a total of $n+\lceil\lg n\rceil-2$ comparisons.
## 2.  9.3-10
```
MEDIAN(X, Y, pX, rX, pY, rY)
	// calculate the midpoints of each list
	qX = floor((pX + rX) / 2)
	qY = floor((pY + rY) / 2)
	medianX = X[qX]
	medianY = Y[qY]

	// base case
	// because there are necessarily two medians, return the pair
	// because X and Y are each already sorted, don't compare internally
	if pX == qX or pY == qY
		return (min(medianX, medianY), max(medianX, medianY))

	// keep recursively calling by half of the area
	if medianX < medianY
		return MEDIAN(X, Y, qX, rX, pY, qY)
	else
		return MEDIAN(X, Y, pX, qX, qY, rY)
```

Because the search area is halving each call, this is $\Theta(\lg n)$ time.
## 3.  19.3-4
You could add a single pointer to the next node where they all form a loop. MAKE-SET would simply make the node point to itself, and UNION would simply break the loop at one place in each set to reform a big loop, not affecting the asymptotic run time. PRINT-SET could then just keep track of the original node, iterate around the circular list of nodes, and then once the original pointer is reached again it stops.
## 4.  12.1-2
Similarly to the max heap property, the min heap property just states that for every node in the tree, the parent is smaller. This can use a sort just like the max heap sort that should take $O(n\lg n)$ time to get the list in sorted order. While we know the relation between the child and parent, we do not know the relation between the two children of any given node, so this takes time to work out. The binary search tree property is similar in that children to the right of the parent node must be larger, but because of this restriction we also know how the children compare to each other.
## 5.  12.2-2
```
TREE-MINIMUM(x)
	if x.left == NIL
		return x
	else
		return TREE-MINIMUM(x.left)
```

```
TREE-MAXIMUM(x)
	if x.right == NIL
		return x
	else
		return TREE-MAXIMUM(x.right)
```
## 6.  12.2-5
The successor and predecessor of a node are based on the order that they come up within an in order tree walk. For this, let's consider our node $x$, its predecessor $l$ and its successor $r$. The successor of $x$ is contained within the right subtree of $x$. Because the left subtree of any node is traversed before itself, if $r$ had a left child, the child would be traversed before $r$ itself. Then, $r$ would not be the successor of $x$.

This same reasoning can be used on the left subtree. Because the right subtree of any node is traversed before itself, if $l$ had a right child, the child would be traversed after $l$ itself. Then, $l$ would not be the predecessor of $x$.