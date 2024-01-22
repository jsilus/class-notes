## 1.  8.1-3
We can prove these few cases with the decision tree model given in Theorem 8.1. From it, we know that $h\ge\lg(n!)=\Omega(n\lg n)$, where $n!$ is the number of permutations and $h$ is the height of the decision tree.

By only considering the first $n!/2$ elements, we find
$$
h\ge\lg(n!/2)=\lg(n!)-\lg(2)=\Omega(n\lg n)-1=\Omega(n\lg n)
$$
We can follow this pattern for $n!/n$ elements, with
$$
h\ge\lg(n!/n)=\lg(n!)-\lg(n)=\Omega(n\lg n)-\lg(n)=\Omega(n\lg n)
$$
Similarly for $n!/2^n$,
$$
h\ge\lg(n!/2^n)=\lg(n!)-\lg(2^n)=\Omega(n\lg n)-n=\Omega(n\lg n)
$$
For all of these cases, when considering only some of the permutations, the worst case run time is still $\Omega(n\lg n)$.
## 2.  8.1-4
Since we know that the elements at position $i$ such that $i\mod4=0$ should be sorted into either position $i-1,i,\text{ or }i+1$, there is a potential for some specific sort that can handle the positions $i$ where $i\mod4=0,1,\text{ or }3$. I don't mean that there must be a sorting algorithm that can work with these, I only mean that elements at $i$ such that $i\mod4=2$ is entirely unknown and would be untouched by any special sorting algorithm. Then, the elements $i$ such that $i\mod4=2$ could form a unique list relative to each other of length $n/4$. Because we know no information about them, this must use a comparison sort and must then be constrained by the lower bound of $\Omega(n\lg n)$. 
## 3.  8.2-6
```
ELEMENTS-LESS-OR-EQUAL(A, n, k)
	let C[0:k] be a new array

	// populate C with number of elements equal to i
	for i = 0 to k
		C[i] = 0
	for j = 1 to n
		C[A[j]] = C[A[j]] + 1

	// make C contain the number of elements less than or equal to i
	for i = 1 to k
		C[i] = C[i] + C[i - 1]
	return C
```

```
ELEMENTS-WITHIN-RANGE(C, a, b)
	// C is indexed from 0 to k
	if a == 0
		return C[b]
	return C[b] - C[a - 1]
	
```

ELEMENTS-LESS-OR-EQUAL uses the first part of counting sort to generate and return an array $C$ such that the indices $i$ from $0$ to $k$ represent the number of elements in $A$ less than or equal to the value $i$. This preprocessing step takes $\Theta(n+k)$ time. ELEMENTS-WITHIN-RANGE then just has a simple check to make sure we don't index out of bounds before returning a single function, giving it a time of $\Theta(1)$.
## 4.  8.3-3
### Induction
We will prove the loop invariant:

For any number of digits $i$ such that $1\le i\le d$, at the end of iteration $i$, the list is sorted when only considering the first $i$ digits.
#### Base Case
$i=1$
Since all the loop does is call a stable sort about the digit $i$, at the end of this iteration the list is sorted when only considering the first digit.
#### Inductive Case
$k=i+1$
Show that if the loop invariant holds for $i$, it must hold for $k$.

This loop does a stable sort about the digit $k$, so we know that the digit $k$ is sorted. Since this is a stable sort, at all times where the $k$th element is equal the relative sorting of the elements will stay the same. Because of this, the first $i$ elements will still be sorted. Then, the first $k$ elements are sorted.
### Where is the stable sort necessary?
As discussed within the inductive case, the stable sort is necessary to keep the relative sorting of past digits. If the sort used is unstable, the only digit we can depend on being sorted is $d$. Because of this, the stable sort requirement is needed in the inductive case to maintain the previously sorted first $i$ digits.
## 5.  8.3-4
Instead of iterating over each digit 0-9, we should iterate over every two digits 00-99. Then, it for every at most two digits, COUNTING-SORT will iterate over the list two times. If the array has numbers with an odd number of digits then, it will iterate over the array $d+1$ times, otherwise it will iterate over the array $d$ times.