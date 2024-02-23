Thread synchronization mechanism

### Operations
- wait: decrement value, locks if 0
- signal: increment value

### Usage
- initialize
- wait/signal

## Binary Semaphores
Can only have value 0 or 1


## Implementation Issues
- How to implement wait list?
- How to atomically execute wait and signal?
	- Critical section problem