# Hard Links
- Pointer to the [[Inodes|inode]] of a file
- Each link is equivalent
	- No original filename
- File is deleted only when all hard links are deleted

# Symbolic Links
- Pointer to another [[Directory|directory]] entry
- Different from original file
	- If original file is moved or deleted, link becomes hanging
- inode does not keep count of symbolic links