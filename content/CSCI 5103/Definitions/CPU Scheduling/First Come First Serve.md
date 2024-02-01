- Process scheduled in the order of arrival
	- Non-preemptive
- Run queue is literally a queue

## Impact on wait time and utilization
- Wait time depends on what comes before you
- Convoy effect
	- Several I/O bound jobs may have to wait for a CPU bound job
	- I/O utilization may be bad