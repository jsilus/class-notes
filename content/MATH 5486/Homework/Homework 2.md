## 1.
$\lVert x \rVert_{\infty}=1$ means that the maximum absolute value in $x$ is $1$. If we maximize this, we get the vector 
$$
x=
\begin{bmatrix}
\pm1 \\
\pm1 \\
\vdots \\
\pm1
\end{bmatrix}
$$
Then,
$$
Ax=
\begin{bmatrix}
\pm a_{11}\pm a_{12}\pm\cdots\pm a_{1n} \\
\pm a_{21}\pm a_{22}\pm\cdots\pm a_{2n} \\
\vdots \\
\pm a_{n1}\pm a_{n2}\pm\cdots\pm a_{nn}
\end{bmatrix}
$$
So, by the definition of the $l_{\infty}\text{-norm}$ for vectors, $\lVert Ax \rVert_{\infty}$ is the maximum absolute sum of rows of $A$. 
This is equivalent to saying $\lVert A \rVert_{\infty}=\max\limits_{1\leq j\leq n}\sum\limits_{ j = 1 }^{n}\left| a_{ij} \right|$
## 2.
$\lVert x \rVert_{1}=1$ means that the sum of all absolute values in $x=1$. Then, 
$$
Ax=
\begin{bmatrix}
x_{1}a_{11}+x_{2}a_{12}+\cdots+x_{n}a_{1n} \\
x_{1}a_{21}+x_{2}a_{22}+\cdots+x_{n}a_{2n} \\
\vdots \\
x_{1}a_{n1}+x_{2}a_{n2}+\cdots+x_{n}a_{nn}
\end{bmatrix}
=
x_{1}
\begin{bmatrix}
a_{11} \\
a_{21} \\
\vdots \\
a_{n1}
\end{bmatrix}
+
x_{2}
\begin{bmatrix}
a_{12} \\
a_{22} \\
\vdots \\
a_{n2}
\end{bmatrix}
+
\cdots
+
x_{n}
\begin{bmatrix}
a_{1n} \\
a_{2n} \\
\vdots \\
a_{nn}
\end{bmatrix}
$$
where $|x_{1}|+|x_{2}|+\cdots+|x_{n}|=1$. The way to maximize this would be to find the column vector such that the absolute sum of its elements is greater than any other and give it an $x_{i}=1$. Any other combination would be smaller, so we wouldn't be maximizing this vector norm.

This is equivalent to saying $\lVert A \rVert_{1}=\max\limits_{1\leq j\leq n}\sum\limits_{ i = 1 }^{n}\left| a_{ij} \right|$
## 3.
The definition of the characteristic polynomial of a matrix is $p(\lambda)=\det(A-\lambda I)$. By factoring the characteristic polynomial, we find the eigenvalues, so
$$
p(\lambda)=(\lambda_{1}-\lambda)(\lambda_{2}-\lambda)(\lambda_{3}-\lambda)\cdots(\lambda_{n}-\lambda)
$$
$\det(A)=\det(A-\lambda I)$ when $\lambda=0$, so
$$
\det(A)=\lambda_{1}\cdot \lambda_{2}\cdot \lambda_{3}\cdots \lambda_{n}=\prod\limits_{ i = 1 }^{n} \lambda_{i}
$$
## 4.
As shown in 3., $0$ is an eigenvalue of $A$ if and only if $\det(A)=0$, so $A$ is singular.
## 5.
$$
A=D+L+U=
\begin{bmatrix}
a_{11} & 0 & \cdots & 0 \\
0 & a_{22} & \cdots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \cdots & a_{nn}
\end{bmatrix}
+
\begin{bmatrix}
0 & 0 & 0 & \cdots & 0 \\
a_{21} & 0 & 0 & \cdots & 0 \\
a_{31} & a_{32} & 0 & \cdots & 0 \\
\vdots & \vdots & \vdots & \ddots & 0 \\
a_{n1} & a_{n2} & a_{n3} & \cdots & 0
\end{bmatrix}
+
\begin{bmatrix}
0 & a_{12} & a_{13} & \cdots & a_{1n} \\
0 & 0 & a_{23} & \cdots & a_{2n} \\
0 & 0 & 0 & \cdots & a_{3n} \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
0 & 0 & 0 & \cdots & 0
\end{bmatrix}
$$
Because $D$ is a diagonal matrix, we know that
$$
D^{-1}=
\begin{bmatrix}
\frac{1}{a_{11}} & 0 & \cdots & 0 \\
0 & \frac{1}{a_{22}} & \cdots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \cdots & \frac{1}{a_{nn}}
\end{bmatrix}
$$
Now, because $A$ is strictly diagonally dominant, we know that
$$
\forall i,\left| a_{ii} \right|>\sum\limits_{ i \neq j,j=1 }^{n}\left| a_{ij} \right|
$$
This means that our resulting matrix $T=-D^{-1}(L+R)$ has all elements $t_{ij}$ such that $\left| t_{ij} \right|<1$.
Because all of the elements $t_{ij}$ are between $-1$ and $1$, the matrix is convergent, or $\lim\limits_{ k \to \infty }\lVert T^{k} \rVert=0$. By the definition of matrix convergence, $\rho(T)<1$.
## 6.
The coded solution is below
```m
format long

% build A
A = zeros(80, 80);
for i = 1:80
    for j = 1:80
        if j == i
            A(i,j) = 2 * i;
        elseif (j == i + 2 && i <= 78) || (j == i - 2 && i > 2)
            A(i,j) = 0.5 * i;
        elseif (j == i + 4 && i <= 76) || (j == i - 4 && i > 4)
            A(i,j) = 0.25 * i;
        end
    end
end

% build b
b = pi * ones(80,1);

x = SOR_method(A, b, 0.5, 10 ^ -5)

A * x

function x = SOR_method(A, b, omega, tolerance)
    n = size(A);
    x = zeros(80,1);
    condition = inf;

    while condition > tolerance
        for i = 1:n
            sigma = 0;
            for j = 1:n
                if j ~= i
                    sigma = sigma + A(i,j) * x(j);
                end
            end
            x(i) = (1 - omega) * x(i) + omega * (b(i) - sigma) / A(i,i);
        end
        condition = norm(A * x - b, "inf");
    end
end
```

