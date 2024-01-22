## What is it?
An abstraction of a process activity.
### Threads share
- Process code, data, heap
- Files
- Signals
### Threads have unique
- Program counter
- Stack
- Registers
- Signal mask
## Where is it?
Exists within a process
All threads run concurrently within the same process
Can take advantage of multiple processors

## Problems
### More complexity
- Order of execution is non-deterministic
- Needs synchronization
- Difficult to debug
### Scalability
- Stacks could still use up a lot of memory
- Context switch has overhead
### Portability issues
- Different implementations