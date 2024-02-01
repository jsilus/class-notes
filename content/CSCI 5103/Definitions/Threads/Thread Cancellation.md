Terminate a thread and reclaim its resources

## When can a thread be cancelled?
- Asynchronous cancellation: cancel immediately
- Deferred cancellation: cancel later
	- When the target thread is ready to terminate
	- This point when its ready is called the cancellation point