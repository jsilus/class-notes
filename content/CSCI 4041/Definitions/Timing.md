We can start by counting how long each line is run.

| Line | Cost  | Time              |
| ---- | ----- | ----------------- |
| 1    | $c_1$ | n                 |
| 2    | $c_2$ | n-1               |
| 3    | $c_3$ | $\sum_{i=1}^nt_i$ |
| ...  | ...   | ...               |

From this data, we can create a function, $T(n)$
Generic function is $T(n)=c_1n+c_2(n-1)+c_3(\sum_{i=1}^nt_i)...$
### What is $\sum_{i=1}^nt_i$?
This depends greatly on the initial conditions of the loops

>[!tip] Helpful Formula
>$$\sum_{i=1}^ni=\frac{n^2}2+\frac n2$$

In general, when timing algorithms, use the worst case.
### [[Big O Notation]]
### Recursion
$T(n)=\text{cost to divide}+\text{cost to solve subprocess}+\text{cost to combine}$
#### Recursive Tree Analysis
##### What is the leaf cost?
1. How many leaves?
2. Cost per leaf?
##### Cost of all other levels?
1. How many levels?
2. Cost per level?