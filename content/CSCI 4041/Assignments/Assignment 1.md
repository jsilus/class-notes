## 1.
### A.
For $f_1$, $\lg^bn=O(n^a),\forall a\gt0$
$f_2=2023n^2\lg n=\Theta(n^2\lg n)$ 
$f_3=\Theta(n^3)$
$f_4=\Theta(2.023^n)$
$f_5=\Theta(n\lg n)$

$(f_1,f_5,f_2,f_3,f_4)$
### B.  
$f_1=\Theta(2^n)$
$f_2=\Theta(n^3)$
$f_3=\frac{n!}{((n/2)!)^2}$
$f_4=\Theta(n!)$
$f_5=\frac{n!}{3!(n-3)!}=\frac{n(n-1)(n-2)}{3!}=\Theta(n^3)$

For $f_3$, $\lim_{n\rightarrow\infty}\frac{n!}{((n/2)!)^2}*\frac1{n!}=0$, so $f_3=O(n!)$
Further, without completely eliminating the top factorial, it will always outgrow the bottom factorial, so it must be $\Theta(n!)$.

$(\{f_2,f_5\},f_1,\{f_3,f_4\})$

## 2. 
We proceed by induction.

### Base Case
$a_2=2$ and $a_2=2\lg 2=2*1=2$ 

### Inductive Case
**Start with:** $a_{2k}=2a_k+2k$
**Inductive Hypothesis:** $a_k=k\lg k$
**Show:** $a_{2k}=2k\lg(2k)$

Start with:
$$a_{2k}=2a_k+2k$$
Substitute Inductive Hypothesis:
$$a_{2k}=2(k\lg k)+2k$$
Simplify:
$$a_{2k}=2k\lg k+2k\lg 2$$
$$a_{2k}=2k\lg(2k)$$
Therefore, by Mathematical Induction, $a_n=n\lg n$ is the recurrence relation for this relationship.

## 3.  2.1-4
```
linear_search(A, x)
	for i = 1 to A.size
		if A[i] == x
			return i
	return NIL
```

### Verification
**Loop Invariant:** At the start of each iteration $i$, $x\notin A[1:i-1]$.

**Initialization:** At $i=1$, $A[1:0]$ contains nothing, so $x\notin A[1:i-1]$.

**Maintenance:**
	  **Assume:** $x\notin A[1:k-1]$.
	  If $x=A[k]$, the loop **terminates** with value $k$. Otherwise, if $x\ne A[k]$, then, because $x\notin A[1:k-1]$, $x\notin A[1:k]$.

**Termination:** If $x$ was found within $A$, the index $i$ such that $x=A[i]$ had been returned. Otherwise, after the loop has ended, special value $NIL$ is returned.

By this loop invariant, the *linear search* algorithm is correct.

## 4.  2.2-2

```
selection_sort(A)
	for i = 1 to A.size - 1
		smallest = i
		for j = i + 1 to A.size
			if A[j] < A[smallest]
				smallest = j
		exchange A[i] with A[smallest]
```

### Verification
**Loop Invariant:** At the start of each outer loop iteration $i$, $A[1:i]$ is sorted and $\forall x\in A[1:i-1],\forall y\in A[i:],x\le y$.

**Initialization:** At $i=1$, $A[1:1]$, the subarray is only one element, so it is sorted. $A[1:0]$ contains no elements, so the second condition is fulfilled.

**Maintenance:**
	**Assume:** $A[1:k]$ is sorted and $\forall x\in A[1:k-1],\forall y\in A[k:],x\le y$.
	The inner loop then finds the smallest value in $A[k:]$ to swap with $A[k]$. Because All elements in $A[1:k-1]$ are sorted and smaller than all elements in $A[k:]$, $A[1:k]$ is sorted. Because $A[k]$ is now the smallest value in $A[k:]$, $A[1:k+1]$ is sorted and $\forall x\in A[1:k],\forall y\in A[k+1:],x\le y$

**Termination:** According to our **maintenance**, at the end of iteration $n-1$, $A[1:n]$ is entirely sorted. Therefore, we terminate at $n-1$ with a sorted loop.

By this loop invariant, the selection sort algorithm is correct.

### Why only run for $n-1$ iterations?
According to the the loop invariant, at the start of each iteration $i$, $A[1:i]$ is sorted and $\forall x\in A[1:i-1],\forall y\in A[i:],x\le y$.

### Timing
Selection sort must always run through the inner loop each iteration of the outer loop in order to find the smallest remaining number. Because of this, the worst case and best case efficiencies are both $\Theta(n^2)$.

## 5.  2.2-3
In an average scenario, because this is in linear time, we'll have to search through around $\frac n2$ elements. In the worst case scenario, we need to search through all $n$ elements. Because constants are ignored for $\Theta$ notation, both of these scenarios are $\Theta(n)$.

## 6.  2-2
```
BUBBLESORT(A,n)
	for i = 1 to n - 1
		for j = n downto i + 1
			if A[j] < A[j - 1]
				exchange A[j] with A[j - 1]
```

### a.
We need to prove the loop invariant to show that this works for every initial array $A$.
### b.
#### Loop Invariant
At the start of any iteration for the inner loop $j$, $\forall x\in A[j:n]$, $A[j]\le x$.

#### Initialization
At the start of the first iteration $j=n$, $A[j]\le A[j]$, the only element in the subarray $A[j:n]$.

#### Maintenance
**Assume:** $\forall x\in A[k:n]$, $A[k]\le x$.

If $A[k]<A[k-1]$, then $A[k]$ and $A[k-1]$ are swapped during this step. Otherwise, they are left as is. Therefore, at the end of the iteration, $\forall x\in A[k-1:n]$, $A[k-1]\le x$.

#### Termination
The loop terminates after $j=i+1$, so by our maintenance step, we know that $A[i]$ is smaller than every element in $A[i+1:]$.

### c.
#### Loop Invariant
At the start of any iteration for the outer loop $i$, $A[1:i]$ is sorted.
By the part b. loop invariant, all elements in $A[i:n]$ must be larger than all elements in $A[1:i-1]$
#### Initialization
At the start of the first iteration $i=1$, $A[1:1]$ contains only one element so it is sorted.
Additionally, $A[1:0]$ contains no elements, so the second condition is fulfilled.

#### Maintenance
**Assume:** $A[1:k]$ is sorted and all elements in $A[k:n]$ are larger than all elements in$A[1:k-1]$.

When executed, the inner loop will bring the smallest element from $A[k:n]$ to $A[k]$. Then, $A[k]\le A[k+1]$, so $A[1:k+1]$ is sorted and all elements in $A[k+1:n]$ are larger than all elements in $A[1:k]$.

#### Termination
The loop terminates after $i=n-1$, so by our maintenance step, $A[1:n]$ is sorted. Also, $A[n:n]$  contains only the element $A[n]$, and it is larger than the rest of the list, fulfilling the second condition.

### d.
The worst case for bubble sort is a reverse sorted list. In this case, the inner loop is running for every iteration of the outer loop, meaning it is $\Theta(n^2)$. This is equivalent to the worst case scenario of insertion sort, which is also $\Theta(n^2)$.