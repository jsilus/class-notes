## Problem 1
1) This could not deadlock. At any given point, there can be at most 3 CPUs allocated. Because of this, we will always have enough CPUs to obtain, so we will never have an issue releasing GPUs.
2) This could deadlock if Google acquires the GPUs before OpenAI acquires its GPU. Because OpenAI wouldn't release its CPU, Google would be unable to acquire 2 CPUs and release its 2 GPUs. This deadlock could be prevented by using total ordering to ensure OpenAI acquires its GPU before Google takes 2 GPUs.
3) This could once again deadlock if Google acquires the GPUs before the first OpenAI acquires its GPU. Because OpenAI wouldn't release its CPU and the second OpenAI would obtain a second CPU before the Google MT finishes, Google will be unable to obtain 2 CPUs and release its GPUs. This deadlock could again be prevented by using total ordering to ensure the first OpenAI acquires its GPU before Google.
<div style="page-break-after: always"></div>

## Problem 2
```c
Monitor BridgeMonitor {
	int weight;
	condition car_exited;

	void enterBridge(int car_weight) {
		while (weight + car_weight > W)
			car_exited.wait();
		weight += car_weight;
	}

	void exitBridge(int car_weight) {
		weight -= car_weight;
		car_exited.signal();
	}
}
```

The code shouldn't change with signal and wait or signal and continue semantics because the signal is the last call within `exitBridge()`, at which point the monitor would be executed anyway.
<div style="page-break-after: always"></div>

## Problem 3
We will label the processes $P_{1}=100K,P_{2}=230K,P_{3}=210K,P_{4}=90K,P_{5}=300K,P_{6}=50K$. We will label the memory partitions $M_{1}=350K,M_{2}=100K,M_{3}=300K,M_{4}=150K,M_{5}=110K,M_{6}=350K,M_{7}=75K$.
#### First-Fit
$P_{1}$ will be placed at $M_{1}$
$P_{2}$ will be placed at $M_{3}$
$P_{3}$ will be placed at $M_{6}$
$P_{4}$ will be placed at $M_{2}$
$P_{6}$ will be placed at $M_{4}$

$P_{5}$ will not be placed
#### Best-Fit
$P_{1}$ will be placed at $M_{2}$
$P_{2}$ will be placed at $M_{3}$
$P_{3}$ will be placed at $M_{1}$
$P_{4}$ will be placed at $M_{5}$
$P_{5}$ will be placed at $M_{6}$
$P_{6}$ will be placed at $M_{7}$
#### Worst-Fit
$P_{1}$ will be placed at $M_{1}$
$P_{2}$ will be placed at $M_{6}$
$P_{3}$ will be placed at $M_{3}$
$P_{4}$ will be placed at $M_{4}$
$P_{6}$ will be placed at $M_{5}$

$P_{5}$ will not be placed
<div style="page-break-after: always"></div>

## Problem 4
Let $\%$ be modulus and $/$ be integer division. Then,
1) $2222\,\%\,4096=0\to \text{page number},2222/4096=2222\to \text{offset}$
2) $66666\,\%\,4096=16\to \text{page number},6666/4096=1130\to \text{offset}$
3) $999999\,\%\,4096=244\to \text{page number},999999/4096=575\to \text{offset}$
4) $1111111\,\%\,4096=271\to \text{page number},1111111/4096=1095\to \text{offset}$
5) $12345678\,\%\,4096=3014\to \text{page number},12345678/4096=334\to \text{offset}$

<div style="page-break-after: always"></div>

## Problem 5
For all of these, note that the logical address contains the offset and the page, and the physical address contains the offset and the frame. 

1) $512=2^{9}$, $4KB=2^{12}B$, $64=2^{6}$. Then, logical address size $=9+12=21$ bits, physical address size $=12+6=18$ bits.
2) $256=2^{8}$, $8KB=2^{13}B$, $128=2^{7}$. Then, logical address size $=8+13=21$ bits, physical address size $=13+7=20$ bits.
3) $128=2^{7}$, $2KB=2^{11}B$, $32=2^{5}$. Then, logical address size $=7+11=18$ bits, physical address size $=11+5=16$ bits.
<div style="page-break-after: always"></div>

## Problem 6
For these, the entries will be derived from the virtual address size for conventional page tables, or from the physical memory for inverted page tables.
#### 1.
###### (i)
$2KB=2^{11}B$, so in order to fill up 20 bits, there can be $2^{9}=512$ entries.
###### (ii)
$4GB=2^{11}\cdot2KB$, so there are $2^{11}=2K$ entries.
#### 2.
###### (i)
$8KB=2^{13}B$, so in order to fill up $32$ bits, there can be $2^{19}=524288$ entries.
###### (ii)
$1GB=2^{7}\cdot8KB$, so there are $2^{7}=128$ entries.
<div style="page-break-after: always"></div>

