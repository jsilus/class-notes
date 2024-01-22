### How are they different from files?
- Sequential read/write
- Nameless
- Finite-sized buffer
- No disk I/O
- Disappear as soon as all ends are closed

```c
// create a pipe with 2 file descriptors
int pipe(int fds[2]);
// fds[0] will be made for reading
// fds[1] will be made for writing
```

These [[File Descriptors|file descriptors]] can be shared between processes only via `fork()`.

### Read on `fds[0]` returns
- data if available
- blocks until data if none is available
- EOF if write is closed

### Writes on `fds[1]`
- writes into pipe
- blocks if buffer is full
- receives `SIGPIPE` if read is closed

>[!warning] No `lseek()` on pipes

## FIFOs
- Named pipes, exist in file system
- Link unrelated processes
- Last longer
