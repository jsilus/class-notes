## 1.  12.3-4
If $z$ has no children, the first two calls to TRANSPLANT pass NIL to $v$.
Otherwise, if the tree's successor is not its immediate right child and its successor had no right child, NIL will be passed to $v$.
## 2.  12.3-5
The tree deletion operation is not commutative. Below is an image demonstrating this with a counterexample.
![[12.3-5.png]]
## 3.  12.3-6
```
TREE-SEARCH(x, k)
	if x == NIL or k == x.key
		return x
	if k < x.key
		return TREE-SEARCH(x.left, k)
	return TREE-SEARCH(x.right, k)
```
TREE-SEARCH is unchanged because it doesn't use x.p. This algorithm is already $O(h)$ as it goes down one height with each recursive call.

```python
TREE-PARENT(T, z)
	if z == NIL
		return NIL
	
	x = T.root
	y = NIL
	while x != NIL and z != x
		y = x
		if z.key < x.key
			x = x.left
		else
			x = x.right
	
	if z == x
		return y
```
TREE-PARENT is a modified version of the iterative TREE-SEARCH. It starts at the root and has a trailing variable to keep track of the parent. It modifies TREE-SEARCH with only a few $O(1)$ operations, so this is also $O(h)$.

```python
TREE-PREDECESSOR(T, z)
	if z.left != NIL
		return TREE-MAXIUMUM(z.left)

	x = T.root
	y = NIL
	while x != NIL and x != z
		if z.key < x.key
			x = x.left
		else
			y = x
			x = x.right
	
	if z == x
		return y
	return NIL
```
TREE-PREDECESSOR is another modified version of the iterative TREE-SEARCH. It starts at the root again, only this time the trailing variable only updates while moving down the right subtrees. Because it only adds a few $O(1)$ operations, it is still $O(h)$.

```python
TREE-INSERT(T, z)
	x = T.root
	y = NIL
	while x != NIL
		y = x
		if z.key < x.key
			x = x.left
		else
			x = x.right
	if y == NIL
		T.root = z
		z.succ = NIL
	else if z.key < y.key
		y.left = z
		z.succ = y
		zpre = TREE-PREDECESSOR(T, z)
		if zpre != NIL
			zpre.succ = z
	else
		y.right = z
		z.succ = y.succ
		y.succ = z
```
TREE-INSERT changed the parent assignment to successor assignment, and added a call to the TREE-PREDECESSOR which is $O(h)$. Because the while loop goes through each level of the tree, this algorithm is also $O(h)$.

```python
TRANSPLANT(T, u, v)
	up = TREE-PARENT(T, u)
	if up == NIL
		T.root = v
	else if u == up.left
		up.left = v
	else
		up.right = v
	if v != NIL
		v.succ = u.succ
		vpre = TREE-PREDECESSOR(T, v)
		vpre.succ = v
```
TRANSPLANT changed to need a call for TREE-PARENT as well as modifies successor instead of parents at the end. Both of these additional calls are $O(h)$, so this algorithm is $O(h)$.

```python
TREE-DELETE(T, z)
	if z.left == NIL
		TRANSPLANT(T, z, z.right)
	else if z.right == NIL
		TRANSPLANT(T, z, z.left)
	else
		y = TREE-MINIMUM(z.right)
		if y != z.right
			TRANSPLANT(T, y, y.right)
			y.right = z.right
		TRANSPLANT(T, z, y)
		y.left = z.left
```
TREE-DELETE removed the calls for updating the parents. Because the successors are updated within TRANSPLANT, no additional code is added, so this is still $O(h)$.
## 4.  15.2-5
First, we must sort the set such that $x_{1}\le x_{2}\le \cdots\le x_{n}$.  Then, we pick our first interval to be $[x_{1},x_{1}+1]$. We then remove from consideration the $k$ elements that fall under this interval and previous intervals. Then, we pick our next interval of $[x_{k}, x_{k}+1]$. We repeat this process until $k=n$.

This algorithm is correct because it ensures that each point is in the interval list. Additionally, it is the smallest number of intervals because at any given point, if we wanted to move the interval at all to the right, we would lose out on the smallest number and need two intervals to cover the same range.
## 5.  15.2-7
First, we should sort both sets in descending order. Then, the largest payoff is calculated in $\Theta(n)$ time assuming that calculating the exponent is $O$(1).

Pairing the largest base with the largest exponent will  have by far the largest integer. Once done with it, when considering the rest of the set, the next largest base and next largest exponent will have by far the largest increase to the payoff. We can repeat this until the entire payoff is calculated, and each step is optimal with the remaining set.