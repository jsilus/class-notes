Generalization of a process and thread

Creation with `clone()`
- Specify what to share between parent and child and what to copy
- E.g. memory space, open files, signal handlers

`fork()` and thread creation are wrappers around `clone()`