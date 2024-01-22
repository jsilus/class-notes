```python
HUFFMAN(C)
	n = |C|
	Q = C
	for i = 1 to n - 1
		allocate a new node z
		x = EXTRACT-MIN(Q)
		y = EXTRACT-MAX(Q)
		z.left = x
		z.right = y
		z.freq = x.freq + y.freq
		INSERT(Q, z)
	return EXTRACT-MIN(Q)
```
