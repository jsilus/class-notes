
$$
\text{If }
\begin{bmatrix}
a_{11} & 0 & 0 & \cdots & 0 \\ 
a_{21} & a_{22} & 0 & \cdots & 0 \\ 
a_{31} & a_{32} & a_{33} & \cdots & 0 \\ 
\vdots \\ 
a_{n1} & \cdots & \cdots & \cdots & a_{nn}
\end{bmatrix}
\begin{bmatrix}
x_{1} \\ x_{2} \\ \vdots \\ x_{n}
\end{bmatrix}
=
\begin{bmatrix}
b_{1} \\ b_{2} \\ \vdots \\ b_{n}
\end{bmatrix}
$$

**lower [[Triangular Matrices|triangular matrix]]**
We can easily solve for $x$ using [[Forward Substitution]].
Solve for $x_{1}$ first, then $x_{2}$, then $\dots$, then $x_{n}$

$$
\text{If }
\begin{bmatrix}
a_{11} & a_{12} & a_{13} & \cdots & a_{1n} \\ 
0 & a_{22} & a_{23} & \cdots & a_{2n} \\ 
0 & 0 & a_{33} & \cdots & a_{3n} \\ 
\vdots \\ 
0 & \cdots & \cdots & 0 & a_{nn}
\end{bmatrix}
\begin{bmatrix}
x_{1} \\ x_{2} \\ \vdots \\ x_{n}
\end{bmatrix}
=
\begin{bmatrix}
b_{1} \\ b_{2} \\ \vdots \\ b_{n}
\end{bmatrix}
$$
**upper [[Triangular Matrices|triangular matrix]]**
We then just do a Backward Substitution.
Solve for $x_{n}$ first, then $x_{n-1}$, then $\dots$, then $x_{1}$.

If $A=LU$ where $L$ is lower triangular and $U$ is upper triangular, then $Ax=b\Rightarrow LUx=b$. Let $z=Ux$. We can then form the system of equations:
$$
\begin{cases}
Lz=b \\
Ux=Z
\end{cases}
$$
$a_{kk}=\sum\limits_{s=1}^{n}l_{ks}u_{sk}=\sum\limits_{s=1}^{k-1}l_{ks}u_{sk}+l_{kk}u_{kk}$
