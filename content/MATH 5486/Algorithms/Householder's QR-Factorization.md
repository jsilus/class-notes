**Object:** Factor $A\in \mathbb{R}^{n\times n}$ into a product $A=QR$ where $Q\in \mathbb{R}^{n\times n}$ is unitary and $R$ is upper triangular.

**Step 1:** determine a vector $v\in \mathbb{R}^{m}$ so that $I-vv^{\top}$ is unitary and $(I-vv^{\top})A$ looks like $R$. Denote $A_{1}$ as the first column of $A$. We need $(I-vv^{\top})A_{1}=\beta e^{(1)}$

*Lemma:* Let $x,y$ be two vectors such that $\lVert x \rVert_{2}=\lVert y \rVert_{2}$. Then, there exists a unitary matrix $U$ of the form $I-vv^{\top}$ such that $Ux=y$.

From proof: $v=\alpha(x-y)$, $\alpha=\frac{\sqrt{ 2 }}{\lVert x-y \rVert_{2}}$


$$
\begin{align}
\beta&\leftarrow -\frac{a_{11}}{\left| a_{11} \right| }\lVert A_{1} \rVert _{2} \\
y&\leftarrow A_{1}-\beta e^{(1)} \\
\alpha&\leftarrow \frac{\sqrt{ 2 }}{\lVert y \rVert _{2}} \\
v&\leftarrow \alpha y \\
u&=I-vv^{\top}
\end{align}
$$
