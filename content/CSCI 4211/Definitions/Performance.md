## Definitions
- **Latency** is the delay. It is the time to send from point A to point B.
- **Bandwidth** is the throughput. This is the data transmitted per time.

## Source of Delay
$d_{nodal}=d_{proc}+d_{queue}+d_{trans}+d_{prop}$

1) nodal processing $d_{proc}$
	- check bit errors
	- determine output link
	- typically $\lt\mu s$, negligible
2) queueing delay $d_{queue}$
	- time waiting at output link for transmission
	- depends on congestion level of router
3) transmission delay $d_{trans}$
	- the time to put the bits onto the wire
	- $L/R$ where $L$ is packet length in bits and $R$ is transmission rate in bps
1) propagation delay $d_{prop}$
	- the time to propagate across the link
	- depends on the distance between devices
	- $d/s$ where $d$ is the length of the link and $s$ is the propagation speed $(\approx2\times10^{8}\text{ m/sec})$