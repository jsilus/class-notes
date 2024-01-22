## 1.  4.1-2
In order to solve a non-square matrix with MATRIX-MULTIPLY-RECURSIVE, 0s must be added to the matrix until it becomes a square matrix of size $2^i\times2^i$ for some positive integer $i$. For this reason, both cases of $kn\times n$ matrix times a $n\times kn$ matrix as well as the $n\times kn$ matrix times a $kn\times n$ matrix need to first be expanded to a $kn\times kn$ matrix times a $kn \times kn$ matrix. Because the runtime of MATRIX-MULTIPLY-RECURSIVE is $\Theta(n^{3})$ as discussed in lecture, both situations have a runtime of $\Theta(n^{3})$.
## 2.

![[recursive-tree.png]]

We will solve this recurrence with the master theorem. Since $T(a)<T(b)$ for all $a<b$, we can bound $T(n)$ with
$$
2T\left(\frac{n}{4}\right)+cn<T(n)<2T\left(\frac{n}{3}\right)+cn
$$
##### We will start with the upper bound.
First, we compare $cn$ to the watershed function $n^{\log_{3}2}$. Because $\log_{3}2<1$, we will use Case 3 of the Master Theorem. By picking $\epsilon=\log_{3} \frac{3}{2},$
$$
cn=\Omega(n^{\log_{3}2+\log_{3}\frac{3}{2}})=\Omega(n)
$$
We must also check that for some $c_0<1$,
$$
2c\left(\frac{n}{3}\right)\le c_{0}cn
$$
If $c_{0}=\frac{2}{3}$, this is valid.
Then, by the master theorem, $2T\left(\frac{n}{3}\right)+cn=\Theta(cn)=\Theta(n)$, so $T(n)=O(n)$.

##### Next, we do the lower bound
First, we compare $cn$ to the new watershed function $n^{\log_{4}2}=\sqrt n<n$. Once again, we use Case 3 of the Master Theorem. By picking $\epsilon=\frac{1}{2},$
$$
cn=\Omega(n^{\frac{1}{2}+\frac{1}{2}})=\Omega(n)
$$
We must also check that for some $c_{0}<1$,
$$
2c\left(\frac{n}{4}\right)\le c_{0}cn
$$
If $c_{0}=\frac{1}{2}$, this is valid.
Then, by the master theorem, $2T\left(\frac{n}{4}\right)+cn=\Theta(cn)=\Theta(n)$, so $T(n)=\Omega(n)$.

##### Completion
Because $T(n)=O(n)$ and $T(n)=\Omega(n)$,
$$
\boxed{T(n)=\Theta(n)}
$$

## 3.  4.5-1
For all of these cases, the watershed function is
$$
n^{\log_{4}2}=n^{\frac{1}{2}}=\sqrt{n}
$$
#### a.
If we pick a constant $\epsilon=\frac{1}{2}>0$, then $f(n)=1=O(n^{\frac{1}{2}-\frac{1}{2}})=O(n^{0})=O(1)$. Then, by case 1 of the master theorem, $T(n)=\Theta(\sqrt{n})$.
#### b.
If we pick a constant $k=0\ge0$, then $f(n)=\sqrt{n}=\Theta(\sqrt{n}\lg^{0}n)=\Theta(\sqrt{n})$. Then, by case 2 of the master theorem, $T(n)=\Theta(\sqrt{n}\lg n)$.
#### c.
If we pick a constant $k=2\ge0$, then $f(n)=\sqrt{n}\lg^{2}n=\Theta(\sqrt{n}\lg^{2}n)$. Then, by case 2 of the master theorem, $T(n)=\Theta(\sqrt{n}\lg^{3}n)$.
#### d.
If we pick a constant $\epsilon=\frac{1}{2}>0$, then $f(n)=n=\Omega(n^{\frac{1}{2}+ \frac{1}{2}})=\Omega(n)$. Then, with a constant $c=\frac{1}{2}<1$, $2f\left(\frac{n}{4}\right)=\frac{n}{2}=cn$. Therefore, by case 3 of the master theorem, $T(n)=n$.
#### e.
If we pick a constant $\epsilon=\frac{3}{2}>0$, then $f(n)=n^{2}=\Omega(n^{\frac{1}{2}+ \frac{3}{2}})=\Omega(n^{2})$. Then, with a constant $c=\frac{1}{8}<1$,$2f(\frac{n}{4})=2\left(\frac{n}{4}\right)^{2}=\frac{n}{8}=cn$. Therefore, by case 3 of the master theorem, $T(n)=n^{2}$.
## 4.  4-3
#### a.
$$
\begin{align*}
S(m)=T(2^{m})&= 2T(\sqrt{2^{m}})+\Theta(\lg{2^{m}})\\
&= 2T(2^{m / 2})+\Theta(m)\\
S(m)&= \boxed{2S\left(\frac{m}{2}\right)+\Theta(m)}
\end{align*}
$$
#### b.
We will solve the recurrence $S(m)$ using the master theorem.
If we pick a constant $k=0\ge0$, then $f(m)=\Theta(m)=\Theta(m^{\log_{2}2}\lg^{0}m)=\Theta(m)$. Then, by case 2 of the master theorem,
$$
S(m)=\Theta(m\lg m)
$$
#### c.
Now that the recurrence for $S(m)$ is solved, we can change variables back to $T(n)$.
$$
\begin{align*}
S(m)&= T(2^{m})=\Theta(m\lg m)\\
&=T(2^{\lg n})=\Theta(\lg n\lg \lg n)\\
&=T(n)=\Theta(\lg n\lg\lg n)
\end{align*}
$$
#### d.
![[4-2-d.png]]

