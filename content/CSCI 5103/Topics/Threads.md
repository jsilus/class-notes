Expansion on [[Thread]] and [[Pthreads]] from 4061

## New Content
### Concurrency vs Parallelism
- **Concurrency:** Multiple threads make progress and execution is interleaved
- **Parallelism:** Threads can run simultaneously on multiple CPUs
	- **Data parallelism:** Same operation executed on different parts of input data
	- **Task parallelism:** Different operations executed by different threads
	- [[Amdahl's Law]]

### User vs. Kernel Threads
- User threads are more light-weight and efficient
	- No kernel scheduling, context-switching
- User threads are more flexible
	- Application-specific scheduling policy, concurrency model
- **Blocking I/O Problem**
	- If a single user thread blocks, the whole process blocks
- User threads cannot exploit parallelism of multiprocessors
- One-to-One model
	- Each user thread gets mapped to a kernel thread
- Many-to-Many model
	- Multiple user threads mapped to multiple kernel threads

[[OpenMP]]