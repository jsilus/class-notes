- Replace the least recently used page
- Use the past to predict the future

## Implementations
- Counters
	- Counter added to CPU: Incremented on each memory reference
	- Time-of-use field with each page table entry: copied from counter on memory access to page
- Stack
	- Page moved to top of stack on reference

Both are expensive

## LRU-Approximation Algorithms
- Reference bit: bit maintained for each page
	- Set by hardware upon page reference
	- Initially set to 0

### Additional-Reference-Bits Algorithm
- Record reference bit for each frame at regular intervals
- n-bit shift register: reference history of page
	- MSB - most recent reference bit value
	- Can be treated as an unsigned integer
- Pages can be ordered by the integer value
	- FIFO to break tiebreakers

### Second Chance (Clock) Algorithm
- Pages replaced in FIFO order
- If reference bit set for victim page
	- Give it a second chance
	- Reset reference bit

### Enhanced Second Chance
- Consider Dirty bit also
- Order pages by (reference, dirty) pair
	- (0, 0): neither recently used nor modified
	- (0, 1): not recently used, but modified
	- (1, 0): recently used, but not modified
	- (1, 1): recently used and modified