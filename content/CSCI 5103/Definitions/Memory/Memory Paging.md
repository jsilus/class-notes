* Allows physical address space of a process to be non-contiguous
* A **page** is a
	* contiguous chunk of memory addresses
	* process virtual memory is divided up into equal-size pages
- Contains access protection bits that correspond to access restriction

## Translation-Lookaside Buffer
- Fast cache for page table entries
	- Consists of a set of recent address translations

#### Context Switch
- On context switch:
	- TLB must be flushed

## Demand Paging
- How to distinguish between pages in/out of memory?
	- Use Valid-invalid bit in page table
	- Invalid bit $\Rightarrow$ page is invalid or in swap space
- Execution proceeds normally as long as process only accesses memory-resident pages
- Uses [[Page Faults]]
	- This adds a lot of overhead

#### Effective Memory Access Time
$$
\begin{align}
EAT & =(1-p)*ma+p*pft \\\\
\text{where} &  \\
p & \text{ is the page fault rate} \\
pft & \text{ is the page fault time} \\
ma & \text{ is the memory access time} \\
EAT & \text{ is the Effective Memory Access Time}
\end{align}
$$