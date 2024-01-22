## Definitions
- **Latency** is the delay. It is the time to send from point A to point B.
- **Bandwidth** is the throughput. This is the data transmitted per time.

## Source of Delay
$d_{nodal}=d_{proc}+d_{queue}+d_{trans}+d_{prop}$

1) nodal processing $d_{proc}$
	- check bit errors
	- determine output link
	- typically $\lt\mu s$
2) queueing delay $d_{queue}$
	- time waiting at output link for transmission
	- depends on congestion level of router
3) transmission delay $d_{trans}$
4) propagation delay $d_{prop}$