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
(AB)^{-1}&\overset{ ? }{ = } B^{-1}A^{-1}\\
B(AB)^{-1}&=BB^{-1}A^{-1}\\
&=IA^{-1}\\
&=A^{-1}\\
(AB)(AB)^{-1}&=AA^{-1}\\
I&= I
\end{align*}
$$
This shows equality.
## 3.
Let us assume that two lower triangle matrices exist $L_{1}$ and $L_{2}$ such that $A=L_{1}L_{1}^{\top}=L_{2}L_{2}^{\top}$. Then,

$$
\begin{align}
L_{1}L_{1}^{\top}&=L_{2}L_{2}^{\top} \\
L_{1}^{-1}L_{1}L_{1}^{\top}(L_{1}^{\top})^{-1} & =L_{1}^{-1}L_{2}L_{2}^{\top}(L_{1}^{\top})^{-1} \\
I & =L_{1}^{-1}L_{2}L_{2}^{\top}(L_{1}^{\top})^{-1} \\
I & =L_{1}^{-1}L_{2}(L_{1}^{-1}L_{2})^{\top}
\end{align}
$$
Because $L_{1}$ and $L_{2}$ are lower triangular matrices, their inverses are, and so is $L_{1}^{-1}L_{2}$. Then, the bottom equation can only be true if $L_{1}^{-1}L_{2}=I$, which is equivalent to saying $L_{1}=L_{2}$.
## 4.
#### a.
If $U$ is an $n\times n$ matrix, we can attach an $n\times n$ identity matrix to it, reduce it, and then the right hand side will be the inverse. This is illustrated below
$$
\begin{align}
\left[
\begin{array}{c:c}
U & I
\end{array}
\right]
=
&\left[
\begin{array}{c c c c : c c c c}
u_{11} & u_{12} & \cdots & u_{1n} & 1 & 0 & \cdots & 0 \\
0 & u_{22} & \cdots & u_{2n} & 0 & 1 & \cdots & 0 \\
\vdots & \vdots & \ddots & \vdots & \vdots & \vdots & \ddots & \vdots \\
0 & 0 & \cdots & u_{nn} & 0 & 0 & \cdots & 1
\end{array}
\right] \\ \\
\overset{ \text{RREF} }{ \leadsto }
&\left[ 
\begin{array}{c c c c : c c c c}
1 & 0 & \cdots & 0 & u'_{11} & u'_{12} & \cdots & u'_{1n} \\
0 & 1 & \cdots & 0 & 0 & u'_{22} & \cdots & u'_{2n} \\
\vdots & \vdots & \ddots & \vdots & \vdots & \vdots & \ddots & \vdots \\
0 & 0 & \cdots & 1 & 0 & 0 & \cdots & u'_{nn}
\end{array}
\right]
=
\left[
\begin{array}{c:c}
I & \boxed{U^{-1}}
\end{array}
\right]
\end{align}
$$

#### b.
This will be the same process for the unit lower triangle matrix. If the matrix is $n\times n$, clearing out the first column will take $n-1$ multiplications for the $L$ matrix and $n-1$ multiplications for the $I$ matrix for a total of $2n-2$ multiplications. The second column will take $2n-4$ multiplications, as there is one fewer row. This pattern continues until we no longer need to multiply. Because this is a unit triangle matrix, we don't need to worry about the diagonal at all. This can be used to create the following equation
$$
\begin{align}
&\quad\sum_{ i = 1 }^{n} (2n-2i) \\
&=2n^{2}-2\sum_{ i = 1 }^{n} i \\
&=2n^{2}-n^{2}-n \\
&=\boxed{n^{2}-n\quad\text{multiplications}}
\end{align}
$$
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
## 6
#### Code (Matlab)
```m
A = [3.3330,15920,10.333,7953;2.2220,16.710,9.6120,0.965;-1.5611,5.1792,-1.6855,2.714]

A = spp(A)
A = reduce(A)
A(:,4)

function A = pivot_row(A,i)
    max_val = -inf;
    max_row = -inf;
    for j = i:height(A)
        val = abs(A(i,j)) ./ sum(A(j,:));
        if val > max_val
            max_val = val;
            max_row = j;
        end
    end
    A([i max_row],:) = A([max_row i],:);
end

function A = eliminate_column(A,j)
    for i = (j+1):height(A)
        c = - A(i,j) ./ A(j,j);
        A(i,:) = A(i,:) + c * A(j,:);
    end
end

function A = spp(A)
    for i = 1:height(A)
        A = pivot_row(A,i);
        A = eliminate_column(A,i);
    end
end

function A = reduce(A)
    for j = height(A):-1:1
        for i = (j-1):-1:1
            c = - A(i,j) ./ A(j,j);
            A(i,:) = A(i,:) + c * A(j,:);
        end
        c = 1 ./ A(j,j);
        A(j,:) = c * A(j,:);
    end
end
```

#### Results
```
A =

   1.0e+04 *

    0.0003    1.5920    0.0010    0.7953
    0.0002    0.0017    0.0010    0.0001
   -0.0002    0.0005   -0.0002    0.0003


A =

   1.0e+04 *

    0.0002    0.0017    0.0010    0.0001
         0    1.5895   -0.0004    0.7952
         0         0    0.0005   -0.0005


A =

    1.0000         0         0    1.0000
         0    1.0000         0    0.5000
         0         0    1.0000   -1.0000


ans =

    1.0000
    0.5000
   -1.0000
```