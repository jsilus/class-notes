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
For this problem, all we are considering is the transmission delay,  which is equal to $\frac{L}{R}$. If we want to do that over multiple links, equation 1.1 makes sense. If we are generalizing it with the number of packets, we must consider that multiple links can be utilized at once.
$$ 
\begin{align*}
d_{\text{end-to-end}}&= (N+P)*\frac{L}{R}\\
\text{where}\\
N&\text{ is the number of links}\\
P&\text{ is the number of packets}\\
R&\text{ is the transmission rate}\\
L&\text{ is the length of the message}
\end{align*}
$$
We still need to send all of the packets, so we multiply it by $N+P$ instead. It takes $N$ links to get the first packet across, but because they are all being sent continuously, it will be a constant stream of data after that first packet. Then, we only need to consider the number of packets $P$.
#### d.
Using this equation, it would take
$$
d_{\text{end-to-end}}=(3+100)\frac{10\,\text{ Kb}}{5000\,\text{ Kbps}}=\boxed{0.206\,\text{ s}}
$$
This is about three times faster than our original value of 0.6 seconds.
#### e.
If we lose a packet, we lose much less information that needs to be recovered. Also, we get the first packet quicker, so we can start loading information much earlier if its formatted well.
#### f.
Packets could show up out of order or be missing, so the receiving application needs to be able to handle this. Additionally, each of the lower layer's headers would need to be added on for each packet, so at higher layers it might be much more data sent.