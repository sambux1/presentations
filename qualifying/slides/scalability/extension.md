# Extending to More Complex Functions

<br>

<v-clicks>

Liu et al. (Usenix Security 2024)

</v-clicks>
<v-clicks>

- Based on the DN07 protocol
- Uses the properties of Mersenne prime fields
- Bitwise operations on arithmetic secret shares
- Targets machine learning inference
- Optimizes for round complexity
- Shows results with up to 63 parties

</v-clicks>

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<!--
The foundation for this family of protocols with a star topology has existed since 2007. Now I want to talk about some much more recent work which extends this line of work to more complex functions.

We're going to be looking at a paper from Usenix Security 2024 by Liu et al, which builds on the protocol by Damgard and Nielsen.

The key insight of the paper is that with Shamir secret shares over a Mersenne prime field, we can use the properties of Mersenne primes to effectively perform bitwise operations on arithmetic shares without first converting to a binary secret sharing scheme.

The paper proposes a set of subprotocols for specific operations targeted toward machine learning inference. These subprotocols include truncation, ReLU, and max pooling. Everything that's needed for the evaluation of convolutional neural networks.

One of their core design goals is to optimize for round complexity. The reason for this is that they scale to show results with up to 63 parties, and to do so, you can't afford to use a lot of rounds of communication, because you'll be bottlenecked by the slowest connection of the parties with the king.
-->