## 1.
We proceed directly.
$$
\begin{align}
&\quad\,\, K(\lambda A) \\
&=\lVert \lambda A \rVert \lVert (\lambda A^{-1}) \rVert &\text{(by definition of cond. num.)}\\
&=\lVert \lambda A \rVert \lVert \frac{1}{\lambda}A^{-1} \rVert & \text{(by properties of inv. matr.)}\\
&=\lvert \lambda \rvert \lVert A \rVert \left\lvert  \frac{1}{\lambda}  \right\rvert \lVert A^{-1} \rVert & \text{(algebra)}\\
&=\lVert A \rVert \lVert A^{-1} \rVert & \text{(algebra)}\\
&=K(A) & \text{(by definition of cond. num.)}
\end{align}
$$
## 2.
We proceed directly.
$$
\begin{align}
&\quad\,\,\frac{\lVert x-\tilde{x} \rVert }{\lVert x \rVert } \\
&=\frac{\lVert A \rVert }{\lVert A \rVert }\cdot \frac{\lVert x - \tilde{x} \rVert }{\lVert x \rVert } & \text{(algebra)}\\
&\leq \frac{\lVert Ax-A\tilde{x} \rVert }{\lVert Ax \rVert } & \text{(properties of norms)} \\
&=\frac{\lVert b-\tilde{b} \rVert }{\lVert b \rVert } & \text{(problem)}\\
&\leq K(A) \frac{\lVert b-\tilde{b} \rVert }{\lVert b \rVert } & (K(A)\geq 1)
\end{align}
$$
## 3.
We use the following process
$$
\begin{cases}
r^{(0)} & =b-Ax^{(0)} \\
Ae^{(0)} & =r^{(0)} \\
x^{(1)} & =x^{(0)}+e^{(0)}
\end{cases} \\ \\
$$
With plugged in values,
$$
r^{(0)}=b-A\tilde{x}= 
\begin{bmatrix}
3 \\
3+\delta
\end{bmatrix}
-
\begin{bmatrix}
1 & 2 \\
1+\delta & 2
\end{bmatrix}
\begin{bmatrix}
3 \\
0
\end{bmatrix}
=
\begin{bmatrix}
3 \\
3+\delta
\end{bmatrix}
-
\begin{bmatrix}
3 \\
3+3\delta
\end{bmatrix}
=
\begin{bmatrix}
0 \\
-2\delta
\end{bmatrix}
$$
$$
Ae^{(0)}=r^{(0)}=\begin{bmatrix}
0 \\
-2\delta
\end{bmatrix}
$$
$$
x^{(1)}=\tilde{x}+e^{(0)}=
\begin{bmatrix}
3 \\
0
\end{bmatrix}
+
\begin{bmatrix}
0 \\
-2\delta
\end{bmatrix}
=
\boxed{\begin{bmatrix}
3 \\
-2\delta
\end{bmatrix}}
$$
## 4.
We proceed directly.
$$
\begin{align}
&\quad\,\, g(x^{(k+1)}) \\
&= g(x^{(k)}+t_{k}v^{(k)})\\
&= \left\langle x^{(k)}+t_{k}v^{(k)},A(x^{(k)}+t_{k}v^{(k)}) \right\rangle -2\left\langle x^{(k)}+t_{k}v^{(k)},b \right\rangle \\
&= \underbrace{ \left\langle x^{(k)},Ax^{(k)} \right\rangle-2\left\langle x^{(k)},b \right\rangle }_{ g(x^{(k)}) } + \left\langle x^{(k)},t_{k}Av^{(k)} \right\rangle +\left\langle t_{k}v^{(k)},Ax^{(k)} \right\rangle +\left\langle t_{k}v^{(k)},t_{k}Av^{(k)} \right\rangle -2\left\langle t_{k}v^{(k)},b \right\rangle  \\
&= g(x^{(k)})+ \left\langle x^{(k)},t_{k}Av^{(k)} \right\rangle +\left\langle t_{k}v^{(k)},Ax^{(k)} \right\rangle +\left\langle t_{k}v^{(k)},t_{k}Av^{(k)} \right\rangle -2\left\langle t_{k}v^{(k)},b \right\rangle \\
&= g(x^{(k)})+t_{k}\left( \left\langle x^{(k)},Av^{(k)} \right\rangle +\left\langle v^{(k)},Ax^{(k)} \right\rangle -2\left\langle v^{(k)},b \right\rangle+t_{k}\left\langle v^{(k)},Av^{(k)} \right\rangle   \right)
\end{align}
$$
Note at this point that
$$
- \frac{\lVert r^{(k)} \rVert ^{4}}{\left\langle r^{(k)},Ar^{(k)} \right\rangle }=- \frac{\left\langle v^{(k)},v^{(k)} \right\rangle ^{2}}{\left\langle v^{(k)},Av^{(k)} \right\rangle }=t_{k}\left(-\left\langle v^{(k)},v^{(k)} \right\rangle \right)
$$
Then, by showing that
$$
\left\langle x^{(k)},Av^{(k)} \right\rangle +\left\langle v^{(k)},Ax^{(k)} \right\rangle -2\left\langle v^{(k)},b \right\rangle+t_{k}\left\langle v^{(k)},Av^{(k)} \right\rangle=-\left\langle v^{(k)},v^{(k)} \right\rangle
$$
we prove the problem. We first simplify the left side
$$
\begin{align}
&\quad\,\,\left\langle x^{(k)},Av^{(k)} \right\rangle +\left\langle v^{(k)},Ax^{(k)} \right\rangle -2\left\langle v^{(k)},b \right\rangle+t_{k}\left\langle v^{(k)},Av^{(k)} \right\rangle \\
&=\left\langle x^{(k)},Av^{(k)} \right\rangle +\left\langle v^{(k)},Ax^{(k)} \right\rangle -2\left\langle v^{(k)},b \right\rangle +\left\langle v^{(k)},b-Ax^{(k)} \right\rangle  \\
&= \left\langle x^{(k)},Av^{(k)} \right\rangle -\left\langle v^{(k)},b \right\rangle \\
&= \left\langle x^{(k)},Ab \right\rangle -\left\langle x^{(k)},A^{2}x^{(k)} \right\rangle -\left\langle b,b \right\rangle +\left\langle Ax^{(k)},b \right\rangle 
\end{align}
$$
We then simplify the right side
$$
\begin{align}
&\quad\,\,-\left\langle v^{(k)},v^{(k)} \right\rangle  \\
&=-\left\langle b-Ax^{(k)},b-Ax^{(k)} \right\rangle  \\
&=\left\langle Ax^{(k)}-b,b-Ax^{(k)} \right\rangle  \\
&=\left\langle Ax^{(k)},b \right\rangle -\left\langle Ax^{(k)},Ax^{(k)} \right\rangle -\left\langle b,b \right\rangle +\left\langle b,Ax^{(k)} \right\rangle 
\end{align}
$$
These sides are equivalent if and only if $A=A^{\top}$. If this is the case, then the equality is shown to be true, and the proof is complete.
## 5.
**Code:**
```matlab
n = 10;
A = hilb(n)

b = zeros(n, 1);
for i = 1:n
    for j = 1:n
        b(i) = b(i) + A(i, j);
    end
    b(i) = b(i) ./ 3;
end
b

x = conjugate_gradient(A, b, 10^-5)

b_est = A * x

function x = conjugate_gradient(A, b, tolerance)
    x = ones(size(b));
    r = b - A * x;

    while norm(r) > tolerance
        t = norm(r) ^ 2 / dot(r, A * r);
        x = x + t * r;
        r = b - A * x;
    end
end
```

