High level synchronization constructs
- Provided at language level

Monitor is an Abstract Data Type - a class
- Encapsulates private data
- Public methods provided to operate on data

Only one process can be active within a monitor at any given time.

### Execution
- At most one process executing inside the monitor
- Monitor has an entry queue of processes
- When executing process exits, a new process is selected from the entry queue