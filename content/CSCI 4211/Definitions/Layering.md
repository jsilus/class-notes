Layer $N$ relies on services from layer $N-1$ to provide a service to layer $N+1$

## Advantages
- Hide complexity from layers
- Changing a layer doesn't affect other layers
- Similar to OOP
- We can consider logical (layer to layer) vs physical (layer down and up to layer) communication

## Disadvantages
- If there's an error, there are many different layers where it could have occurred