$PAx=Pb$ where $P$ is a permutation matrix

$$
s_{i}=\max_{1\le j\le n}|a_{ij}|\Rightarrow s_{1},\dots,s_{n}
$$
Select
$$
\begin{align*}
p_{1}&= \underset{1\le i\le n}{\text{argmax}}\frac{|a_{i1}|}{s_{1}}\\
p_{2}&= \underset{i\in\{1,\dots,n\}\setminus\{p_{1}\}}{\text{argmax}}\frac{|a_{i2}|}{s_{2}}\\
p_{3}&= \underset{i\in\{1,\dots,n\}\setminus\{p_{1},p_{2}\}}{\text{argmax}}\frac{|a_{i3}|}{s_{3}}\\
\vdots\\
p_{n}
\end{align*}
$$
$\{p_{1},p_{2},\dots,p_{n}\}\Rightarrow P$

## Example
$$
\begin{align*}
A&= \begin{bmatrix}2 & 3 & -6 \\ 1 & 6 & 8 \\ 3 & -2 & 1\end{bmatrix}\\
s&= \{6,8,3\}\\
p_{1}&= \text{argmax}\left| \frac{2}{6}, \frac{1}{6}, \frac{3}{6}\right|=3\\
p_{2}&= \text{argmax}\left| \frac{3}{8}, \frac{6}{8}\right|=2\\
p_{3}&= 1\\
\therefore P&= (1,2,3)\rightarrow(3,2,1)
\end{align*}
$$
