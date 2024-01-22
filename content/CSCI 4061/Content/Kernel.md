Core of the operating system
Provides main functionality
## What services does the OS provide?
- Allows different applications to execute concurrently
	- Processes
	- Memory management
- Allows access to multiple files, user input, display
	- File system
	- File I/O
- Allows parallelism and data sharing
	- Threads
	- Synchronization
- Enables communication across machines
	- Networking
	- Sockets
# Key Questions
1. How does the OS protect the hardware from applications?
2. How do applications get access to desired resources?

## Hardware Protection
Hardware protection is maintained by dividing up system protections
### Kernel Mode
- OS runs in kernel mode: hardware-enabled
- Higher privileges than user mode. Access to:
	- hardware resources
	- protected memory
	- OS data structures
### Hardware-OS Interactions
- We worry about hardware abstractions
- Asynchronous events and concurrency
### User Mode
- Applications, utilities, shell run in user mode
- Restricted access to
	- System resources
	- Kernel data structures
- Protection boundaries

### OS-Application Interactions
- [[Shell|Shells]] and User Interfaces
	- Allow users to interact with the OS
- [[Libraries]]
	- Allow programs to use common services
- [[System Call]]
	- Direct conduit into the OS
	- Required for user mode programs to access kernel protected actions
- Signals
	- OS interacting with user programs