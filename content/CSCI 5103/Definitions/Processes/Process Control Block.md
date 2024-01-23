## What is it?
- Kernel structure maintaining info about a process
- Each process has a unique **PCB**
- Info used by OS to schedule process, find its contents, execute it

### What info is contained?
- Process State
- Registers
- CPU scheduling information
- Memory management info
- I/O status info
- Accounting info

#### Example Linux struct
```c
struct task_struct {
	pid_t pid;
	long state;                  // runnable, stopped, etc.
	struct sched_entity se;      // scheduling info
	struct task_struct *parent;
	struct list_head children;
	struct mm_struct *mm;        // memory management info
	struct files_struct *file;   //open files
	struct timespect start_time;
	...
}
```
