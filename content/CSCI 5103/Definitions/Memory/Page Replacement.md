- If no free frame, replace an existing page
	- This is the **victim frame**; the frame to be replaced
- Overhead
	- Writing victim frame to disk
	- Reading frame from disk

## Reducing Overhead
- Dirty Bit
	- Set by hardware upon page modification
	- Initially set to 0 when page read in

## Page Replacement Algorithms
- How to select a victim frame?
- Goal: minimize number of page faults