An exception called a **page fault** is generated when accessed memory is contained within the swap space.
## Handling
- Find the location of the page on the swap space
- Allocate a physical frame
- Copy the contents of the page from the swap space into the physical frame
- Update the page table
- Restart the faulting instruction