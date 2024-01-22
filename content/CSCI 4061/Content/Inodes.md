Kernel structures that contain file information
- File properties
- Direct Data Block pointers
- Single Indirect ptr
- Double Indirect ptr
- Triple Indirect ptr

### Block Pointers
Files are stored in blocks distributed around the drive. The pointers point to the blocks in order to write the file in order.

The reason we have direct pointers first and then increasingly indirect pointers is to benefit from the [[Zipf Distribution]].

### File Properties
- File type
- Size
- Owner, permissions
- Times
	- Last access
	- Last modification
	- Last status change
- Number of hard links

## Relevant C Functions
```c
// stat struct contains file properties and inode number
int stat(char *path, struct stat *buf);
```