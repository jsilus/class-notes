
## 1.  2.3-3
### Relevant lines of *MERGE*
```
while i < n_L and j < n_R
	if L[i] <= R[j]
		A[k] = L[i]
		i = i + 1
	else
		A[k] = R[j]
		j = j + 1
	k = k + 1
```
### Loop Invariant
At the start of any given iteration $k$, $A[1:k-1]$ is sorted and all elements in $A[1:k-1]$ are smaller than all elements in $L[i:]$ and $R[j:]$.
### Initialization
At the start of iteration $1$, $A[1:0]$ is empty so it is sorted and all elements in $L\cap R$ are greater.
### Maintenance
Because $L$ and $R$ are sorted, when picking the smallest element from the front of each, the smallest element $x$ of either $L[i:]$ or $R[j:]$ is picked. Because this happened in previous iterations, $x$ is greater than all other elements in $A[1:k-1]$ and smaller than all other elements in $L[i:]$ and $R[j:]$. Therefore, at the end of the iteration, $A[1:k]$ is now still sorted and all elements in $A[1:k]$ are smaller than all elements in $L[i:]$ and $R[j:]$.
### Termination
This loop terminates when either $L$ or $R$ are depleted of new values. This prevents any invalid indices. 
### Cleanup
The following two loops in the *MERGE* procedure are used to finish putting in all the elements of whichever array (if either) was not depleted into the output array. Because all of the elements in this leftover array are larger than all the element in $A$ (by the loop invariant), they are quickly appended.
The combination of these three loops will output a sorted array.

## 2.  2.3-5
```
insert(A, n)
	key = A[n]
	i = n - 1
	while i > 0 and A[i] > key
		A[i + 1] = A[i]
		i = i - 1
	A[i + 1] = key
```
```
insertion_sort_rcrsv(A, n)
	if n == 1
		return
	insertion_sort_rcrsv(A, n - 1)
	insert(A, n)
```
### Recurrence
$$
T(n)= \text{cost to divide}+\text{cost to solve subprocess}+\text{cost to combine}
$$
where
$$
\begin{align*}
\text{cost to divide}&= \Theta(1)\\
\text{cost to solve subprocess}&= T(n-1)\\
\text{cost to combine}&= \Theta(n)
\end{align*}
$$
In this case, the cost to combine is used as the insertion action. This means that the total time $T(n)$ can be expanded to be
$$
\begin{align*}
T(n)&= \Theta(1)+\Theta(n)+T(n-1)\\
&= n\Theta(1)+\Theta(n)+\Theta(n-1)+\Theta(n-2)+\Theta(n-3)+\cdots+\Theta(2)+\Theta(1)
\end{align*}
$$
This worst case runtime can then be represented with the summation
$$
\sum\limits_{i=1}^{n}(1+i)=n+\sum\limits_{i=1}^{n}i=\frac{n^{2}}{2}+\frac{3n}{2}=\boxed{\Theta(n^2)}
$$
## 3.  2.3-6
```
binary_search(A, n, x)
	p = 1
	r = n
	while p <= r
		q = floor((p + r) / 2)
		if A[q] == x
			return q
		else if A[q] > x
			r = q - 1
		else
			p = q + 1
	return NIL
```

At each iteration of the while loop, we check the midpoint of the region that $x$ could be in. If $x$ is in the smaller region, we discard the larger one, and vice versa. At the worst case, this process is repeated until we are looking at a region of size $2$, then $1$, and then the only element left is evaluated to see if it is $x$ or not. The size of the array we are searching through each iteration can be viewed as the sequence below.
$$
n,\frac{n}{2},\frac{n}{4},\cdots,4,2,1
$$
As each step divides by $2$, this takes $\lg n$ total iterations, for a time of $\Theta(\lg n)$.
## 4.  2-4
#### a.
The inversions are: $\{(1,5),(2,5),(3,4),(3,5),(4,5)\}$.
#### b.
The reverse array $\langle n,n-1,...,2,1\rangle$ has the most inversions of any array in the set. Each element $j$ in the array has $j$ corresponding inversions of form $\langle i,j\rangle,\forall i\text{ s.t. }1\le i\lt j$
$$
\sum\limits_{j=1}^{n}j=\boxed{\frac{n^{2}}{2}-\frac{n}{2}\text{ inversions}}
$$
#### c.
The inner loop of insertion sort will run as many times as the number of inversions within the list. This is because for each iteration of the outer loop $i$, we must move the $i\text{th}$ element to its proper place, which takes 1 iteration of the inner loop for each element greater than it that is at a smaller index. This is equivalent to 1 iteration per corresponding inversion.
#### d.
```
count_inversions(A,p,r)
	if p >= r
		return
	q = floor((p + r) / 2)
	output = 0
	output = output + count_inversions(A,p,q)
	output = output + count_inversions(A,q + 1,r)
	output = output + merge_count(A,p,q,r)
	return output
```

In `count_inversions`, `merge_count` will run with a basic merge sort structure, iterating through both lists and checking which front element should be merged into the next position. The addition to a typical merge sort, however, is that `merge_count` will add up the number of indices each value moved up from its starting index. This is returned and summed into the `output` variable of `count_inversions`, which is returned.
This will run as a normal merge sort, sorting the list while it works, meaning that it will take on its $\Theta(\lg n)$ time.
## 5.
Most importantly to remember is the Captain Krik doesn't know $p$ going into this. Because of this, he doesn't know the maximum planet to search through for a $\Theta(\lg n)$ binary search. A simple solution to this would then be to find this maximum.
#### Finding the maximum
If Captain Krik starts at planet 1. Each time the wizard tells him that the MacGuffin is on a planet with a strictly higher planet identifier, Captain Krik doubles the planet identifier he goes to next. This will then continue as a sequence shown by
$$
1,2,4,8,\cdots,\frac{n}{2},n
$$
where $n$ is the smallest element of the sequence $2^{k}$ such that $n>p$. This part of the algorithm would run $\Theta(\lg p)$ times.
#### Binary search
Now that Captain Krik has a maximum number of planets to search, he can start a binary search between $\frac{n}{2}$ and $n$. As shown in homework problem 3, this is $\Theta(\lg \frac{n}{2})$. As $\frac{n}{2}<p$, this is less than $O(\lg p)$.
#### Summing the two parts
Because coefficients don't matter in Big O notation parts, these two parts can be combined to show that Captain Kirk will need to visit at most $O(\lg p)$ planets.