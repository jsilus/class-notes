
```pseudo
\begin{algorithm}
\caption{Merge Sort}
\begin{algorithmic}
\Function{MERGE-SORT}{$A,p,r$}
	\If{$p\ge r$}
		\Return
	\EndIf
	\State $q=\left\lfloor(p+r)/2\right\rfloor$
	\State\Call{MERGE-SORT}{$A,p,q$}
	\State\Call{MERGE-SORT}{$A,q+1,r$}
	\State\Call{MERGE}{A,p,q,r}
\EndFunction
\end{algorithmic}
\end{algorithm}
```

Merge by looking between the two now-sorted halves and picking the smallest element from the front of each until the array is sorted. For more accurate code, see below
```pseudo
\begin{algorithm}
\caption{Merge Helper}
\begin{algorithmic}
\Function{MERGE}{$A,p,q,r$}
	\State $n_{L}=q-p+1$
	\State $n_{R}=r-q$
	\State let $L[0:n_{L}-1]$ and $R[0:n_{R}-1]$ be new arrays
	\For{$i=0$ \To $n_{L}-1$}
		\State $L[i]=A[p+i]$
	\EndFor
	\For{$j=0$ \To $n_{R}-1$}
		\State $R[j]=A[q+j+1]$
	\EndFor
	\State $i=0$
	\State $j=0$
	\State $k=p$
	\While{$i<n_{L}$ and $j<n_{R}$}
		\If{$L[i]\le R[j]$}
			\State $A[k]=L[i]$
			\State $i=i+1$
		\Else
			\State $A[k]=R[j]$
			\State $j=j+1$
		\EndIf
		\State $k=k+1$
	\EndWhile
	\While{$i<n_{L}$}
		\State $A[k]=L[i]$
		\State $i=i+1$
		\State $k=k+1$
	\EndWhile
	\While{$j<n_{R}$}
		\State $A[k]=R[j]$
		\State $j=j+1$
		\State $k=k+1$
	\EndWhile
\EndFunction
\end{algorithmic}
\end{algorithm}
```
### Timing
$$
T(n)=2T\left(\left\lfloor\frac{n}{2}\right\rfloor\right)+\Theta(n)
$$
**Guess:** $T(n)=O(n\lg n)$
**Prove:** $\exists c>0\text{ such that }T(n)\le cn\lg n,\forall n\ge n_{0}$
$$
\begin{align*}
T(n)&= 2T\left(\left\lfloor\frac{n}{2}\right\rfloor\right)+\Theta(n)\\
&= 2c\left\lfloor\frac{n}{2}\right\rfloor\lg\left\lfloor\frac{n}{2}\right\rfloor+\Theta(n)\\
&\le 2c\left(\frac{n}{2}\right)\lg\left(\frac{n}{2}\right)+\Theta(n)\\
&= cn\lg\left(\frac{n}{2}\right)+\Theta(n)\\
&= cn\lg n-cn\lg2+\Theta(n)\\
&\le cn\lg n
\end{align*}
$$