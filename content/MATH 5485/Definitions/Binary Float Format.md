## IEEE-754-1985
### 32-bit
- 1 bit: sign - $s$
- 8 bit: exponent - $c_i$
- 23 bit: fraction - $m_i$
- $sc_7c_6...c_1c_0m_{22}m_{21}...m_1m_0$
### 64-bit
- 1 bit: sign - $s$
- 11 bit: exponent - $c_i$
- 52 bit: fraction - $m_i$
- $sc_{10}c_9...c_1c_0m_{51}m_{50}...m_1m_0$

For the sign bit, 0 is positive, 1 is negative

The 64-bit double can be calculated with
$$
\begin{align*}
r&=(-1)^s2^{c-1023}(1+m)\\
\text{where}\\
c&=\sum^{10}_{k=0}c_k2^k\\
m&=\sum^{51}_{k=0}m_k\frac1{2^{52-k}}
\end{align*}
$$
### Source of Numerical [[Error]]
1. Representation - Round off
2. Cancellation

>[!tip]
>Rounding and chopping at **EACH STEP** of computation