## Problem 7
1) $EAT=15\%*20\,ns+85\%*2\,ns=\boxed{4.7\,ns}$
2) $EAT=1\%*10\,ns+99\%*1\,ns=\boxed{1.09\,ns}$
3) $EAT=40\%*25\,ns=\boxed{10\,ns}$
<div style="page-break-after: always"></div>

## Problem 8
This problem is equivalent to solving the following equation for $p$ :
$$
\begin{align}
&1-\frac{100ns}{(1-p)*100ns+p*5\,000\,000ns}<0.05 \\\\
\Rightarrow &(1-p)*100ns+p*5\,000\,000ns-100ns<0.05\left[ (1-p)*100ns+p*5\,000\,000ns \right]  \\
\Rightarrow &100ns-100ns*p+5\,000\,000ns*p-100ns<5ns-5ns*p+250\,000ns*p \\
\Rightarrow &(5\,000\,000ns-250\,000ns-100ns+5ns)*p<100ns-100ns+5ns \\
\Rightarrow &p< \frac{100-100+5}{5\,000\,000-250\,000-100+5} \\
\Rightarrow &\boxed{p< 0.000\,001\,053}
\end{align}
$$
<div style="page-break-after: always"></div>

## Problem 9
#### 1.

| 1   |     |     |
| --- | --- | --- |
| 1   | 3   |     |
| 1   | 3   | 2   |
| 4   | 3   | 2   |
| 4   | 3   | 5   |
| 2   | 3   | 5   |
| 2   | 1   | 5   |
| 2   | 1   | 3   |
| 5   | 1   | 3   |

With 3 frames, we have 9 faults

| 1   |     |     |     |
| --- | --- | --- | --- |
| 1   | 3   |     |     |
| 1   | 3   | 2   |     |
| 1   | 3   | 2   | 4   |
| 5   | 3   | 2   | 4   |
| 5   | 3   | 2   | 1   |
With 4 frames, we now have 6 faults

| 1   |     |     |     |     |
| --- | --- | --- | --- | --- |
| 1   | 3   |     |     |     |
| 1   | 3   | 2   |     |     |
| 1   | 3   | 2   | 4   |     |
| 1   | 3   | 2   | 4   | 5   |
With 5 frames, we now have 5 faults
#### 2.
| 1   |     |     |
| --- | --- | --- |
| 3   | 1   |     |
| 2   | 3   | 1   |
| 4   | 2   | 3   |
| 5   | 4   | 2   |
| 1   | 5   | 4   |
| 3   | 1   | 5   |
With 3 frames, we have 7 faults

| 1   |     |     |     |
| --- | --- | --- | --- |
| 3   | 1   |     |     |
| 2   | 3   | 1   |     |
| 4   | 2   | 3   | 1   |
| 5   | 4   | 2   | 3   |
| 1   | 5   | 4   | 2   |
| 3   | 1   | 5   | 4   |
With 4 frames, we have 7 faults

| 1   |     |     |     |     |
| --- | --- | --- | --- | --- |
| 3   | 1   |     |     |     |
| 2   | 3   | 1   |     |     |
| 4   | 2   | 3   | 1   |     |
| 5   | 4   | 2   | 3   | 1   |
With 5 frames, we now have 5 faults

#### 3.
| 1   |     |     |
| --- | --- | --- |
| 1   | 3   |     |
| 1   | 3   | 2   |
| 4   | 3   | 2   |
| 5   | 3   | 2   |
| 5   | 3   | 1   |
With 3 frames, we have 6 faults

| 1   |     |     |     |
| --- | --- | --- | --- |
| 1   | 3   |     |     |
| 1   | 3   | 2   |     |
| 1   | 3   | 2   | 4   |
| 1   | 3   | 2   | 5   |
With 4 frames, we now have 5 faults

| 1   |     |     |     |     |
| --- | --- | --- | --- | --- |
| 1   | 3   |     |     |     |
| 1   | 3   | 2   |     |     |
| 1   | 3   | 2   | 4   |     |
| 1   | 3   | 2   | 4   | 5   |
With 5 frames, we have 5 faults
<div style="page-break-after: always"></div>

## Problem 10
Code 2 will have **dramatically** fewer page faults than Code 1. This is because the data in the $X$ array is stored in row-major order. Because of this ordering, we can fit 4 rows into one page back to back. This means that Code 1 will have a page fault every 4 accesses because it is iterating over the rows first. Code 2 will have a page fault every 256 accesses because it is iterating over the columns first.