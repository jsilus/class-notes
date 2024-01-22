Bridge the gap between user mode and kernel mode
Kernel API: well-defined, small set of operations
Provide restricted access to the kernel

### Operation of System Calls
1. User program executes a **TRAP** instruction
	- Switches to kernel mode
	- Passes parameters, system call number
2. Kernel looks up system call table
3. System call handler is invoked
4. Results returned to user program
