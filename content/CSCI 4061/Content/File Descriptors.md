## Duplicate File Descriptors
```c
# creates a copy of fd
int dup(int fd);
# creates a copy of fd1 onto fd2, close fd2 if open
int dup2(int fd1, int fd2);
```

### How to redirect to stdin
```c
// open desired file
fd = open(file1, ...);
// duplicate stdin to the file
newfd = dup2(file1, STDIN_FILENO);
// now execute the desired command
```

