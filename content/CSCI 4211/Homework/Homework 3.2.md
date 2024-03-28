## 1.
#### a.
No. In order for the computer to know what is part of the subnet and when it should go out into the internet, the IP addresses within the network must share the same bits covered by the subnet mask.
#### b.
The subnet mask 255.255.224.0 can be converted to length 19. This leaves 13 bits for the subnet. $2^{13}=8192$, but we need to reserve one address for the router/switch. This makes the total number of supported devices $\boxed{8191}$.
#### c.
No. The time-to-live header in an IP packet is decremented as it goes through computers. If it reaches 0, the packet is dropped.
#### d.
The two fragments have the same datagram identifier. The first will also have the more flag set. The fragmentation offset can then be used to reassemble.
#### e.
If the datagram were reassembled by intermediate routers, it would need to be refragmented. This is much more intensive than if we just wait until the end.
## 2.
#### a.
When sending ACKs, the receiver will indicate within the receive window section of the TCP header how many bytes it can accept. The sender will then make sure not to send more than this.
#### b.
###### I.
From time 1 to 6 and from time 23 to 26
###### II.
From time 6 to 22
###### III.
Triple ack
###### IV.
Timeout
## 3.
#### a.
The congestion window starts at size one. We start in the slow start phase with an exponential increase of the congestion window. We continue until a triple ACK or timeout. A triple ACK halves the congestion window size and enters the congestion avoidance phase, where the congestion window size increments by one each cycle. A timeout resets the congestion window to size one and restarts the slow start phase. This time and future times, the congestion avoidance phase is started at half the congestion window size of the previous loss.
#### b.
###### I.
Because $\text{CongWin}<\text{threshold}$, the $\text{CongWin}$ is doubled to $\boxed{24\text{ KB}}$.
###### II.
Because no packets were lost, the $\text{threshold}$ stays the same at $\boxed{24\text{ KB}}$.
#### c.
###### I.
The $\text{CongWin}$ is reset to $1\text{ MSS}$, so it is $\boxed{1500\text{ bytes}}$.
###### II.
The $\text{threshold}$ is set to half of what $\text{CongWin}$ was, which puts it at $\boxed{12\text{ KB}}$.
#### d.
###### I.
Because $\text{CongWin}\geq \text{threshold}$, the $\text{CongWin}$ is incremented by $1\text{ MSS}$ to $\boxed{10.5\text{ KB}}$.
###### II.
Because no packets were lost, the $\text{threshold}$ stays the same at $\boxed{9\text{ KB}}$.