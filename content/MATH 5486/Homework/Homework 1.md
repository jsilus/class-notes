## 1.
$$
\left[
\begin{array}{c:c}
A_{1} & A_{2} & \cdots & A_{n}
\end{array}
\right]
\left[
\begin{array}{c}
x_{1} \\ x_{2} \\ \vdots \\ x_{n}
\end{array}
\right]
=
A_{1}x_{1}+A_{2}x_{2}+\cdots+A_{n}x_{n}
=
\left[
\begin{array}{c}
b_{1} \\ b_{2} \\ \vdots \\ b_{n}
\end{array}
\right]
$$
can otherwise be phrased as $b$ is a linear combination of the column vectors of $A$. This is equivalent to saying that $b$ is within the $\text{span}(A_{1},A_{2},\dots,A_{n})$. Note that this equivalence works both ways. Then, the system has a solution if and only if $b$ is in the linear span of $\{A_{1},A_{2},\dots,A_{n}\}$.

Assume that $\{A_{1},A_{2},\dots,A_{n}\}$ is linearly independent and the system has more than one solution. Let two of these solutions be $\vec{x}=\{x_{1},x_{2},\dots,x_{n}\}$ and $\vec{y}=\{y_{1},y_{2},\dots,y_{n}\}$. This means that
$$
\begin{align*}
A_{1}x_{1}+A_{2}x_{2}+\cdots+A_{n}x_{n}&= b\\
A_{1}y_{1}+A_{2}y_{2}+\cdots+A_{n}y_{n}&= b\\
\exists i,1\le i\le n\,\,\,\text{ s.t.}\,\,\, x_{i}\ne y_{i}
\end{align*}
$$
We can subtract these two equations to get
$$
A_{1}(x_{1}-y_{1})+A_{2}(x_{2}-y_{2})+\cdots+A_{n}(x_{n}-y_{n})=\vec{0}
$$
Because $\exists i,1\le i\le n\,\,\,\text{s.t.}\,\,\,x_{i}\ne y_{i}$, at least one of the elements $x_{i}-y_{i}\ne0$. But, because the system is linearly independent, all of these should be 0. This causes a contradiction, therefore the system can have at most one solution.
## 2.
Because for any nonzero matrix $A$, $AA^{-1}=I$, we can simply multiply on the left hand side for this. 
$$
\begin{align*}
(AB)^{-1}&= B^{-1}A^{-1}\\
B(AB)^{-1}&= BB^{-1}A^{-1}\\
&= IA^{-1}\\
&= A^{-1}\\
(AB)(AB)^{-1}&= AA^{-1}\\
I&= I
\end{align*}
$$
This shows equality.
## 3.
Assume that there is more than one solution. We will call two of these $L_{1}$ and $L_{2}$, such that 
$$
\begin{align*}
A&= L_{1}L_{1}^{\top}\\
A&= L_{2}L_{2}^{\top}\\
L_{1}&\ne L_{2}
\end{align*}
$$
$$
A=LL^{\top}=
\begin{bmatrix}
l_{11} & 0 & \cdots & 0 \\ 
l_{21} & l_{22} & \cdots & 0 \\ 
\vdots & \vdots & \ddots & \vdots \\ 
l_{n1} & l_{n2} & \cdots & l_{nn}
\end{bmatrix}
\begin{bmatrix}
l_{11} & l_{21} & \cdots & l_{n1} \\ 
0 & l_{22} & \cdots & l_{n2} \\ 
\vdots & \vdots & \ddots & \vdots \\ 
0 & 0 & \cdots & l_{nn}
\end{bmatrix}
=
\begin{bmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\ 
a_{21} & a_{22} & \cdots & a_{2n} \\ 
\vdots & \vdots & \ddots & \vdots \\ 
a_{n1} & a_{n2} & \cdots & a_{nn}
\end{bmatrix}
$$
Here, we can notice a pattern
$$
\begin{align*}
a_{11}&= l_{11}^{2}\\
a_{1j}&= l_{11}l_{j1}\\\\
a_{21}&= l_{21}l_{11}\\
a_{22}&= l_{21}^{2}l_{22}^{2}\\
a_{2j}&= l_{21}l_{j1}+l_{22}l_{j2}\\\\

\end{align*}
$$
## 4.
#### a.
$$

$$
#### b.

## 5.
#### Method 1
We can calculate $U$ easily with Gaussian elimination.
$$
\begin{align}
\left[
\begin{array}{c c c : c}
-1 & 1 & -4 & 0 \\
2 & 2 & 0 & 1 \\
3 & 3 & 2 & \frac12
\end{array}
\right]
\overset{r_{2}:=r_{2}+2r_{1}}{\rightarrow}
\left[
\begin{array}{c c c : c}
-1 & 1 & -4 & 0 \\
0 & 4 & -8 & 1 \\
3 & 3 & 2 & \frac12
\end{array}
\right]\\\\
\overset{r_{3}:=r_{3}+3r_{1}}{\rightarrow}
\left[
\begin{array}{c c c : c}
-1 & 1 & -4 & 0 \\
0 & 4 & -8 & 1 \\
0 & 6 & -10 & \frac12
\end{array}
\right]
\overset{r_{3}:=r_{3}-\frac32r_{2}}{\rightarrow}
\left[
\begin{array}{c c c : c}
-1 & 1 & -4 & 0 \\
0 & 4 & -8 & 1 \\
0 & 0 & 2 & -1
\end{array}
\right]
\end{align}
$$
Then, let
$$
U=
\left[
\begin{array}{c c c}
-1 & 1 & -4\\
0 & 4 & -8\\
0 & 0 & 2
\end{array}
\right]
,\quad d=
\left[
\begin{array}{c}
0 \\
1 \\
-1
\end{array}
\right]
$$
Next, we need to find an $L$ such that $LU=A$.
We know that $Ux=d$
We can use backward substitution to find $l_{21}=-2,l_{31}=-3,l_{32}=\frac32$ in the following equations
$$
\begin{align*}
d_{1}&= b_{1}\\
d_{2}&= b_{2}-l_{21}d_{1}\\
d_{3}&= b_{3}-l_{31}d_{1}-l_{32}d_{2}
\end{align*}
$$
From this, we can populate a matrix $L$, where
$$
L=
\left[
\begin{array}{c c c}
1 & 0 & 0\\
-2 & 1 & 0\\
-3 & \frac{3}{2} & 1
\end{array}
\right]
$$
With these matrices, $A=LU$.
#### Method 2
First, we start with $P=I$ and we record our swaps within it. We choose our swaps so that the pivot is the relative largest within its row.
$$
\begin{align}
\left[
\begin{array}{c c c}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1
\end{array}
\right]
\left[
\begin{array}{c c c : c}
-1 & 1 & -4 & 0 \\
2 & 2 & 0 & 1 \\
3 & 3 & 2 & \frac12
\end{array}
\right]
\overset{\text{swap }r_{1},r_{2}}{\rightarrow}
\left[
\begin{array}{c c c}
0 & 1 & 0 \\
1 & 0 & 0 \\
0 & 0 & 1
\end{array}
\right]
\left[
\begin{array}{c c c : c}
2 & 2 & 0 & 1 \\
-1 & 1 & -4 & 0 \\
3 & 3 & 2 & \frac12
\end{array}
\right]\\\\
\overset{r_{2}:=r_{2}+\frac12r_{1}}{\rightarrow}
\left[
\begin{array}{c c c}
0 & 1 & 0 \\
1 & 0 & 0 \\
0 & 0 & 1
\end{array}
\right]
\left[
\begin{array}{c c c : c}
2 & 2 & 0 & 1 \\
0 & 2 & -4 & \frac12 \\
3 & 3 & 2 & \frac12
\end{array}
\right]
\overset{r_{3}:=r_{3}-\frac32r_{1}}{\rightarrow}
\left[
\begin{array}{c c c}
0 & 1 & 0 \\
1 & 0 & 0 \\
0 & 0 & 1
\end{array}
\right]
\left[
\begin{array}{c c c : c}
2 & 2 & 0 & 1 \\
0 & 2 & -4 & \frac12 \\
0 & 0 & 2 & -1
\end{array}
\right]
\end{align}
$$
Using this method, we've recorded that
$$
P=
\left[
\begin{array}{c}
0 & 1 & 0 \\
1 & 0 & 0 \\
0 & 0 & 1
\end{array}
\right]
\quad\text{and}\quad
U=
\left[
\begin{array}{c}
2 & 2 & 0 \\
0 & 2 & -4 \\
0 & 0 & 2
\end{array}
\right]
$$
With backward substitution, we find that
$$
L=
\left[
\begin{array}{c}
1 & 0 & 0 \\
-\frac12 & 1 & 0 \\
\frac32 & 0 & 1
\end{array}
\right]
$$
With these matrices, $PA=LU$.
## 6.