This function provides the following output (matrix and checking)

```
>> SOR

x =

   1.538733491028557
   0.731420793553663
   0.107970295250346
   0.173284260056086
   0.040557454505477
   0.085248920119907
   0.166447274640519
   0.121979349326623
   0.101249841668189
   0.090457320895629
   0.072028951707000
   0.070263509222459
   0.068754676962243
   0.063243667336616
   0.059711409501251
   0.055708938127458
   0.051874900115763
   0.049246022187713
   0.046778323585054
   0.044483599270502
   0.042465464724744
   0.040534983256075
   0.038769084771073
   0.037178760874653
   0.035705037148431
   0.034348000096121
   0.033092019685269
   0.031919152484191
   0.030826859361070
   0.029807141135225
   0.028852073020788
   0.027956677190011
   0.027115034501984
   0.026322234048302
   0.025574406440651
   0.024867763187737
   0.024199012173094
   0.023565240337037
   0.022963742534479
   0.022392118846320
   0.021848209071683
   0.021330043002215
   0.020835841710553
   0.020363984644338
   0.019912990918557
   0.019481508952160
   0.019068301039217
   0.018672232352786
   0.018292258407282
   0.017927421274065
   0.017576838432862
   0.017239683461660
   0.016915206257738
   0.016602701736946
   0.016301487384580
   0.016011028673055
   0.015730770499763
   0.015460105772846
   0.015198771512914
   0.014945944250749
   0.014700761742967
   0.014464075895288
   0.014234611152000
   0.014012566871107
   0.013802425697838
   0.013593641897360
   0.013384175259367
   0.013187636555448
   0.012971069734631
   0.012785967659938
   0.012702720742650
   0.012526644453497
   0.012376527473534
   0.012209624930677
   0.011290071796643
   0.011141018963692
   0.012173138893239
   0.012017476063143
   0.015428950226704
   0.015237953862821


ans =

   3.141591493308657
   3.141591894330691
   3.141593645783517
   3.141592857122451
   3.141597635652862
   3.141595041260952
   3.141586063750454
   3.141590091845211
   3.141592464393609
   3.141592179299304
   3.141598171411250
   3.141595013094737
   3.141589359669792
   3.141591517666367
   3.141591395467769
   3.141591970245130
   3.141594937339232
   3.141593563006435
   3.141592110010411
   3.141592520268532
   3.141591976815598
   3.141592347425093
   3.141593144815212
   3.141592832737852
   3.141592688662175
   3.141592687206698
   3.141592480977855
   3.141592582806203
   3.141592706645407
   3.141592669309718
   3.141592684642062
   3.141592668472543
   3.141592628401576
   3.141592644220470
   3.141592653768056
   3.141592652780139
   3.141592659905294
   3.141592656241820
   3.141592651436740
   3.141592652811388
   3.141592652590622
   3.141592653026474
   3.141592655314989
   3.141592654888173
   3.141592653678316
   3.141592653709757
   3.141592648528776
   3.141592648568823
   3.141592656389193
   3.141592656381492
   3.141592671513374
   3.141592671634878
   3.141592630500746
   3.141592630360733
   3.141592609889439
   3.141592609630020
   3.141592759561557
   3.141592760107814
   3.141592693098922
   3.141592693296262
   3.141592345935246
   3.141592344681379
   3.141592821200754
   3.141592821765576
   3.141593160599340
   3.141593162189045
   3.141591890978237
   3.141591889007282
   3.141592477654849
   3.141592477195075
   3.141593931590409
   3.141593933910289
   3.141591746278875
   3.141591745053197
   3.141592088925887
   3.141592088256322
   3.141593891323152
   3.141593892232446
   3.141592040085806
   3.141592039850846
```