Existing algorithms can lead to unbounded unfairness in resource allocation
### Weight Feasibility Constraint
$$
\begin{align}
\frac{w_{i}}{\sum\limits_{ j }w_{j} }&\leq \frac{1}{p} \\
\text{where} \\
w_{i} & =\text{weight of thread }i \\
p & =\text{number of CPUs}
\end{align}
$$
#### Weight Readjustment
- Converts given weights to "closest" feasible weights
- $O(p)$ complexity
### Reasons
- Accounting is different from actual allocation
- Infeasible Weight Assignment