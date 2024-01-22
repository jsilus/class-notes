## What is a process?
- A program in execution
- Basic unit of work
- Enables multiprogramming
	- Multiple programmings sharing the CPU
- Provides a protection boundary

## Programs vs Processes
#### Program
- Passive entity
- Set of instructions
- Binary file
#### Process
- Active entity
- Executing instructions
- Live set of CPU resources

The program is the code itself, the process is the running
## Processes in [[UNIX]]
- Parent-child relation
	- Each process has a parent
- $\text{init}$ process
	- $\text{pid}=1$
- Processes then exist as a tree

>[!tip] Related C Functions
>```c
>pid_t get_pid();  //get this pid
>pid_t get_ppid(); //get parent pid
>pid_t fork();     //process (almost) duplicates itself and then runs a child
>```

