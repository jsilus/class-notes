### Types
- run queue: processes ready to run
- wait queues: processes waiting on an event
	- I/O completion of a device
	- Lock, alarm


Processes move between queues through their lifetime
- This updates the state of the [[Process Control Block]] appropriately
- This means that single threaded processes can only be on one queue at a time