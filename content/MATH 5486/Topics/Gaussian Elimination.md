## Elementary Operations
1) Row Swap
2) Row Scalar Multiplication
3) Row Addition

## Elementary Matrices
1) 
$$
E^{(a)}=
\left[
\begin{array}{cr}
\begin{matrix}1 \\ & 1 \\ && \ddots \\ &&& 1\end{matrix} && \LARGE{(0)} \\
& \begin{matrix}0 & 1 \\   1 & 0\end{matrix} \\
\LARGE{(0)} && \begin{matrix}1\\&\ddots \\  && 1 \\  &&& 1\end{matrix}
\end{array}
\right]
$$
such that
$$
\begin{align*}
E^{(a)}_{i,i}&= E^{(a)}_{j,j}=0\\
E^{(a)}_{i,j}&= E^{(a)}_{j,i}=1\\
E^{(a)}A &= \text{interchange }i\text{th and }j\text{th row of }A
\end{align*}
$$
2) 
$$
E^{(b)}=
\left[
\begin{array}{cr}
\begin{matrix}1 \\ & 1 \\ && \ddots \\ &&& 1\end{matrix} && \LARGE{(0)} \\
& \lambda \\
\LARGE{(0)} && \begin{matrix}1\\&\ddots \\  && 1 \\  &&& 1\end{matrix}
\end{array}
\right]
$$
such that
$$
\begin{align*}
E^{(b)}_{i,i}&= \lambda\ne0\\
E^{(b)}A &= \text{multiply }i\text{th row of }A\text{ by }\lambda
\end{align*}
$$
3) 
$$
E^{(c)}=
\left[
\begin{array}{cr}
\begin{matrix}1 \\ & 1 \\ && \ddots\end{matrix} & \LARGE{(0)} \\
\lambda & \begin{matrix}1 \\ & 1\end{matrix}
\end{array}
\right]
$$
such that
$$
\begin{align*}
E^{(c)}_{i,j}&= \lambda\\
E^{(c)}A&= i\text{th row of }A\text{ is replaced by }A_{i}+\lambda A_{j}
\end{align*}
$$

## Theorems
**Theorem:** If $A$ is invertible, there exists a sequence of elementary matrices $\{E_{1},\dots,E_{m}\}$ such that $E_{m}E_{m-1}\cdots E_{1}A=I$.