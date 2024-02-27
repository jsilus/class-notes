Most process exhibit a sequence of CPU-I/O bursts
- Computer for some time
- Block for I/O

## When to switch?
- Non-Preemptive
	- Allow running process to voluntarily give up CPU
	- Block on I/O
	- Terminated
- Preemptive
	- Take CPU away from running process
	- [[Process Scheduling#What is a quantum?|Quantum]] expires
	- Another process unblocks

## What should be optimized?
- CPU utilization
- Throughput - number of processes finished per unit time
- Turnaround time - total time for a process to run
- Waiting time - time spent waiting in the run queue
- Response time - time for the CPU to respond

## Methods
- [[First Come First Serve]]
- [[Lottery]]
- [[Hierarchical]]
- [[Multi-level Queue]]
- [[Priority]]
- [[Round-Robin]]
- [[Shortest Job First]]
- [[Proportional-Share]]