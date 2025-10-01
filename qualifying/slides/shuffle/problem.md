# Oblivious Shuffling

<br>

Two parties, $P_0$ and $P_1$, want to shuffle a secret-shared vector $[\mathbf{x}]$ by a permutation $\pi$.

<v-clicks>

- Neither party should learn anything about $\pi$
- The output is a secret sharing $[\pi(\mathbf{x})]$

</v-clicks>

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<!--
We'll start by defining the oblivious shuffling problem.

In oblivious shuffling, we have two parties, P0 and P1, that want to shuffle a secret-shared vector x by some permutation pi.

The constraint is that neither party should learn anything about pi from the protocol.

The output is a secret sharing of the permuted vector.
-->