A key theorem for this is:
$$
\lg(n^{a})=a\lg(n)
$$
Then, the sum of each row is $c\lg(n)$.

Then, we must determine the number of rows. This can be found from the equation
$$
n^{\left(\frac{1}{2}\right)^{2}}=n_{0}
$$
for some implicit level $n_{0}$ such that the times start becoming a constant $c$. Then,
$$
\begin{align*}
\log_{n}n_{0}&=\left(\frac{1}{2}\right)^{h}\\
\frac{\lg n_{0}}{\lg n}&=\left(\frac{1}{2}\right)^{h}\\
h&= \log_{\frac{1}{2}}\frac{\lg n_{0}}{\lg n}\\
h&= \lg\frac{\lg n}{\lg n_{0}}
\end{align*}
$$
Then, the height of the tree times the sum of each row is
$$
c\lg n\lg\frac{\lg n}{\lg n_{0}}=\Theta(\lg n\lg\lg n)
$$

## 5.  7.2-3
#### Quicksort Algorithm
```
QUICKSORT(A, p, r)
	if p < r
		q = PARTITION(A, p, r)
		QUICKSORT(A, p, q - 1)
		QUICKSORT(A, q + 1, r)
```
```
PARTITION(A, p, r)
	x = A[r]
	i = p - 1
	for j = p to r - 1
		if A[j] <= x
			i = i + 1
			exchange A[i] with A[j]
	exchange A[i + 1] with A[r]
	return i + 1
```

#### Timing for Reverse Sorted
If the array contains only distinct elements that are sorted in reverse order, the timing of PARTITION is calculable. Because the smallest elements are furthest to the end of the list, the smallest element will be picked as the pivot $x$ on the first call of PARTITION. Every element of the array will be iterated through until $x$ is placed at the first element of the list.
Of the two recursive calls of QUICKSORT, the one called by QUICKSORT$(A, p, q - 1)$ will be a leaf and calculate nothing.
The other call will once again repeat this PARTITION call to pick the last element of the list as a pivot, iterate through the entire list minus one element, and then place the pivot at the second position. Once again, only one QUICKSORT call of the two is followed. This pattern repeats down the entire recurrence tree, forming the number of calls shown below.
$$
\begin{align*}
\text{QUICKSORT}&= c(n)+c(n-1)+c(n-2)+\cdots+c(2)+c(1)\\
&= c\sum\limits_{k=1}^{n}k= c\left(\frac{n^{2}}{2}+ \frac{n}{2}\right)=\boxed{\Theta(n^{2})}
\end{align*}
$$
## 6.
#### a.
| Tree | Age | Smaller Eastward Trees | Damage Potential |
| ---- | --- | ---------------------- | ---------------- |
| 1    | 30  | 1, 2, 7                | 3                |
| 2    | 57  | 1, 48, 2, 7            | 4                |
| 3    | 70  | 1, 48, 2, 7, 63        | 6                |
| 4    | 1   |                        | 0                |
| 5    | 48  | 2, 7                   | 2                |
| 6    | 2   |                        | 0                |
| 7    | 101 | 7, 63, 76              | 3                |
| 8    | 7   |                        | 0                |
| 9    | 63  |                        | 0                |
| 10   | 76  |                        | 0                |

#### b.
This problem is very similar to the counting inversions of assignment 2. For this, I'll describe a similar algorithm.

```
count_damage_potential(A,D,p,r)
	if p >= r
		return
	q = floor((p + r) / 2)
	count_damage_potential(A,D,p,q)
	count_damage_potential(A,D,q + 1,r)
	merge_count(A,D,p,q,r)
```

In `count_damage_potential`, `merge_count` will run with a basic merge sort structure, iterating through both lists and checking which front element should be merged into the next position. The addition to a typical merge sort, however, is that `merge_count` will increment the corresponding index in D for each element that is swapped in `merge_count`. This is returned and summed into the `output` variable of `count_inversions`, which is returned. The variable D is an array that should be initialized to 0s, and will be filled with the damage potentials of each corresponding element of A pre-sort.
Because this inherits the general structure of merge sort with only a couple added $\Theta(1)$ actions, this algorithm should keep the $\Theta(n\lg n)$ timing.