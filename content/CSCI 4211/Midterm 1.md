Honor Pledge: I hereby affirm that I will not give or receive any unauthorized help on
this exam and that all work will be my own. Justin Silus

## 1.
#### a.
False. The transmission delay is the time it takes to physically put the bits onto the wire. There is no way to circumvent this cost, as any conversion between digital and physical signals must undergo it.
#### b.
False. Just because HTTP/1.1 is persistent doesn't mean that it is stateful. It is not stateful because it doesn't require any states on the server. It simply will keep the socket open longer.
#### c.
False. We also need to know whether or not it is TCP or UDP. We can send to a socket with just the port number, but the packet won't be in the right form and the data may not be properly transmitted.
#### d.
True. While the checksum wouldn't say what bits are corrupted from transmission, it is extremely unlikely to add up if any have.
#### e.
False. First, UDP doesn't provide reliable data transfer. Second, UDP is used to reduce delay because it doesn't need to set up a connection.
## 2.
#### a.
Assuming the link isn't busy and we have no transmission delay, this would take twice the propagation delay. Once for the request and once for the response. This means it would take $\boxed{4\text{ms}}$. This also assumes that `www.tiktok.com` is cached in the local DNS server.
#### b.
We would query the local server. This local server would first query the root, then the TLD, and then the authoritative servers. Assuming we still use the $4\text{ms}$ round trip time to the local server, this would take
$$
4\text{ms}+18\text{ms}+16\text{ms}+40\text{ms}=\boxed{78\text{ms}}
$$
#### c.
###### I.
We would use 1 RTT to set up a connection and one more to send the request and receive a response. This means it would take $\boxed{8\text{ms}}$
###### II.
We would use 2 RTT for each connection. This means that we would have
$$
2\cdot4\text{ms}+2\cdot16\text{ms}+2\cdot40\text{ms}=\boxed{120\text{ms}}
$$
## 3.
#### a.
###### I.
The client will not get the corresponding SYNACK and will re-send the SYN packet.
###### II.
The server will wait for an ACK. When a SYN comes instead, it knows to repeat the SYNACK.
#### b.
###### I.
The client will wait, assuming the connection will open soon. Another SYNACK will be sent, and another ACK will be sent in response.
###### II.
The server will wait, expecting an ACK. When none shows up, a new SYNACK will be sent out.
#### c.
###### I.
Yes, this situation can happen. Individual packets can be lost or sent out of order so this is possible. This would be a lost SYNACK that is resent and received. Later, the originally sent SYNACK shows up.
###### II.
The client will do nothing in response to this. Because the connection is old, the client now has a new sequence number $\tilde{x}\neq x$, so the SYNACK is known to be bad.
#### d.
Assume that the ACK to the FIN is not received by the server. In this case, the server doesn't know that the connection is closed. Similarly to all other packets in this three-way handshake protocol, the FIN is resent. If the connection is closed by the client too soon, it won't be there to send another ACK. Because of this, the connection stays open until enough time has elapsed for the ACK to be sent to the server and a new FIN to be sent back.
## 4.
#### a.
The 1-bit sequence number helps to add a very simple level of error correction to duplicate or out-of-order packets. With it, if a packet is received that is not the expected sequence number, the packet can be assumed to be a duplicate or out-of-order and can be ignored.
#### b.
###### I.
The receiver will send packet no. 2 to the upper layer and send an acknowledgement for it. It will also increase the starting index of its buffer.
###### II.
The receiver will send packet no. 3 to the upper layer and send an acknowledgement for it. It will also increase the starting index of its buffer.
###### III.
The receiver will buffer packet no. 5. It will not send an acknowledgement for it. It will not send the packet to the upper layer. It will not increase the starting index of its buffer.
###### IV.
The receiver will have a window centered on $\boxed{4\,5\,6\,7}$, with 5 indicated as received.
#### c.
The sender will have a window centered on $\boxed{4\,5\,6\,7}$ with none indicated as arrived.
#### d.
###### I.
First, we calculate the transmission delay to be
$$
\frac{10\,\text{KB}}{10\,\text{Gbps}}=8\,\mu \text{s}
$$
Then, we calculate the round trip time to be $72\,\mu \text{s}$. Then, we calculate the utilization to be
$$
\frac{4\times8\,\mu \text{s}}{72\,\mu \text{s}+8\,\mu \text{s}}=\boxed{0.4}
$$
###### II.
This increases linearly according to $W$, so we know that this will be maximized at $\boxed{W=10}$
###### III.
If we are sending 10 packets, then we need 4 bits to represent the sequence number.