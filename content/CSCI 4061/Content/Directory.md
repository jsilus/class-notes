
- Special file
- List of entries about files and directories
- Means that different operations are required as compared to regular files

Filenames are stored within directories, **not** the files themselves
For this reason, [[Links]] can be used to have two names for the same file

## Relevant C Functions
```c
// returns a directory stream
DIR *opendir(char *dirname);

// returns the next directory entry
// each entry contains the filename and the inode number
struct dirent *readdir(DIR *dirp)

// close directory
int closedir(DIR *dirp);

// reposition to beginning
void rewinddir(DIR *dirp);

// NO writedir()
// file creation/deletion modifies them instead
```