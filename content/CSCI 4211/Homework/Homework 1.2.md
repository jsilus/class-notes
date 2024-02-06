## 1.
#### a.
A protocol is an agreed upon set of rules that programs follow. These allow for standardization of important processes.
#### b.
Standards are important for protocols because programs need to know what kind of data they are accessing. Fundamentally, everything is just 1s and 0s, so if you can't reliably tell where things will be, you can't decode it across programs.
#### c.
The application layer is responsible for specific application protocols like HTTP or SMTP. 
The transport layer is responsible for data transfer. Its examples are TCP and UDP.
The network layer is responsible for routing between devices over a longer range. This is IP.
The link layer is responsible for routing across a specific device like WiFi or ethernet.
The physical layer is the wires.
#### d.
False. In a controlled network where we know how much data is going to be used so that we don't face congestion, circuit switching would be much faster as we wouldn't need to figure out the connection at every packet.
#### e.
Because we add more data on as we go up each layer, packets can get much larger than would otherwise be necessary.
#### f.
Transmission delay is the amount of time it takes to physically put the bits from data onto the wire transmitting it.
#### g.
Queuing delay is the amount of time a packet takes sitting at a link waiting due to congestion. If too many devices are requesting data from a single router, there may be queuing delay.
## 2.
#### a.
Circuit switching will allocate all resources necessary at the beginning, meaning that this can support at most
$$
\frac{1\,\text{ Gbps}}{10\,\text{ Mbps/user}}=\boxed{100\,\text{ users}}
$$
#### b.
This is given in the problem description. $\boxed{0.01}$
#### c.
Using the binomial distribution, we get
$$
{500\choose 250}(0.01)^{250}(0.99)^{250}
$$
$$

$$
#### d.
We know from part (a) that at maximum capacity, the link can hold at most 100 users. Then, the binomial distribution can be modified to sum up the probability for whenever we have more than that many users.
$$
\sum\limits_{n=101}^{500}{500\choose n}(0.01)^{n}(0.99)^{500-n}
$$
## 3.
#### a.
###### I
It takes 
$$
\frac{1\,\text{ Mb}}{5\,\text{ Mbps}}=\boxed{0.2\,\text{ s}}
$$
###### II
We do that three times, so it will take $\boxed{0.6\,\text{ s}}$
#### b.
###### I
$$
\frac{10\,\text{ Kb}}{5000\,\text{ Kbps}}=\boxed{0.002\,\text{ s}}
$$
###### II
It will be received over the next 0.002 seconds, so at time $\boxed{0.004\,\text{ s}}$
#### c.
