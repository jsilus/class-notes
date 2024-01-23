- OS runs one process on a CPU at a time
- Selects a process to run when:
	- **Quantum** expires
	- Running process gets blocked or exits
	- A higher priority process becomes runnable


## Context Switch
- Switching between two processes
	- Save state of one process and restore state of another
- Overhead depends on
	- Architecture support
	- Amount of information needed by the OS
#### What is a quantum?
The maximum duration at which a process is allowed to run on the CPU before being replaced by another to achieve multiplexing.