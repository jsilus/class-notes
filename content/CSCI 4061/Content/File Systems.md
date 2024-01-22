### Structure
- Files
	- Regular files, device files, FIFOs
- [[Directory|Directories]]
	- Contains information about files
- Links
	- Pseudonyms/nicknames
	- Pointers


```c
// change directory
int chdir(char *path);

// get current working directory
char *getcwd(char *buf, size_t size);
```