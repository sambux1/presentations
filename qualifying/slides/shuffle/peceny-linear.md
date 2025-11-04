# Primary Construction

<img src="../../figures/perm-corr.png" style="width: 35%; float: right">

<br>

<v-clicks>

- Parties agree on a random vector $\mathbf{x}$ by computing $x_i = H(i)$
- $S$ samples $\pi \leftarrow S_n$
- $S$ permutes $\mathbf{x}$ by $\pi$ to set OPRF inputs
- $R$ samples a random PRF key $k$
- $R$ sets $A_i = F_k(x_i)$ in plaintext
- Parties set $B$ and $C$ as the OPRF outputs

</v-clicks>

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<!--
Here's a look at the primary construction, the one designed for practical performance.

A visualization of the protocol is here on the left. The high level idea is that the sender permutes its input vector and uses the permtued result as its input to the OPRF.

The protocol involves local computation by both parties followed by a single invocation of the OPRF for each element.

At least in my opinion, and I hope to convince you of this too, this is a very elegant construction, with no wasted or redundant operations.

First, the parties agree on a random vector x by querying a random oracle n times, instantiated with a standard collision-resistant hash function. We need this vector to be random, because the PRF family we're using is only weakly pseudorandom, meaning it produces pseudorandom outputs only for random inputs.

Next, the sender samples a random permutation of appropriate length, and this becomes one of their two outputs. The sender also permutes the vector x by pi and sets the result as its vector of inputs to the OPRF queries.

On the other side of things, the receiver samples a random PRF key k. Then the receiver evaluates the PRF on the entire x vector using the sampled key to obtain the A vector that forms the first of its two outputs.

So by this point, both parties have locally computed one of their two outputs, and we need to compute the second output. The second output is going to be a secret sharing of the A vector of the receiver, permuted by the permutation pi of the sender.

To obtain this secret sharing, the sender inputs its permuted vector to the OPRF, and the receiver inputs its PRF key. Using the OPRF as a black-box, each party gets their secret share as output, and the protocol is complete.
-->