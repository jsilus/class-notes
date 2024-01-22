Each pair of elements gets compared.
## Algorithms
Every sorting algorithm we've seen so far is comparison sorting
- [[Heap Sort]]
- [[Insertion Sort]]
- [[Selection Sort]]
- [[Merge Sort]]
- [[Quick Sort]]
## Why the fastest sort is $\Theta(n\lg n)$
We can build a decision tree while sorting an array.

In the worst case, a comparison sort must travel from the root of the tree down to the furthest leaf.

So, what is the height of the comparison sorting algorithm?

Given $n$ elements, there are $n!$ distinct permutation of $n$ elements, so
$$
n!\le l\le 2^{h}
$$
where $l$ is the number of leaves and $h$ is the height of the tree if we try to solve for $h$ from $\lg(n!)\le h$, we find that this is $\Theta(n\lg n)$.

