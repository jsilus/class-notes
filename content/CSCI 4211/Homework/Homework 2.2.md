## 1.
### a.
#### I.
Using a local DNS server can speed up the response time for name resolution requests. Forcing this use will also reduce the number of calls to the DNS hierarchy, speeding up it as well.
#### II.
The primary disadvantage is that if an IP is changed within the DNS hierarchy, the local DNS may not be aware of it and could send outdated resolutions.
#### III.
This disadvantage could be mitigated by querying the DNS hierarchy after some timeout, even if the resolution is cached.
### b.
This would be the result of simply summing up these round trip times, or
$$
2\text{RTT}_{0}+\sum\limits_{ i = 1 }^{n} \text{RTT}_{i}
$$
This is because the local host needs to query each remote DNS server back-to-back. There cannot be overlap because we don't know which server will contain it. Then, once an IP address is received, we can set up a connection with the IP and query it for the object, which takes $\text{RTT}_{0}$ each.
### $c$.
#### I.
If the connection is non-persistent, we will set up 9 individual connections and send a request across each one, so this will take $\boxed{18\text{RTT}_{0}}$
#### II.
We will need to set up one socket with one request for the page, one socket for the first 6 elements, and one more for the last 2 objects. This will take $\boxed{12\text{RTT}_{0}}$
#### III.
We will need to set up the socket once, and then we make 9 requests back to back. This is $\boxed{10\text{RTT}_{0}}$
#### IV.
We will need to set up the socket once. Then, we can make 1 request to get the page. Then, we can make 8 requests for the remaining objects, each overlapping by one half a RTT. This should be $\text{RTT}_{0}+\text{RTT}_{0}+4.5\text{RTT}_{0}=\boxed{6.5\text{RTT}_{0}}$
## 2.
### a.
#### I.
This is packet number 153. It is sent over UDP.
#### II.
This DNS query is of type A.
#### III.
No, it doesn't contain any answers.
#### IV.
There are 2 answers in the response.
#### V.
An IP address.
#### VI.
ns-auth-1.umn.edu
### b.

## 3.
### a.
#### I.
The client will wait for a SYNACK from the server. When it doesn't receive one after a short timeout, it will send another SYN.
#### II.
The server will do nothing as it knows nothing of the request.
### b.
#### I.
Yes, this scenario can happen. Because the TCP socket is not yet set up, the TCP creation packets essentially act like UDP packets. They can get lost or show up out of order.
#### II.
The server will attempt to accept this TCP connection. But, because no client is actually connected to it, this will fail the three-way handshake and the connection will not open after a short delay.
### c.
#### I.
If the server uses the same sequence number $y$, it will open a connection with nothing. This will never close, because there is nothing it is connected to.
#### II.
If the server uses a different sequence number $y$, the ACK will be ignored and nothing will happen. This is how TCP should be implemented.