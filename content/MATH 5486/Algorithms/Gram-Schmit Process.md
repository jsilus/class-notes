Let $A$ is symmetric, [[Positive Definite]] matrix.
$$
\left\langle x,y \right\rangle _{A}=x^{\top}Ay=\left\langle x,Ay \right\rangle =\sum\limits_{ i,j = 1 }^{n} A_{ij}x_{i}x_{j}
$$
Norm $\lVert \cdot \rVert_{A}$ is defined by $\lVert x \rVert_{A}^{2}=\left\langle x,x \right\rangle_{A}$

Apply GS on the standard unit vectors $\{ e^{(1)},e^{(2)},\dots,e^{(n)} \}$ with $\left\langle \cdot,\cdot \right\rangle_{A}$ to find $\{ u^{(1)},\dots,u^{(n)} \}$.

$$
\begin{align}
u^{(i)} & =\frac{v^{(i)}}{\lVert v^{(i)} \rVert _{A}} \\
\text{where} \\
v^{(i)} & =e^{(i)}-\sum\limits_{ j < i }\left\langle e^{(i)},u^{(j)} \right\rangle _{A}u^{(j)}  \\
 & =e^{(i)}-\sum\limits_{ j < i }\left[ Au^{(j)} \right] _{i}u^{(j)}\in \mathbb{R}^{n} 
\end{align}
$$
$u^{(i)}$ is a linear combination of $e^{(1)},e^{(2)},\dots,e^{(n)}$ so $U=\left[ u^{(1)},u^{(2)},\dots,u^{(n)} \right]$ is upper triangular.
