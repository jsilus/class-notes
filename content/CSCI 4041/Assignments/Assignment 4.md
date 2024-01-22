## 1.  7.2-4
As an array gets closer to fully sorted, insertion sort approaches its fastest time of $O(n)$. This is because if an element is already in the correct position relative to the elements smaller than it, the inner loop won't be entered.

On the other hand, as the array gets closer to fully sorted, quick sort approaches its slowest time of $O(n^{2})$. This is because if the new pivot is placed close to the beginning or end of the array, the advantage of splitting into two recursive calls is effectively gone.

For these reasons, if the array is known to be nearly sorted, insertion sort may be a better choice than quick sort.
## 2.  7.3-1
We choose to analyze a randomized algorithm rather than the worst case time because the worst case time is rare and can be made even more rare by randomizing the parameters that may lead to it, such as randomizing the pivot for quick sort.
## 3.  6.2-6
```
// iterative version of MAX-HEAPIFY
MAX-HEAPIFY(A, i)
	while true
		l = left(i)
		r = right(i)
		if l <= A.heapsize and A[l] > A[i]
			largest = l
		else
			largest = i
		if r <= A.heapsize and A[r] > A[largest]
			largest = r
		if largest != i
			exchange A[i] with A[largest]
			i = largest
		else
			return
```
## 4.  6.4-3
The first thing HEAPSORT will do is call BUILD-MAX-HEAP to entirely redo the sorting to make it a max heap, so the timing for an already sorted and reverse sorted list is the same.

For each node, the cost of MAX-HEAPIFY is $O(h)$ where $h$ is the height of the node. To calculate the cost of BUILD-MAX-HEAP, we need the following parameters.

1. What is height of heap? $\lfloor\lg n\rfloor$
2. How many nodes of height $h$? $\left\lceil\frac{n}{2^{h+1}}\right\rceil$

Then, the timing of BUILD-MAX-HEAP can be found through the summation
$$
\sum\limits_{h=0}^{\lfloor\lg n\rfloor}ch\left\lceil\frac{n}{2^{h+1}}\right\rceil\le\sum\limits_{h=0}^{\lfloor\lg n\rfloor}cn\frac{h}{2^{h}}= cn\sum\limits_{h=0}^{\lfloor\lg n\rfloor}\frac{h}{2^{h}}\lt cn\sum\limits_{h=0}^{\infty} \frac{h}{2^{h}}\le cn \frac{\frac{1}{2}}{(1- \frac{1}{2})^{2}}=O(n)
$$
In HEAPSORT, after calling BUILD-MAX-HEAP, we iterate through $n$ elements, each time calling MAX-HEAPIFY on the top element which is $O(h)=O(\lg n)$ because it is at height $\lg n$. Because of this, the loop takes $O(n\lg n)$. Finally, because this is greater than the cost of BUILD-MAX-HEAP, only this matters for the Big O Notation, so the runtime of HEAPSORT in both cases is $\boxed{O(n\lg n)}$.
## 5.  6.5-10
```
MAX-HEAP-DELETE(A, x)
	map keys to the elements (if needed)

	// move element to the root [ O(lg n) ]
	MAX-HEAP-INCREASE-KEY(A, x, A[1].key + 1)

	// remove element [ O(1) ]
	A[1] = A[A.heapsize]
	A.heapsize = A.heapsize - 1

	// fix heap [ O(lg n) ]
	MAX-HEAPIFY(A, 1)
```

In this algorithm, the longest runtime call is MAX-HEAP-INCREASE-KEY or MAX-HEAPIFY, both of which making this algorithm $O(\lg n)$.
## 6.
As shown in problem 4, the runtime of BUILD-MAX-HEAP is $O(n)$. Because of this, we will generate a max heap with the absolute value of the opinions of the Web members. 

Then, we will do a partial heap sort, only iterating through the first $\lg n$ elements rather than all $n$ elements. This will move the largest $\lg n$ elements to the back of the list in $O(\lg n\lg n)=O((\lg n)^{2})<O(n)$ time.

Finally we just iterate through the last $\lg n$ members in the array representation of the heap to which will be the largest ones.

This algorithm should take the time of BUILD-MAX-HEAP + the time of the partial heap sort + the time of the iteration, or
$$
c_{1}n+c_{2}(\lg n)^{2}+c_{3}\lg n=\boxed{O(n)}
$$