**Output:**
```
A =

  Columns 1 through 5

    1.0000    0.5000    0.3333    0.2500    0.2000
    0.5000    0.3333    0.2500    0.2000    0.1667
    0.3333    0.2500    0.2000    0.1667    0.1429
    0.2500    0.2000    0.1667    0.1429    0.1250
    0.2000    0.1667    0.1429    0.1250    0.1111
    0.1667    0.1429    0.1250    0.1111    0.1000
    0.1429    0.1250    0.1111    0.1000    0.0909
    0.1250    0.1111    0.1000    0.0909    0.0833
    0.1111    0.1000    0.0909    0.0833    0.0769
    0.1000    0.0909    0.0833    0.0769    0.0714

  Columns 6 through 10

    0.1667    0.1429    0.1250    0.1111    0.1000
    0.1429    0.1250    0.1111    0.1000    0.0909
    0.1250    0.1111    0.1000    0.0909    0.0833
    0.1111    0.1000    0.0909    0.0833    0.0769
    0.1000    0.0909    0.0833    0.0769    0.0714
    0.0909    0.0833    0.0769    0.0714    0.0667
    0.0833    0.0769    0.0714    0.0667    0.0625
    0.0769    0.0714    0.0667    0.0625    0.0588
    0.0714    0.0667    0.0625    0.0588    0.0556
    0.0667    0.0625    0.0588    0.0556    0.0526


b =

    0.9763
    0.6733
    0.5344
    0.4489
    0.3894
    0.3450
    0.3102
    0.2822
    0.2591
    0.2396


x =

    0.3336
    0.3292
    0.3422
    0.3370
    0.3295
    0.3254
    0.3256
    0.3296
    0.3366
    0.3459


b_est =

    0.9763
    0.6733
    0.5344
    0.4489
    0.3894
    0.3450
    0.3102
    0.2822
    0.2591
    0.2396

```